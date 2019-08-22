const MockServerClient = require('../index');
const header = require('../queries/header');
const body = require('../queries/body');
const path = require('../queries/path');
const responses = require('../responses');

describe('overall', () => {
  xit('overall', () => {
    const client = new MockServerClient();

    client.requests().has(header('x-test', 'value')).fetch() ;
  });

  xit('can create an expectations', () => {
    const client = new MockServerClient('http://localhost:8080');

    client.expectation().with(header('x-test', 'value')).create();
  });

  it('can create an expectations with two matchers', () => {
    const client = new MockServerClient('http://localhost:8080');

    client.expectation()
      // .with(header('x-test', 'value'))
      .with(body.json.includes({ one: { two: 'hello' } }))
      .create();
  });

  // it('can create stubs', () => {
  //   client.expectation()
  //     .with(rest('/products/{id}'))
  //     .response(restStub())
  // })

  it('can create a resource stub', () => {
    // const client = new MockServerClient('http://localhost:8080');

    // const stub = {
    //   template: {
    //     id: 123,
    //     name: 'blah',
    //     description: 'this can be anything',
    //     categories: [
    //       { id: 1234, name: 'Socks' }
    //     ]
    //   },
    //   overrides: {
    //     id: { $param: 'id', type: 'integer' } // this will take the value of the path param
    //   }
    // }

    // client.expectation()
    //   .with(path().withParam('/products/:id'))
    //   .response(singleStub(stub))
    //   .create();

    // client.expectation()
    //   .with(path().withParam('/products'))
    //   .response(listStub(stub))
    //   .create();
  });

  it ('can create responses', async () => {
    const client = new MockServerClient('http://localhost:8080');
    await client.expectation().response(responses.json.created({ hello: 'goodbye' })).create();
  })
})