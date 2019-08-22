class MockServerQueryable {
  constructor(client) {
    this._client = client;
    this._definition = {};
  }

  has(query) {
    query(this._definition);
    return this;
  }

  fetch() {
    return this._client._fetch();
  }
}

module.exports = MockServerQueryable;