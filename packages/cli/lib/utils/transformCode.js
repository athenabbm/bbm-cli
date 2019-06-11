"use strict";

const babel = require("babel-core");
const template = require('babel-template');
const t = require('babel-types');

function pick(obj, keys) {
  return keys.reduce((ret, key) => ({
    ...ret,
    [key]: obj[key]
  }), {});
}

function transform() {
  return function transformStr({types: t}) {
    const result = {};
    return {
      visitor: {
        'AssignmentExpression|ExportDefaultDeclaration': {
          enter(path) {
            path
              .node
              .right
              .properties
              .forEach(property => {
                property
                  .value
                  .properties
                  .forEach(item => {
                    const itemComments = pick(item, ["leadingComments"]);
                    const {value} = item;
                    let {key} = property;
                    key = Object.assign({}, key, itemComments);
                    (result[item.key.name]
                      ? result[item.key.name]
                      : (result[item.key.name] = [])).push(t.objectProperty(key, value));
                  });
              });
          },
          exit(path, {opts}) {
            path
              .parentPath
              .replaceWith(t.objectExpression(opts.languageList.filter(key => !!result[key]).map(key => {
                return t.objectProperty(t.identifier(key), t.objectExpression(result[key]));
              })));
          }
        }
      }
    };
  };
}

function transformCode(code, languageList) {
  const {ast} = babel.transform(code, {
    plugins: [
      [transform(), {
          languageList
        }]
    ]
  });
  const text = babel
    .transformFromAst(ast, null)
    .code;

  return languageList.reduce((pre, languageKey) => {
    const reg = new RegExp(`(${languageKey})\\s*:([\\w\\W]+?})`);
    return {
      ...pre,
      [languageKey]: `export default ${text.match(reg)[2]}`
    };
  }, {});
}

function parse(keys, value, leadingComments) {
  return function transform({types: t}) {
    return {
      visitor: {
        ObjectExpression(path) {
          path
            .node
            .properties
            .forEach(node => {
              keys.push(node.key)
              value[node.key.name] = node.value
              leadingComments[node.key.name] = node.leadingComments
            })
        }
      }
    }
  }
}

function mergeTransform() {
  return function transform({types}) {
    return {
      visitor: {
        AssignmentExpression(path, {opts}) {
          path.replaceWith(types.objectExpression(opts.objectProperty))
        }
      }
    }
  }
}

function parseLanguage(values) {
  let languageList = Object.keys(values);
  let keys = [];
  let valmap = {}
  let leadingCommentsMap = {}
  languageList.forEach(key => {
    let ks = []
    valmap[key] = {}
    leadingCommentsMap[key] = {}
    babel.transform(values[key], {
      plugins: [
        [parse(ks, valmap[key], leadingCommentsMap[key])]
      ]
    });
    if (ks.length > keys.length) {
      keys = ks;
    }
  })

  let objectProperty = [];
  let totalLineLen = 0;
  let totalLen = 0;
  keys.forEach(k => {
    objectProperty.push(
      t.objectProperty(k,
        t.objectExpression(
          languageList.map(lan => {
            let node = t.objectProperty(t.identifier(lan), valmap[lan][k.name]);
            if (leadingCommentsMap[lan][k.name]) {
              let comments = leadingCommentsMap[lan][k.name][0];
              let loc = comments.loc;
              let start = comments.start;
              let end = comments.end;

              let lineStart = loc.start.line
              let lineEnd = loc.end.line

              let len = end - start;
              let lineLen = lineEnd - lineStart;

              totalLineLen += lineLen;
              totalLen += len;


              let value =  node.value;

              value.loc.start.line += totalLineLen
              value.loc.end.line += totalLineLen
              value.start += totalLen;
              value.end += totalLen;

              start = value.start - len - lan.length - 1;
              end = value.start - lan.length - 1;




              let valueLine = value.loc.start.line;
              loc.start.line = valueLine - 1 - (lineLen)
              loc.end.line = valueLine - 1

              comments.start = start;
              comments.end = end;

              node.leadingComments = [comments]
            }
            return node;
          })
        )
      )
    )

  })
  let {ast} = babel.transform('module.exports = {}', {
    plugins: [
      [mergeTransform(), {
          objectProperty
        }]
    ]
  })

  const text = babel
    .transformFromAst(ast, null)
    .code;

  return text
}

module.exports = transformCode;
module.exports.parseLanguage = parseLanguage;
module.exports.pick = pick;
