module.exports = (body) => {
  return (request) => {
    console.log('hello');
    return { ...request, bodyMatchType: 'includes', bodyType: 'json', body };
  }
}