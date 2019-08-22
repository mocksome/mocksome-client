module.exports = (key, value) => {
  return (req) => {
    // req.headers = {
    //   ...req.headers,
    //   [key]: value
    // }

    const obj = {
      ...req,
      headers: {
        ...req.headers,
        [key]: value
      }
    };

    // console.log(obj);

    return obj;
  }
};