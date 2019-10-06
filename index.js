const debug = require('debug')('mocksome-client:MockServerClient');
const assert = require('assert');
const MockServerHttp = require('./transport/mock-server-http');
const ExpectationCreator = require('./expectation-creator');
const MockServerQueryable = require('./mockserver-queryable');

class MockServerClient {
  // todo: HTTP is the default, but could also allow a different transport to be 
  //       passed into the constructor
  constructor(url) {
    assert(url, 'url must be provided to MockServerClient');
    this._url = url;
    this._transport = new MockServerHttp(url);
  }

  // TODO...
  async _fetch(definition) {
  }

  // TODO...
  async _verify(definition) {
  }

  async _create(definition) {
    debug('sending definition', definition);
    const result = await this._transport.record(definition);
    return result;
    
    // if (result.isSuccess) {
    //   return true;
    // } else {
    //   throw new Exception('Could not create expectation');
    // }
  }

  // TODO...
  verification() {
    return new ExpectationCreator(this);
  }

  requests() {
    return new MockServerQueryable(this);
  }

  expectation() {
    return new ExpectationCreator(this);
  }
}

module.exports = MockServerClient;