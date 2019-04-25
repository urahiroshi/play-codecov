const compare = require('./compare');

it('a === b', () => {
  expect(compare(1, 1)).toBe(0);
});
