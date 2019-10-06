const createBuilder = (code) => {
  return (body) => {
    return (resp) => {
      return {
        headers: {
          ...resp.headers,
          'content-type': 'application/json'
        },
        statusCode: code,
        body
      }
    }
  }
}

module.exports = {
  created: createBuilder(201),
  ok: createBuilder(200)
}