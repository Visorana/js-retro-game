import GameController from '../GameController.js';

describe('GameController tagged template', () => {
  let gameController;

  beforeEach(() => {
    gameController = new GameController();
    gameController.gameState.positions = [
      {
        position: 0,
        character: {
          level: 2, attack: 20, defence: 10, health: 50,
        },
      },
      {
        position: 1,
        character: {
          level: 1, attack: 10, defence: 5, health: 60,
        },
      },
    ];
    gameController.gamePlay = {
      showCellTooltip: jest.fn(),
    };
  });

  test('onCellEnter - character found', () => {
    gameController.onCellEnter(0);
    expect(gameController.gamePlay.showCellTooltip).toHaveBeenCalledWith(`${'\u{1F396}'}2 ${'\u{2694}'}20 ${'\u{1F6E1}'}10 ${'\u{2764}'}50`, 0);
  });

  test('onCellEnter - character not found', () => {
    gameController.onCellEnter(2);
    expect(gameController.gamePlay.showCellTooltip).not.toHaveBeenCalled();
  });
});
