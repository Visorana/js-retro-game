import Vampire from '../characters/vampire';

test('1st level Vampire has correct characteristics', () => {
  const vampire = new Vampire(1);
  expect(vampire.level).toBe(1);
  expect(vampire.attack).toBe(25);
  expect(vampire.defence).toBe(25);
  expect(vampire.health).toBe(50);
  expect(vampire.type).toBe('vampire');
});

test('should allow movement within the range', () => {
  const vampire = new Vampire(1);
  expect(vampire.canMove(16, 19, 8)).toBe(false);
  expect(vampire.canMove(14, 43, 8)).toBe(false);
  expect(vampire.canMove(20, 35, 8)).toBe(false);
  expect(vampire.canMove(16, 18, 8)).toBe(true);
  expect(vampire.canMove(14, 28, 8)).toBe(true);
  expect(vampire.canMove(20, 28, 8)).toBe(true);
});

test('should allow attack within the range', () => {
  const vampire = new Vampire(1);
  expect(vampire.canAttack(16, 19, 8)).toBe(false);
  expect(vampire.canAttack(14, 43, 8)).toBe(false);
  expect(vampire.canAttack(2, 5, 8)).toBe(false);
  expect(vampire.canAttack(16, 18, 8)).toBe(true);
  expect(vampire.canAttack(14, 14, 8)).toBe(true);
  expect(vampire.canAttack(20, 26, 8)).toBe(true);
});
