const rp = require('request-promise');

class MockServerHttp {
  constructor(url) {
    this._url = url;
  }

  async record (definition) {
    const options = {
      resolveWithFullResponse: true,
      json: true,
      rejectUnauthorized: false,
      method: 'POST',
      uri: `${this._url}/__record`,
      body: definition
    };

    try {
      const response = await rp(options);

      if (response.statusCode === 200) {
        return {
          isSuccess: true
        }
      }
    } catch (e) {
      return {
        isSuccess: false
      }
    }    
  }
}

module.exports = MockServerHttp;