import { thinid } from '../src';

test('Thinid Test', () => {
  expect(typeof thinid()).toEqual('string');
  expect(typeof thinid(0)).toEqual('string');
  expect(typeof thinid(12)).toEqual('string');
  expect(typeof thinid(32)).toEqual('string');

  expect(thinid()).toHaveLength(24);
  expect(thinid(0)).toHaveLength(24);
  expect(thinid(12)).toHaveLength(12);
  expect(thinid(32)).toHaveLength(32);
});

test('Has no collisions', () => {
  const set = new Set();
  for (let i = 0; i < 100000; i++) {
    expect(set.has(thinid())).toBeFalsy();
    set.add(thinid());
  }
});
