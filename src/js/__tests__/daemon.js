import Daemon from '../characters/daemon.js';

test('1st level Daemon has correct characteristics', () => {
  const daemon = new Daemon(1);
  expect(daemon.level).toBe(1);
  expect(daemon.attack).toBe(10);
  expect(daemon.defence).toBe(10);
  expect(daemon.health).toBe(50);
  expect(daemon.type).toBe('daemon');
});

test('should allow movement within the range', () => {
  const daemon = new Daemon(1);
  expect(daemon.canMove(16, 18, 8)).toBe(false);
  expect(daemon.canMove(16, 34, 8)).toBe(false);
  expect(daemon.canMove(20, 18, 8)).toBe(false);
  expect(daemon.canMove(16, 17, 8)).toBe(true);
  expect(daemon.canMove(16, 25, 8)).toBe(true);
  expect(daemon.canMove(20, 28, 8)).toBe(true);
});

test('should allow attack within the range', () => {
  const daemon = new Daemon(1);
  expect(daemon.canAttack(16, 21, 8)).toBe(false);
  expect(daemon.canAttack(23, 58, 8)).toBe(false);
  expect(daemon.canAttack(23, 63, 8)).toBe(false);
  expect(daemon.canAttack(16, 26, 8)).toBe(true);
  expect(daemon.canAttack(23, 21, 8)).toBe(true);
  expect(daemon.canAttack(20, 44, 8)).toBe(true);
});
