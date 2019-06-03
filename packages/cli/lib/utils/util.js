function defaults(defaultOpts, opts) {
  const result = Object.assign({},opts);
  Object.keys(defaultOpts).forEach(key => {
    if (opts[key] === undefined && defaultOpts[key]!== undefined) {
      result[key] = defaultOpts[key]
    }
  })
  return result;
}

exports.defaults = defaults;
