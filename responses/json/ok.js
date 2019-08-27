module.exports = (body) => {
  return (resp) => {
    return {
      headers: {
        ...resp.headers,
        'content-type': 'application/json'
      },
      statusCode: 200,
      body
    }
  }
}