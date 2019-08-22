const withParam = require('./with-param');

module.exports = (path) => {
  if (path === undefined) {
    return {
      withParam
    }
  }

  const ret = {
    ...req,
    path
  };

  return ret;
}