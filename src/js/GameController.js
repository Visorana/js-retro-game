import PositionedCharacter from './PositionedCharacter.js';
import Team from './Team.js';
import { generateTeam } from './generators.js';
import GamePlay from './GamePlay.js';
import GameState from './GameState.js';
import Bowman from './characters/bowman.js';
import Swordsman from './characters/swordsman.js';
import Magician from './characters/magician.js';
import Daemon from './characters/daemon.js';
import Undead from './characters/undead.js';
import Vampire from './characters/vampire.js';
import cursors from './cursors.js';
import themes from './themes.js';

export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;
    this.userTeam = new Team();
    this.botTeam = new Team();
    this.userCharacters = [Swordsman];
    this.botCharacters = [Daemon];
    this.gameState = new GameState();
  }

  init() {
    this.gamePlay.addCellClickListener(this.onCellClick.bind(this));
    this.gamePlay.addCellEnterListener(this.onCellEnter.bind(this));
    this.gamePlay.addCellLeaveListener(this.onCellLeave.bind(this));
    this.gamePlay.addNewGameListener(this.onNewGameClick.bind(this));
    this.gamePlay.addSaveGameListener(this.onSaveGameClick.bind(this));
    this.gamePlay.addLoadGameListener(this.onLoadGameClick.bind(this));
    this.onNewGameClick();
  }

  /**
   * Handle cell click event.
   * @param {number} index - The index of the clicked cell.
   */
  async onCellClick(index) {
    if (this.gameState.level === 5 || this.userTeam.characters.size === 0 || this.gameState.currentTurn === 'bot') {
      return;
    }
    if (this.gamePlay.boardEl.style.cursor === 'not-allowed') {
      GamePlay.showError('Invalid action!');
      return;
    }

    const character = this.getCharacter(index);
    const selectedCharacter = this.getCharacter(this.gameState.selected);

    if (character && this.isUser(character.character)) {
      this.gamePlay.cells.forEach((elem) => elem.classList.remove('selected-yellow'));
      this.gamePlay.selectCell(index);
      this.gameState.selected = index;
    } else if (!selectedCharacter) {
      GamePlay.showError('Select a player character!');
    } else if (selectedCharacter) {
      if (!character && selectedCharacter.character.canMove(this.gameState.selected, index, this.gamePlay.boardSize)) {
        this.switchTurn();
        this.gamePlay.deselectCell(this.gameState.selected);
        this.getCharacter(this.gameState.selected).position = index;
        this.gamePlay.redrawPositions(this.gameState.positions);
        this.gamePlay.selectCell(index);
        this.gameState.selected = index;
        this.getBotResponse();
      } else if (character && !this.isUser(character.character) && selectedCharacter.character.canAttack(this.gameState.selected, index, this.gamePlay.boardSize)) {
        this.switchTurn();
        await this.attackCharacter(selectedCharacter, character);
        this.getBotResponse();
      }
    }
  }

  /**
   * Handle cell enter event.
   * @param {number} index - The index of the entered cell.
   */
  onCellEnter(index) {
    const character = this.getCharacter(index);
    const selectedCharacter = this.getCharacter(this.gameState.selected);

    if (selectedCharacter) {
      if (!character && selectedCharacter.character.canMove(this.gameState.selected, index, this.gamePlay.boardSize)) {
        this.gamePlay.setCursor(cursors.pointer);
        this.gamePlay.selectCell(index, 'green');
      } else if (character && !this.isUser(character.character) && selectedCharacter.character.canAttack(this.gameState.selected, index, this.gamePlay.boardSize)) {
        this.gamePlay.setCursor(cursors.crosshair);
        this.gamePlay.selectCell(index, 'red');
      } else {
        this.gamePlay.setCursor(cursors.notallowed);
      }
    }
    if (character) {
      const info = `${'\u{1F396}'}${character.character.level} ${'\u{2694}'}${character.character.attack} ${'\u{1F6E1}'}${character.character.defence} ${'\u{2764}'}${character.character.health}`;
      this.gamePlay.showCellTooltip(info, index);
      if (this.isUser(character.character)) {
        this.gamePlay.setCursor(cursors.pointer);
      }
    }
  }

  /**
   * Handle cell leave event.
   * @param {number} index - The index of the cell left.
   */
  onCellLeave(index) {
    this.gamePlay.cells.forEach((elem) => elem.classList.remove('selected-red'));
    this.gamePlay.cells.forEach((elem) => elem.classList.remove('selected-green'));
    this.gamePlay.hideCellTooltip(index);
    this.gamePlay.setCursor(cursors.auto);
  }

  /**
   * Start a new game.
   */
  onNewGameClick() {
    const { maxPoints } = this.gameState;
    this.gameState = new GameState();
    this.gameState.maxPoints = maxPoints;
    this.gamePlay.drawUi(themes[1]);
    this.userTeam = new Team();
    this.botTeam = new Team();
    this.userTeam.addAll(generateTeam(this.userCharacters, 1, 2));
    this.botTeam.addAll(generateTeam(this.botCharacters, 1, 2));
    this.positionTeams(this.userTeam, this.getUserPositions());
    this.positionTeams(this.botTeam, this.getBotPositions());
    this.gamePlay.redrawPositions(this.gameState.positions);
  }

  /**
   * Save the current game state.
   */
  onSaveGameClick() {
    this.stateService.save(this.gameState);
  }

  /**
   * Load a saved game state.
   */
  onLoadGameClick() {
    const data = this.stateService.load();
    if (!data) {
      GamePlay.showError('Loading error');
    }
    this.gameState.currentTurn = data.currentTurn;
    this.gameState.level = data.level;
    this.gameState.positions = [];
    this.gameState.points = data.points;
    this.gameState.maxPoints = data.maxPoints;
    this.gameState.selected = null;
    this.userTeam = new Team();
    this.botTeam = new Team();
    data.positions.forEach((elem) => {
      let character;
      switch (elem.character.type) {
        case 'bowman':
          character = new Bowman(elem.character.level);
          this.userTeam.addAll([character]);
          break;
        case 'swordsman':
          character = new Swordsman(elem.character.level);
          this.userTeam.addAll([character]);
          break;
        case 'magician':
          character = new Magician(elem.character.level);
          this.userTeam.addAll([character]);
          break;
        case 'daemon':
          character = new Daemon(elem.character.level);
          this.botTeam.addAll([character]);
          break;
        case 'undead':
          character = new Undead(elem.character.level);
          this.botTeam.addAll([character]);
          break;
        case 'vampire':
          character = new Vampire(elem.character.level);
          this.botTeam.addAll([character]);
          break;
      }
      character.attack = elem.character.attack;
      character.defence = elem.character.defence;
      character.health = elem.character.health;
      this.gameState.positions.push(new PositionedCharacter(character, elem.position));
    });
    this.gamePlay.drawUi(themes[this.gameState.level]);
    this.gamePlay.redrawPositions(this.gameState.positions);
    if (this.gameState.currentTurn === 'bot') {
      this.getBotResponse();
    }
  }

  /**
   * Handle the bot's response during its turn.
   */
  async getBotResponse() {
    if (this.gameState.currentTurn === 'user') {
      return;
    }
    const botCharacters = this.gameState.positions
      .filter((elem) => !this.isUser(elem.character))
      .sort((a, b) => b.character.attack - a.character.attack);

    for (const botCharacter of botCharacters) {
      const weakestPlayerInRange = this.findWeakestPlayerInRange(botCharacter);

      if (weakestPlayerInRange) {
        // Perform attack
        await this.attackCharacter(botCharacter, weakestPlayerInRange);
        this.switchTurn();
        return;
      }
    }
    this.switchTurn();
  }

  /**
   * Attack a target character.
   * @param {PositionedCharacter} attacker - The attacking character.
   * @param {PositionedCharacter} target - The target character.
   */
  async attackCharacter(attacker, target) {
    const damage = Math.round(Math.max(attacker.character.attack - target.character.defence, attacker.character.attack * 0.1));
    await this.gamePlay.showDamage(target.position, damage);
    target.character.health -= damage;
    if (target.character.health <= 0) {
      this.gameState.positions.splice(this.gameState.positions.indexOf(target), 1);
      if (!this.isUser(target.character)) {
        this.botTeam.delete(target.character);
      } else {
        this.userTeam.delete(target.character);
      }
      this.gamePlay.deselectCell(target.position);
    }
    this.gamePlay.redrawPositions(this.gameState.positions);
    this.checkGameResult();
  }

  /**
   * Find the weakest user character in range of a positioned bot character.
   * @param {PositionedCharacter} positionedCharacter - The positioned character to check.
   * @returns {PositionedCharacter|null} - The weakest player character in range, or null if none found.
   */
  findWeakestPlayerInRange(positionedCharacter) {
    const playersInRange = this.gameState.positions.filter((elem) => this.isUser(elem.character));

    const playersInAttackRange = playersInRange.filter((elem) => positionedCharacter.character.canAttack(positionedCharacter.position, elem.position, this.gamePlay.boardSize));
    if (playersInAttackRange.length > 0) {
      return playersInAttackRange.reduce((weakest, elem) => ((elem.character.health < weakest.character.health) ? elem : weakest), playersInAttackRange[0]);
    }
    return null;
  }

  /**
   * Switch the current turn between user and bot.
   */
  switchTurn() {
    if (this.gameState.currentTurn === 'bot') {
      this.gameState.currentTurn = 'user';
    } else {
      this.gameState.currentTurn = 'bot';
    }
  }

  /**
   * Position characters on the game board for a given team.
   * @param {Team} team - The team to position characters for.
   * @param {number[]} positions - An array of positions to use for positioning characters.
   */
  positionTeams(team, positions) {
    for (const character of team) {
      const randomPosition = positions[Math.floor(Math.random() * positions.length)];
      this.gameState.positions.push(new PositionedCharacter(character, randomPosition));
      positions.splice(positions.indexOf(randomPosition), 1);
    }
  }

  /**
   * Get the positions for user characters on the game board.
   * @returns {number[]} - An array of positions for user characters.
   */
  getUserPositions() {
    const size = this.gamePlay.boardSize;
    const positions = [];
    for (let i = 0, j = 1; positions.length < size * 2; i += size, j += size) {
      positions.push(i, j);
    }
    return positions;
  }

  /**
   * Get the positions for bot characters on the game board.
   * @returns {number[]} - An array of positions for bot characters.
   */
  getBotPositions() {
    const size = this.gamePlay.boardSize;
    const positions = [];
    for (let i = size - 2, j = size - 1; positions.length < size * 2; i += size, j += size) {
      positions.push(i, j);
    }
    return positions;
  }

  /**
   * Get the character at a specific index on the game board.
   * @param {number} index - The index of the cell on the game board.
   * @returns {PositionedCharacter|null} - The positioned character at the specified index, or null if empty.
   */
  getCharacter(index) {
    return this.gameState.positions.find((elem) => elem.position === index);
  }

  /**
   * Check if a character belongs to the user's team.
   * @param {Character} character - The character to check.
   * @returns {boolean} - True if the character belongs to the user's team, otherwise false.
   */
  isUser(character) {
    return this.userCharacters.some((elem) => character instanceof elem);
  }

  /**
   * Check the game result after any defeated character.
   */
  checkGameResult() {
    if (this.userTeam.characters.size === 0) {
      this.gameState.maxPoints = Math.max(this.gameState.points, this.gameState.maxPoints);
    } else if (this.botTeam.characters.size === 0) {
      this.scorePoints();
      this.gameState.maxPoints = Math.max(this.gameState.points, this.gameState.maxPoints);
      this.gameState.level++;
      this.levelUp();
    }
  }

  /**
   * Level up the user's team and update the game state.
   */
  levelUp() {
    if (this.gameState.level <= 4) {
      this.userTeam.characters.forEach((char) => {
        char.level++;
        char.levelUp();
      });
      if (this.gameState.level === 2) {
        this.userTeam.addAll(generateTeam(this.userCharacters, 1, 3 - this.userTeam.characters.size));
        this.botTeam.addAll(generateTeam(this.botCharacters, 2, 3));
      } else if (this.gameState.level === 3) {
        this.userTeam.addAll(generateTeam(this.userCharacters, 2, 5 - this.userTeam.characters.size));
        this.botTeam.addAll(generateTeam(this.botCharacters, 3, 5));
      } else if (this.gameState.level === 4) {
        this.userTeam.addAll(generateTeam(this.userCharacters, 3, 5 - this.userTeam.characters.size));
        this.botTeam.addAll(generateTeam(this.botCharacters, 4, 5));
      }
      this.gameState.positions = [];
      this.gamePlay.drawUi(themes[this.gameState.level]);
      this.positionTeams(this.userTeam, this.getUserPositions());
      this.positionTeams(this.botTeam, this.getBotPositions());
      this.gamePlay.redrawPositions(this.gameState.positions);
    }
    this.gameState.selected = null;
  }

  /**
   * Score points based on the user's team health.
   */
  scorePoints() {
    this.gameState.points += [...this.userTeam.characters].reduce((sum, char) => sum + char.health, 0);
  }
}
