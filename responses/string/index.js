const createBuilder = (code) => {
  return (str) => {
    return (resp) => {
      return {
        headers: {
          ...resp.headers,
          'content-type': 'text/plain'
        },
        statusCode: code,
        body: str
      }
    }
  }
}

module.exports = {
  created: createBuilder(201),
  ok: createBuilder(200)
}