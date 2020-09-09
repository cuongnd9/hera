# hera

👩🏼‍💻 Simple and lightweight GraphQL client.

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg)](#contributors)
[![Build Status](https://travis-ci.com/103cuong/hera.svg?branch=master)](https://travis-ci.com/103cuong/hera)
![npm](https://img.shields.io/npm/v/hera-js.svg)
![david](https://img.shields.io/david/103cuong/hera.svg)
[![Hits-of-Code](https://hitsofcode.com/github/103cuong/hera)](https://hitsofcode.com/view/github/103cuong/hera)
[![GitHub](https://img.shields.io/github/license/103cuong/hera.svg)](https://github.com/103cuong/hera/blob/master/LICENSE)

## 🧰 installation

```sh
yarn add hera-js
```

## 🌳 usage

```ts
import { hera } from 'hera-js';

const { data } = await hera({
  options: {
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

**👻 passing parameters as objects**

```ts
const { data } = await hera({
  options: {
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
      name: 'Cuong Tran',
      age: 22,
      address: 'Sai Gon / Vietnam',
      job: 'software engineer'
    }
  }
});
```

**🐛 error handling**

```ts
const { data, errors } = await hera({
  options: {
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

**🌏 global options**

> You can specify config defaults that will be applied to every request.

```ts
import { hera, globalOptions } from 'hera-js';

globalOptions.url = 'https://example.com';
// globalOptions.headers = <your headers>

const { data } = await hera({
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
      name: 'Cuong Tran',
      age: 22,
      address: 'Sai Gon / Vietnam',
      job: 'software engineer'
    }
  }
});
```

## 🚀 API

```ts
interface Options {
  url?: string;
  headers?: any;
  timeout?: number;
}

hera({
  query: string;
  variables?: any;
  options?: Options;
}) : Promise<{ data: any; errors: any[] }>
```

### 📝 options

```ts
{
  // `url` is the server URL that will be used for the request
  url: '/example',
  // `headers` are custom headers to be sent
  headers: {
    token: 'Fv0761DZcunUr0dKBc4oo5k55jJchwqu',
    'Content-Type': 'application/json'
  },
}
```

### 📒 query

> `query` is query or mutation in Graphql

**graphql's query**

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

**graphql's mutation**

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

### 💉 variables

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
    name: 'Cuong Tran',
    age: 22,
    address: 'Sai Gon / Vietnam',
    job: 'software engineer'
  }
}
```

## 🤝 contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="http://103cuong.me"><img src="https://avatars0.githubusercontent.com/u/34389409?v=4" width="100px;" alt="Cuong Duy Nguyen"/><br /><sub><b>Cuong Duy Nguyen</b></sub></a><br /><a href="https://github.com/103cuong/thinid/commits?author=103cuong" title="Code">💻</a> <a href="https://github.com/103cuong/thinid/commits?author=103cuong" title="Documentation">📖</a> <a href="https://github.com/103cuong/thinid/commits?author=103cuong" title="Tests">⚠️</a> <a href="#review-103cuong" title="Reviewed Pull Requests">👀</a></td></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## 📜 license

MIT © [Cuong Tran](https://github.com/103cuong)
