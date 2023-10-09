import { generateTeam } from '../generators.js';
import Team from '../Team.js';
import Swordsman from '../characters/swordsman.js';

test('generateTeam creates characters with required number and level range', () => {
  const playerTypes = [Swordsman];
  const team = new Team();
  team.addAll(generateTeam(playerTypes, 3, 4));
  const expectedLevels = [1, 2, 3];

  team.characters.forEach((character) => {
    expect(expectedLevels.includes(character.level)).toBe(true);
  });
  expect(team.characters.size).toBe(4);
});
