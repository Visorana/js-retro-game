import Magician from '../characters/magician.js';

test('1st level Magician has correct characteristics', () => {
  const magician = new Magician(1);
  expect(magician.level).toBe(1);
  expect(magician.attack).toBe(10);
  expect(magician.defence).toBe(40);
  expect(magician.health).toBe(50);
  expect(magician.type).toBe('magician');
});

test('should allow movement within the range', () => {
  const magician = new Magician(1);
  expect(magician.canMove(16, 18, 8)).toBe(false);
  expect(magician.canMove(16, 34, 8)).toBe(false);
  expect(magician.canMove(20, 18, 8)).toBe(false);
  expect(magician.canMove(16, 17, 8)).toBe(true);
  expect(magician.canMove(16, 25, 8)).toBe(true);
  expect(magician.canMove(20, 28, 8)).toBe(true);
});

test('should allow attack within the range', () => {
  const magician = new Magician(1);
  expect(magician.canAttack(16, 21, 8)).toBe(false);
  expect(magician.canAttack(23, 58, 8)).toBe(false);
  expect(magician.canAttack(23, 63, 8)).toBe(false);
  expect(magician.canAttack(16, 26, 8)).toBe(true);
  expect(magician.canAttack(23, 21, 8)).toBe(true);
  expect(magician.canAttack(20, 44, 8)).toBe(true);
});
