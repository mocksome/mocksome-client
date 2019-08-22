module.exports = (path) => {
  return (req) => {
    const ret = {
      ...req,
      path: { $withParam: path }
    };

    return ret;
  }
}