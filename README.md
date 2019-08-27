# NodeJS client for Mocksome, Mocking Server

## To Install

```
npm install mocksome-client
```

## Simple example

```
const MockServerClient = require('mocksome-client');
const { path } = require('mocksome-client/queries');
const responses = require('mocksome-client/responses');

const client = new MockServerClient('http://localhost:8080');

const run = async () => {
  await client.expectation()
              .with(path('/somepath'))
              .response(responses.json.ok({ hello: 'goodbye' }))
              .create();
}

run();

```

Will return:

```
curl http://localhost:8080/somepath

{"hello":"goodbye"}

```