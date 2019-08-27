module.exports = (path) => {
  return (req) => {
    const obj = {
      ...req,
      path
    };

    return obj;
  }
};