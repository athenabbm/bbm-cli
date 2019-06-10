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

function parse(keys, value) {
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
  languageList.forEach(key => {
    let ks = []
    valmap[key] = {}
    babel.transform(values[key], {
      plugins: [
        [parse(ks, valmap[key])]
      ]
    });
    if (ks.length > keys.length) {
      keys = ks;
    }
  })

  let objectProperty = []
  keys.forEach(k => {
    objectProperty.push(t.objectProperty(k, t.objectExpression(languageList.map(lan => t.objectProperty(t.identifier(lan), valmap[lan][k.name])))))

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
