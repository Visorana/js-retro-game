import Undead from '../characters/undead.js';

test('1st level Undead has correct characteristics', () => {
  const undead = new Undead(1);
  expect(undead.level).toBe(1);
  expect(undead.attack).toBe(40);
  expect(undead.defence).toBe(10);
  expect(undead.health).toBe(50);
  expect(undead.type).toBe('undead');
});

test('should allow movement within the range', () => {
  const undead = new Undead(1);
  expect(undead.canMove(16, 21, 8)).toBe(false);
  expect(undead.canMove(16, 56, 8)).toBe(false);
  expect(undead.canMove(23, 58, 8)).toBe(false);
  expect(undead.canMove(1, 33, 8)).toBe(true);
  expect(undead.canMove(9, 41, 8)).toBe(true);
  expect(undead.canMove(16, 32, 8)).toBe(true);
});

test('should allow attack within the range', () => {
  const undead = new Undead(1);
  expect(undead.canAttack(1, 3, 8)).toBe(false);
  expect(undead.canAttack(20, 18, 8)).toBe(false);
  expect(undead.canAttack(20, 34, 8)).toBe(false);
  expect(undead.canAttack(20, 27, 8)).toBe(true);
  expect(undead.canAttack(16, 24, 8)).toBe(true);
  expect(undead.canAttack(40, 48, 8)).toBe(true);
});
