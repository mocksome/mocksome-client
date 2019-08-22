const assert = require('assert');
const MockServerHttp = require('./transport/mock-server-http');
const ExpectationCreator = require('./expectation-creator');
const MockServerQueryable = require('./mockserver-queryable');

class MockServerClient {
  constructor(url) {
    assert(url, 'url must be provided (MockServerClient');
    this._url = url;
    this._transport = new MockServerHttp(url);
  }
  
  // todo: HTTP is the default, but could also allow a different transport to be 
  //       passed into the constructor

  _fetch() {
  }

  async _create(definition) {
    const result = await this._transport.record(definition);
    
    if (result.isSuccess) {
      return true;
    } else {
      throw new Exception('Could not create expectation');
    }
  }

  requests() {
    // this._queryable = new MockServerQueryable(this);
    // return this._queryable;
    return new MockServerQueryable(this);
  }

  expectation() {
    return new ExpectationCreator(this);
  }
}

module.exports = MockServerClient;