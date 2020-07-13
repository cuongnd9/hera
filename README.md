# hera

👩🏼‍💻 Simple and lightweight GraphQL client.

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg)](#contributors)
[![Build Status](https://travis-ci.com/103cuong/hera.svg?branch=master)](https://travis-ci.com/103cuong/hera)
![npm](https://img.shields.io/npm/v/hera-js.svg)
![david](https://img.shields.io/david/103cuong/hera.svg)
[![Hits-of-Code](https://hitsofcode.com/github/103cuong/hera)](https://hitsofcode.com/view/github/103cuong/hera)
[![GitHub](https://img.shields.io/github/license/103cuong/hera.svg)](https://github.com/103cuong/hera/blob/master/LICENSE)

## Installation

```sh
yarn add hera-js
```

## Usage

```ts
import { hera } from 'hera-js';

hera({
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

hera allows passing parameters as objects.

```ts
hera({
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
      age: 22,
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
    token: 'Fv0761DZcunUr0dKBc4oo5k55jJchwqu',
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

[![](https://sourcerer.io/fame/103cuong/103cuong/hera/images/0)](https://sourcerer.io/fame/103cuong/103cuong/hera/links/0)[![](https://sourcerer.io/fame/103cuong/103cuong/hera/images/1)](https://sourcerer.io/fame/103cuong/103cuong/hera/links/1)[![](https://sourcerer.io/fame/103cuong/103cuong/hera/images/2)](https://sourcerer.io/fame/103cuong/103cuong/hera/links/2)[![](https://sourcerer.io/fame/103cuong/103cuong/hera/images/3)](https://sourcerer.io/fame/103cuong/103cuong/hera/links/3)[![](https://sourcerer.io/fame/103cuong/103cuong/hera/images/4)](https://sourcerer.io/fame/103cuong/103cuong/hera/links/4)[![](https://sourcerer.io/fame/103cuong/103cuong/hera/images/5)](https://sourcerer.io/fame/103cuong/103cuong/hera/links/5)[![](https://sourcerer.io/fame/103cuong/103cuong/hera/images/6)](https://sourcerer.io/fame/103cuong/103cuong/hera/links/6)[![](https://sourcerer.io/fame/103cuong/103cuong/hera/images/7)](https://sourcerer.io/fame/103cuong/103cuong/hera/links/7)

## License

MIT © [103cuong](https://github.com/103cuong)
