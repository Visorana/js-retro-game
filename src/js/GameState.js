export default class GameState {
  constructor() {
    this.currentTurn = 'user';
    this.level = 1;
    this.positions = [];
    this.points = 0;
    this.maxPoints = 0;
    this.selected = null;
  }

  static from(object) {
    if (typeof object === 'object') {
      return object;
    }
    return null;
  }
}
