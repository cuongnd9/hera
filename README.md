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

**👻 passing parameters as objects**

```ts
const { data } = await hera({
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

## 🚀 API

```ts
hera({
  option: Option;
  query: string;
  variables?: any;
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
  }
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

## Contributors

[![](https://sourcerer.io/fame/103cuong/103cuong/hera/images/0)](https://sourcerer.io/fame/103cuong/103cuong/hera/links/0)[![](https://sourcerer.io/fame/103cuong/103cuong/hera/images/1)](https://sourcerer.io/fame/103cuong/103cuong/hera/links/1)[![](https://sourcerer.io/fame/103cuong/103cuong/hera/images/2)](https://sourcerer.io/fame/103cuong/103cuong/hera/links/2)[![](https://sourcerer.io/fame/103cuong/103cuong/hera/images/3)](https://sourcerer.io/fame/103cuong/103cuong/hera/links/3)[![](https://sourcerer.io/fame/103cuong/103cuong/hera/images/4)](https://sourcerer.io/fame/103cuong/103cuong/hera/links/4)[![](https://sourcerer.io/fame/103cuong/103cuong/hera/images/5)](https://sourcerer.io/fame/103cuong/103cuong/hera/links/5)[![](https://sourcerer.io/fame/103cuong/103cuong/hera/images/6)](https://sourcerer.io/fame/103cuong/103cuong/hera/links/6)[![](https://sourcerer.io/fame/103cuong/103cuong/hera/images/7)](https://sourcerer.io/fame/103cuong/103cuong/hera/links/7)

## License

MIT © [Cuong Tran](https://github.com/103cuong)
