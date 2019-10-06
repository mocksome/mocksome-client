const MockServerClient = require('../index');
const { header, body } = require('../queries');

describe('find-requests', () => {
  it('can find a request with a header', () => {
    const client = new MockServerClient('http://localhost:8080');
    client.requests().has(header('x-test', 'value')).fetch();
  });
});