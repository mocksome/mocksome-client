module.exports = (str) => {
  return (resp) => {
    return {
      headers: {
        ...resp.headers,
        'content-type': 'text/plan'
      },
      statusCode: 200,
      body: str
    }
  }
}