const MockServerClient = require('../index');
const { path, method, get } = require('../queries');
const responses = require('../responses');

// todo: move these out to a separate repo so the library can be consumed properly, as it would be in real life
//
// todo: would it make more sense to say responses.ok.json({ key: val })?, responses.ok.text('hello')?

describe('tests to make sure the documentation is correct', () => {
  it('simple example', () => {
    const client = new MocksomeClient('http://localhost:8080');

    const run = async () => {
      await client.expectation()
                  .with(method('GET'))
                  .with(path('/somepath'))
                  .response(responses.json.ok({ hello: 'goodbye' }))
                  .create();
    }

    run();
  });

  it('convenience method example', async () => {
    const client = new MocksomeClient('http://localhost:8080');

    const run = async () => {
      await client.expectation()
                  .with(get('/somepath'))
                  .response(responses.json.ok({ hello: 'goodbye' }))
                  .create();
    }

    run();
  })
});