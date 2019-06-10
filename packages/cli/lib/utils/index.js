const fs = require('fs-extra');

function getDirs(path, opts) {
  return fs
    .readdirSync(path, {withFileTypes: true})
    .reduce((res, dirent) => {
      if (!dirent.isDirectory()) {
        return res;
      }
      if (!Array.isArray(opts)) {
        return res.concat(dirent.name)
      }
      if (opts.includes(dirent.name)) {
        return res.concat(dirent.name)
      }
      return res;
    }, [])
}

exports.getDirs = getDirs;
