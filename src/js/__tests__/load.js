import GameStateService from '../GameStateService';
import GameController from '../GameController';
import themes from '../themes';

describe('GameController loading storage', () => {
  let gameController;

  beforeEach(() => {
    gameController = new GameController();
    gameController.gamePlay = {
      showError: jest.fn(),
      drawUi: jest.fn(),
      redrawPositions: jest.fn(),
    };
    const localStorageMock = (function () {
      let store = {};

      return {
        getItem(key) {
          return store[key] || null;
        },
        setItem(key, value) {
          store[key] = value.toString();
        },
        removeItem(key) {
          delete store[key];
        },
        clear() {
          store = {};
        },
      };
    }());
    gameController.stateService = new GameStateService(localStorageMock);
  });

  test('should handle unsuccessful loading', () => {
    const mock = jest.fn(() => gameController.gamePlay.showError('Loading error'));
    try {
      gameController.onLoadGameClick();
    } catch (err) {
      mock();
    }
    expect(mock).toHaveBeenCalled();
  });

  test('should handle successful loading', () => {
    const data = {
      currentTurn: 'user',
      level: 1,
      positions: [{
        character: {
          attack: 10,
          attackRange: 2,
          defence: 5,
          health: 50,
          level: 1,
          moveRange: 2,
          type: 'bowman',
        },
        position: 0,
      }],
      points: 100,
      maxPoints: 200,
      selected: null,
    };

    gameController.stateService.save(data);
    gameController.onLoadGameClick();

    expect(gameController.gameState).toMatchObject(data);
    expect(gameController.gamePlay.drawUi).toHaveBeenCalledWith(themes[1]);
    expect(gameController.gamePlay.redrawPositions).toHaveBeenCalledWith(data.positions);
  });
});
