import { hera, globalOptions } from '../src';

globalOptions.url = 'https://graphqlzero.almansi.me/api';

test('hera test', async() => {
  const { data } = await hera({
    query: `
      query {
        post(id: $id) {
          id
          title
          body
        }
      }
    `,
    variables: {
      id: 1,
    },
  });
  expect(data.post.id).toEqual('1');
  expect(typeof data.post.title).toEqual('string');
  expect(typeof data.post.body).toEqual('string');
});