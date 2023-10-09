import { calcTileType } from '../utils.js';

test.each([
  [0, 'top-left'],
  [1, 'top'],
  [7, 'top-right'],
  [56, 'bottom-left'],
  [63, 'bottom-right'],
  [8, 'left'],
  [15, 'right'],
  [59, 'bottom'],
  [27, 'center'],
])('calcTileType(%i, 8) should return %s', (i, expected) => {
  expect(calcTileType(i, 8)).toBe(expected);
});

test.each([
  [0, 'top-left'],
  [1, 'top'],
  [15, 'top-right'],
  [240, 'bottom-left'],
  [255, 'bottom-right'],
  [16, 'left'],
  [31, 'right'],
  [249, 'bottom'],
  [150, 'center'],
])('calcTileType(%i, 16) should return %s', (i, expected) => {
  expect(calcTileType(i, 16)).toBe(expected);
});
