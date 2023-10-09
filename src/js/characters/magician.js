import Character from '../Character.js';

export default class Magician extends Character {
  constructor(level) {
    super(level, 'magician');
    this.attack = 10;
    this.defence = 40;
    this.moveRange = 1;
    this.attackRange = 4;

    if (level > 1) {
      for (let i = 1; i < level; i++) {
        this.levelUp();
      }
    }
  }
}
