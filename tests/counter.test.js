import Counter from './itemsCount.js';

describe('Testing items counter function', () => {
  test('Count Pokemons', () => {
    const items = ['item1', 'item2', 'item3', 'item4'];
    const itemsLength = items.length;
    const res = Counter(items);
    expect(res).toBe(itemsLength);
  });
});