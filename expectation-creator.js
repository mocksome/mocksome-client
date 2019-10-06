const debug = require('debug')('mocksome-client:expectation-creator');

class ExpectationCreator {
  constructor(client) {
    this._client = client;
    this._definition = {
      request: {},
      response: {
        headers: {}
      },
      times: 'unlimited'
    };
  }

  with(query) {
    this._definition.request = query(this._definition.request);
    return this;
  }

  response(builder) {
    this._definition.response = builder(this._definition.response);
    return this;
  }

  create() {
    return this._client._create(this._definition);
  }
}

module.exports = ExpectationCreator;