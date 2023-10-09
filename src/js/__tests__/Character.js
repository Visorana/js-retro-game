import Character from '../Character.js';
import Swordsman from '../characters/swordsman.js';

test('Creating Character throws an exception', () => {
  expect(() => new Character(1)).toThrow();
});

test('Creating Swordsman does not throw an exception', () => {
  expect(() => new Swordsman(1)).not.toThrow();
});
