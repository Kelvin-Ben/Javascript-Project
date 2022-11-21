import commentCounter from './commentsCounter.js';

describe('Testing comments counter function', () => {
  test('Count comments', () => {
    const items = [{
      item_id: 'item1',
      username: 'Kelvin',
      comment: 'Hello world',
    },
    {
      item_id: 'item2',
      username: 'Stanley',
      comment: 'Hello world',
    },
    {
      item_id: 'item3',
      username: 'Stanely',
      comment: 'Hello worldddddd',
    },
    ];
    const itesmLength = items.length;
    const res = commentCounter(items);
    expect(res).toBe(itesmLength);
  });
});