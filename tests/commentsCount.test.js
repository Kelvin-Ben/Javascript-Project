import commentCounter from './commentsCounter.js';

describe('Testing comments counter function', () => {
  test('Count comments', () => {
    const items = [{
      item_id: 'item1',
      username: 'Franklin',
      comment: 'Hello world',
    },
    {
      item_id: 'item2',
      username: 'Charles',
      comment: 'Hello world',
    },
    {
      item_id: 'item3',
      username: 'Franklin',
      comment: 'Hello worldddddd',
    },
    ];
    const itesmLength = items.length;
    const res = commentCounter(items);
    expect(res).toBe(itesmLength);
  });
});