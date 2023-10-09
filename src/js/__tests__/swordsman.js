import Swordsman from '../characters/swordsman.js';

test('1st level Swordsman has correct characteristics', () => {
  const swordsman = new Swordsman(1);
  expect(swordsman.level).toBe(1);
  expect(swordsman.attack).toBe(40);
  expect(swordsman.defence).toBe(10);
  expect(swordsman.health).toBe(50);
  expect(swordsman.type).toBe('swordsman');
});

test('should allow movement within the range', () => {
  const swordsman = new Swordsman(1);
  expect(swordsman.canMove(16, 21, 8)).toBe(false);
  expect(swordsman.canMove(16, 56, 8)).toBe(false);
  expect(swordsman.canMove(23, 58, 8)).toBe(false);
  expect(swordsman.canMove(1, 33, 8)).toBe(true);
  expect(swordsman.canMove(9, 41, 8)).toBe(true);
  expect(swordsman.canMove(16, 32, 8)).toBe(true);
});

test('should allow attack within the range', () => {
  const swordsman = new Swordsman(1);
  expect(swordsman.canAttack(1, 3, 8)).toBe(false);
  expect(swordsman.canAttack(20, 18, 8)).toBe(false);
  expect(swordsman.canAttack(20, 34, 8)).toBe(false);
  expect(swordsman.canAttack(20, 27, 8)).toBe(true);
  expect(swordsman.canAttack(16, 24, 8)).toBe(true);
  expect(swordsman.canAttack(40, 48, 8)).toBe(true);
});
