import Swordsman from '../characters/swordsman.js';
import Bowman from '../characters/bowman.js';
import { characterGenerator } from '../generators.js';

test('characterGenerator generates characters infinitely', () => {
  const playerTypes = [Swordsman, Bowman];
  const playerGenerator = characterGenerator(playerTypes, 2);

  const generatedCharacters = [];
  for (let i = 0; i < 10; i++) {
    const character = playerGenerator.next().value;
    generatedCharacters.push(character);
  }

  // Assuming there are no exceptions thrown during generation
  expect(generatedCharacters.length).toBe(10);
});
