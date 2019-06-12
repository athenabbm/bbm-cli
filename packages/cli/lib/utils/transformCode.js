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
  let startIndex = 0,endIndx = 0, len = languageList.length;
  return languageList.reduce((pre, languageKey,index) => {
    if (index < len - 1) {
      endIndx = text.indexOf(languageList[index+1])
    }else {
      endIndx = -3;
    }
    const reg = new RegExp(`(${languageKey})\\s*:([\\w\\W]+})`);
    let finalText = text.slice(startIndex,endIndx);
    startIndex = endIndx
    return {
      ...pre,
      [languageKey]: `export default ${finalText.match(reg)[2]}`
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
              keys.push(node.key);
              let dataIndex = node.key.name || node.key.value;
              value[dataIndex] = node.value;
              leadingComments[dataIndex] = node.leadingComments
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
            let dataIndex = k.name || k.value;
            let node = t.objectProperty(t.identifier(lan), valmap[lan][dataIndex]);
            if (leadingCommentsMap[lan][dataIndex]) {
              let comments = leadingCommentsMap[lan][dataIndex][0];
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
            // console.log([k.name])
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
