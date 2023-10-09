import Bowman from '../characters/bowman.js';

test('1st level Bowman has correct characteristics', () => {
  const bowman = new Bowman(1);
  expect(bowman.level).toBe(1);
  expect(bowman.attack).toBe(25);
  expect(bowman.defence).toBe(25);
  expect(bowman.health).toBe(50);
  expect(bowman.type).toBe('bowman');
});

test('should allow movement within the range', () => {
  const bowman = new Bowman(1);
  expect(bowman.canMove(16, 19, 8)).toBe(false);
  expect(bowman.canMove(14, 43, 8)).toBe(false);
  expect(bowman.canMove(20, 35, 8)).toBe(false);
  expect(bowman.canMove(16, 18, 8)).toBe(true);
  expect(bowman.canMove(14, 28, 8)).toBe(true);
  expect(bowman.canMove(20, 28, 8)).toBe(true);
});

test('should allow attack within the range', () => {
  const bowman = new Bowman(1);
  expect(bowman.canAttack(16, 19, 8)).toBe(false);
  expect(bowman.canAttack(14, 43, 8)).toBe(false);
  expect(bowman.canAttack(2, 5, 8)).toBe(false);
  expect(bowman.canAttack(16, 18, 8)).toBe(true);
  expect(bowman.canAttack(14, 14, 8)).toBe(true);
  expect(bowman.canAttack(20, 26, 8)).toBe(true);
});
