/**
 * Базовый класс, от которого наследуются классы персонажей
 * @property level - уровень персонажа, от 1 до 4
 * @property attack - показатель атаки
 * @property defence - показатель защиты
 * @property health - здоровье персонажа
 * @property type - строка с одним из допустимых значений:
 * swordsman
 * bowman
 * magician
 * daemon
 * undead
 * vampire
 */

export default class Character {
  constructor(level, type = 'generic') {
    this.level = level;
    this.attack = 0;
    this.defence = 0;
    this.health = 50;
    this.type = type;
    if (new.target === Character) {
      throw new Error('You cannot create an instance of the base Character class.');
    }
  }

  /**
   * Level up the character, increasing defence, attack, and health attributes.
   */
  levelUp() {
    this.defence = Math.round(Math.max(this.defence, this.defence * (80 + this.health)) / 100);
    this.attack = Math.round(Math.max(this.attack, this.attack * (80 + this.health)) / 100);
    this.health = Math.min(this.health + 80, 100);
  }

  /**
   * Check if the character can move to a target position.
   * @param {number} characterIndex - The index of the character.
   * @param {number} targetIndex - The index of the target position.
   * @param {number} boardSize - The size of the game board.
   * @returns {boolean} - Returns true if the character can move, otherwise false.
   */
  canMove(characterIndex, targetIndex, boardSize) {
    const rowDistance = Math.abs(Math.floor(targetIndex / boardSize) - Math.floor(characterIndex / boardSize));
    const colDistance = Math.abs(targetIndex % boardSize - characterIndex % boardSize);
    if (colDistance <= this.moveRange && rowDistance <= this.moveRange) {
      if (colDistance === 0 && rowDistance <= this.moveRange) return true;
      if (rowDistance === 0 && colDistance <= this.moveRange) return true;
      if (colDistance === rowDistance) return true;
    }
    return false;
  }

  /**
   * Check if the character can attack a target position.
   * @param {number} characterIndex - The index of the character.
   * @param {number} targetIndex - The index of the target position.
   * @param {number} boardSize - The size of the game board.
   * @returns {boolean} - Returns true if the character can attack, otherwise false.
   */
  canAttack(characterIndex, targetIndex, boardSize) {
    const rowDistance = Math.abs(Math.floor(targetIndex / boardSize) - Math.floor(characterIndex / boardSize));
    const colDistance = Math.abs(targetIndex % boardSize - characterIndex % boardSize);
    return rowDistance <= this.attackRange && colDistance <= this.attackRange;
  }
}
