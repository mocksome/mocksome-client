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

    console.log(this._definition);
    return this;
  }

  async create() {
    this._client._create(this._definition);
  }
}

module.exports = ExpectationCreator;