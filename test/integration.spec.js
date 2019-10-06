const { expect } = require('chai');
const MockServerClient = require('../index');
const header = require('../queries/header');
const body = require('../queries/body');
const path = require('../queries/path');
const diff = require('deep-diff');
const responses = require('../responses');

const FUNC_TO_IGNORE = (path, key) => path.length === 0 && ~['id', 'timestamp', 'defaultsApplied'].indexOf(key);

describe('integration tests', () => {
  it('can create an expectation', async () => {
    const client = new MockServerClient('http://localhost:8080');

    const result = await client.expectation()
      .with(header('x-test', 'value'))
      .response(responses.codes.ok)
      .create();

    const differences = diff({
      request: {
        headers: {
          'x-test': 'value'
        },
        headersMatchType: 'includes',
        bodyMatchType: 'includes'
      },
      response: {
        statusCode: 200,
        headers: {}
      },
      times: 'unlimited'
    }, result, FUNC_TO_IGNORE);

    expect(differences).to.eq(undefined, JSON.stringify(differences));
  });
})