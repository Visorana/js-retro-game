export default class Team {
  constructor() {
    this.characters = new Set();
  }

  /**
   * Add multiple characters to the team.
   * @param {Iterable} characters - An iterable collection of characters to be added.
   */
  addAll(characters) {
    this.characters = new Set([...this.characters, ...characters]);
  }

  /**
   * Delete a specific character from the team.
   * @param {*} elem - The character to be removed.
   */
  delete(elem) {
    this.characters.delete(elem);
  }

  /**
   * Get an iterator for the characters in the team.
   * @returns {Iterator} - An iterator object for the team.
   */
  * [Symbol.iterator]() {
    for (const character of this.characters) {
      yield character;
    }
  }
}
