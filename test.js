import test from 'ava';

import m from '.';

test('should return a buffer', async t => {
  const salt = await m(16);

  t.true(Buffer.isBuffer(salt));
  t.is(salt.byteLength, 16);
});

test('should generate an empty buffer', async t => {
  const salt = await m(0);

  t.true(Buffer.isBuffer(salt));
  t.is(salt.byteLength, 0);
});

test('should generate a big buffer', async t => {
  const salt = await m(65536);

  t.true(Buffer.isBuffer(salt));
  t.is(salt.byteLength, 65536);
});

test('should throw an error using a non valid salt size', async t => {
  let err = await t.throws(m(undefined));
  t.is(err.message, "The 'length' parameter must be an integer");
  err = await t.throws(m(-1));
  t.regex(err.message, /The 'length' parameter must be in the range/);
});
