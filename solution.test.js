import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { filterEven, doubleAll, sum } from './solution.js';

describe('filterEven', () => {
  it('возвращает только чётные числа', () => {
    assert.deepEqual(filterEven([1, 2, 3, 4, 5, 6]), [2, 4, 6]);
  });

  it('возвращает пустой массив, если чётных нет', () => {
    assert.deepEqual(filterEven([1, 3, 5]), []);
  });

  it('работает с пустым массивом', () => {
    assert.deepEqual(filterEven([]), []);
  });
});

describe('doubleAll', () => {
  it('умножает каждый элемент на 2', () => {
    assert.deepEqual(doubleAll([1, 2, 3]), [2, 4, 6]);
  });

  it('работает с нулём', () => {
    assert.deepEqual(doubleAll([0, 5]), [0, 10]);
  });

  it('работает с пустым массивом', () => {
    assert.deepEqual(doubleAll([]), []);
  });
});

describe('sum', () => {
  it('возвращает сумму элементов', () => {
    assert.equal(sum([1, 2, 3, 4]), 10);
  });

  it('возвращает 0 для пустого массива', () => {
    assert.equal(sum([]), 0);
  });

  it('работает с отрицательными числами', () => {
    assert.equal(sum([-1, -2, 3]), 0);
  });
});
