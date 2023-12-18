import Character from '../Character.js';

export default class Daemon extends Character {
  constructor(level) {
    super(level, 'daemon');
    this.attack = 10;
    this.defence = 10;
    this.moveRange = 1;
    this.attackRange = 4;

    this.levelUp(level);
  }
}
