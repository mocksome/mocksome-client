const rp = require('request-promise');

const defaultOptions = {
  resolveWithFullResponse: true,
  json: true,
  rejectUnauthorized: false,
  simple: false
}

class MockServerHttp {
  constructor(url) {
    this._url = url;
  }

  async record (definition) {
    const options = {
      ...defaultOptions,
      method: 'POST',
      uri: `${this._url}/__record`,
      body: definition
    };

    try {
      const response = await rp(options);

      if (response.statusCode === 200) {
        return response.body;
      }
    } catch (e) {
      return {
        isSuccess: false
      }
    }    
  }
}

module.exports = MockServerHttp;