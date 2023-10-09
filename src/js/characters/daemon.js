import Character from '../Character.js';

export default class Daemon extends Character {
  constructor(level) {
    super(level, 'daemon');
    this.attack = 10;
    this.defence = 10;
    this.moveRange = 1;
    this.attackRange = 4;

    if (level > 1) {
      for (let i = 1; i < level; i++) {
        this.levelUp();
      }
    }
  }
}
