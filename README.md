# giin

🦄 Simple and lightweight GraphQL client.

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg)](#contributors)
[![Build Status](https://travis-ci.com/cuongw/giin.svg?branch=master)](https://travis-ci.com/cuongw/giin)
![npm](https://img.shields.io/npm/v/giin.svg)
![david](https://img.shields.io/david/cuongw/giin.svg)
[![Hits-of-Code](https://hitsofcode.com/github/cuongw/giin)](https://hitsofcode.com/view/github/cuongw/giin)
[![GitHub](https://img.shields.io/github/license/cuongw/giin.svg)](https://github.com/cuongw/giin/blob/master/LICENSE)

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
    query {
      user(info: $info) {
        id
        name
        sex
        age
        address
        job
      }
    }
  `,
  variables: {
    info: {
      name: 'Cuong Duy Nguyen',
      address: 'Ho Chi Minh'
    }
  }
});
```

## Contributors

[![](https://sourcerer.io/fame/cuongw/cuongw/giin/images/0)](https://sourcerer.io/fame/cuongw/cuongw/giin/links/0)[![](https://sourcerer.io/fame/cuongw/cuongw/giin/images/1)](https://sourcerer.io/fame/cuongw/cuongw/giin/links/1)[![](https://sourcerer.io/fame/cuongw/cuongw/giin/images/2)](https://sourcerer.io/fame/cuongw/cuongw/giin/links/2)[![](https://sourcerer.io/fame/cuongw/cuongw/giin/images/3)](https://sourcerer.io/fame/cuongw/cuongw/giin/links/3)[![](https://sourcerer.io/fame/cuongw/cuongw/giin/images/4)](https://sourcerer.io/fame/cuongw/cuongw/giin/links/4)[![](https://sourcerer.io/fame/cuongw/cuongw/giin/images/5)](https://sourcerer.io/fame/cuongw/cuongw/giin/links/5)[![](https://sourcerer.io/fame/cuongw/cuongw/giin/images/6)](https://sourcerer.io/fame/cuongw/cuongw/giin/links/6)[![](https://sourcerer.io/fame/cuongw/cuongw/giin/images/7)](https://sourcerer.io/fame/cuongw/cuongw/giin/links/7)

## License

MIT © [cuongw](https://github.com/cuongw)
