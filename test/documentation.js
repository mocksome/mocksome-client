// const MockServerClient = require('../index');
// const header = require('../queries/header');
// const body = require('../queries/body');
// const path = require('../queries/path');
// const responses = require('../responses');

const MockServerClient = require('../index');
const { path } = require('../queries');
const responses = require('../responses');

describe('tests to make sure the documentation is correct', () => {
  it('simple example', () => {
    const client = new MockServerClient('http://localhost:8080');

    const run = async () => {
      await client.expectation()
                  .with(path('/somepath'))
                  .response(responses.json.ok({ hello: 'goodbye' }))
                  .create();
    }

    run();
  });
});