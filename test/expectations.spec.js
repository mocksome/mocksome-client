const { expect } = require('chai');
const ExpectationCreator = require('../expectation-creator');
const header = require('../queries/header');
const body = require('../queries/body');
const path = require('../queries/path');
const diff = require('deep-diff');
const responses = require('../responses');

const dummyClient = {
  _create: (exp) => exp
};

describe('expectations', () => {
  let creator;

  beforeEach(() => {
    creator = new ExpectationCreator(dummyClient);
  });

  it('can create an expectation with a header', async () => {
    const result = creator
      .with(header('x-test', 'value'))
      .response(responses.codes.ok)
      .create();

    const differences = diff({
      request: {
        headers: {
          'x-test': 'value'
        }
      },
      response: {
        statusCode: 200,
        headers: {}
      },
      times: 'unlimited'
    }, result);

    expect(differences).to.eq(undefined, JSON.stringify(differences));
  });

  it('can create an expectations with two matchers', () => {
    const result = creator
      .with(header('x-test', 'value'))
      .with(body.json.includes({ one: { two: 'hello' } }))
      .create();

      const differences = diff({
        request: {
          headers: {
            'x-test': 'value'
          },
          body: {
            one: { 
              two: 'hello'
            }
          },
          bodyType: 'json',
          bodyMatchType: 'includes'
        },
        response: {
          headers: {}
        },
        times: 'unlimited'
      }, result);

      expect(differences).to.eq(undefined, JSON.stringify(differences));    
  });

  it('can create an st list stub', () => {
    const template = {
      hello: 'goodbye'
    }
    const result = creator
      .with(path('/somepath'))
      .response(responses.stub.st.list([1,4], template))
      .create();

    expect(result).to.eql({
      request: {
        path: '/somepath'
      },
      response: {
        headers: {},
        mode: 'stub',
        templateType: 'st',
        generatorRange: [1,4],
        template
      },
      times: 'unlimited'
    })
  });

  it('can create an st item stub', () => {
    const template = {
      hello: 'goodbye'
    }
    const result = creator
      .with(path('/somepath'))
      .response(responses.stub.st.item(template))
      .create();

    expect(result).to.eql({
      request: {
        path: '/somepath'
      },
      response: {
        headers: {},
        mode: 'stub',
        templateType: 'st',
        template
      },
      times: 'unlimited'
    })
  });

  it('can create a json response', () => {
    const result = creator.response(responses.json.created({ hello: 'goodbye' })).create();

    expect(result).to.eql({
      request: {
      },
      response: {
        headers: {},
        statusCode: 201,
        headers: {
          'content-type': 'application/json'
        },
        body: {
          hello: 'goodbye'
        }
      },
      times: 'unlimited'
    });
  });

  it('can respond with a string', () => {
    const result = creator
      .response(responses.string.ok('hello'))
      .create();

    expect(result).to.eql({
      request: {
      },
      response: {
        headers: {},
        statusCode: 200,
        headers: {
          'content-type': 'text/plain'
        },
        body: 'hello'
      },
      times: 'unlimited'
    });
  });
})