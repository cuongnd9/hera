# giin

🦄 Simple and lightweight GraphQL client.

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg)](#contributors)
[![Build Status](https://travis-ci.com/103cuong/giin.svg?branch=master)](https://travis-ci.com/103cuong/giin)
![npm](https://img.shields.io/npm/v/giin.svg)
![david](https://img.shields.io/david/103cuong/giin.svg)
[![Hits-of-Code](https://hitsofcode.com/github/103cuong/giin)](https://hitsofcode.com/view/github/103cuong/giin)
[![GitHub](https://img.shields.io/github/license/103cuong/giin.svg)](https://github.com/103cuong/giin/blob/master/LICENSE)

## Installation

```sh
yarn add giin
# or
npm install -s giin
```

## Usage

```ts
import { giin } from 'giin';
// const { giin } = require('giin');

giin({
  option: {
    url: 'https://example.com'
  },
  query: `
    query {
      user(id: $id) {
        id
        name
        age
      }
    }
  `,
  variables: {
    id: 1
  }
});
```

## 👻 Special 🚧

giin allows passing parameters as objects.

```ts
giin({
  option: {
    url: 'https://example.com'
  },
  query: `
    mutation {
      createUser(info: $info) {
        id
        name
        age
        address
        job
      }
    }
  `,
  variables: {
    info: {
      name: 'Cuong Duy Nguyen',
      age: 21,
      address: 'Ho Chi Minh',
      job: 'Software Engineer'
    }
  }
});
```

## API

### options

```ts
{
  // `url` is the server URL that will be used for the request
  url: '/example',
  // `headers` are custom headers to be sent
  headers: {
    token: 'e3ey3yeu3yeu3yeu3y',
    'Content-Type': 'application/json'
  }
}
```

### query

> `query` is query or mutation in Graphql

**Graphql's query**

```ts
query: `
  query {
    user(id: $id) {
      id
      name
      age
    }
  }
`
```

**Graphql's mutation**

```ts
query: `
  mutation {
    createUser(info: $info) {
      id
      name
      age
      address
      job
    }
  }
`
```

### variables

> variables is used to pass values to query's variables

```ts
query: `
  mutation {
    createUser(info: $info) {
      id
      name
      age
      address
      job
    }
  }
`,
variables: {
  info: {
    name: 'Cuong Duy Nguyen',
    age: 21,
    address: 'Ho Chi Minh',
    job: 'Software Engineer'
  }
}
```

## Contributors

[![](https://sourcerer.io/fame/103cuong/103cuong/giin/images/0)](https://sourcerer.io/fame/103cuong/103cuong/giin/links/0)[![](https://sourcerer.io/fame/103cuong/103cuong/giin/images/1)](https://sourcerer.io/fame/103cuong/103cuong/giin/links/1)[![](https://sourcerer.io/fame/103cuong/103cuong/giin/images/2)](https://sourcerer.io/fame/103cuong/103cuong/giin/links/2)[![](https://sourcerer.io/fame/103cuong/103cuong/giin/images/3)](https://sourcerer.io/fame/103cuong/103cuong/giin/links/3)[![](https://sourcerer.io/fame/103cuong/103cuong/giin/images/4)](https://sourcerer.io/fame/103cuong/103cuong/giin/links/4)[![](https://sourcerer.io/fame/103cuong/103cuong/giin/images/5)](https://sourcerer.io/fame/103cuong/103cuong/giin/links/5)[![](https://sourcerer.io/fame/103cuong/103cuong/giin/images/6)](https://sourcerer.io/fame/103cuong/103cuong/giin/links/6)[![](https://sourcerer.io/fame/103cuong/103cuong/giin/images/7)](https://sourcerer.io/fame/103cuong/103cuong/giin/links/7)

## License

MIT © [103cuong](https://github.com/103cuong)
