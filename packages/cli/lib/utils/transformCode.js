"use strict";

const babel = require("babel-core");

function pick(obj, keys) {
  return keys.reduce(
    (ret, key) => ({
      ...ret,
      [key]: obj[key]
    }),
    {}
  );
}

function transform() {
  return function transformStr({ types: t }) {
    const result = {};
    return {
      visitor: {
        AssignmentExpression: {
          enter(path) {
            path.node.right.properties.forEach(property => {
              property.value.properties.forEach(item => {
                const itemComments = pick(item, ["leadingComments"]);
                const { value } = item;
                let { key } = property;
                key = Object.assign({}, key, itemComments);
                (result[item.key.name]
                  ? result[item.key.name]
                  : (result[item.key.name] = [])
                ).push(t.objectProperty(key, value));
              });
            });
          },
          exit(path, { opts }) {
            path.parentPath.replaceWith(
              t.objectExpression(
                opts.languageList
                  .filter(key => !!result[key])
                  .map(key => {
                    return t.objectProperty(
                      t.identifier(key),
                      t.objectExpression(result[key])
                    );
                  })
              )
            );
          }
        }
      }
    };
  };
}

function transformCode(code, languageList) {
  const { ast } = babel.transform(code, {
    plugins: [
      [
        transform(),
        {
          languageList
        }
      ]
    ]
  });
  const text = babel.transformFromAst(ast, null).code;

  return languageList.reduce((pre, languageKey) => {
    const reg = new RegExp(`(${languageKey})\\s*:([\\w\\W]+?})`);
    return {
      ...pre,
      [languageKey]: `export default ${text.match(reg)[2]}`
    };
  }, {});
}

module.exports = transformCode;
module.exports.pick = pick;
