import { describe, it, expect, beforeEach } from 'vitest';
import { GameModel } from './GameModel';

describe('GameModel', () => {
  let gameModel: GameModel;

  beforeEach(() => {
    gameModel = new GameModel();
  });

  describe('Initial State', () => {
    it('should have initial game state as "setup"', () => {
      expect(gameModel.gameState).toBe('setup');
    });

    it('should have current player as 1', () => {
      expect(gameModel.currentPlayer).toBe(1);
    });

    it('should have player scores at 0', () => {
      expect(gameModel.player1Score).toBe(0);
      expect(gameModel.player2Score).toBe(0);
    });

    it('should have no winner initially', () => {
      expect(gameModel.winner).toBeNull();
    });

    it('should have win condition of 10', () => {
      expect(gameModel.winCondition).toBe(10);
    });
  });

  describe('startPlayerProgramming', () => {
    it('should set game state to "player1-program" for player 1', () => {
      gameModel.startPlayerProgramming(1);
      expect(gameModel.gameState).toBe('player1-program');
      expect(gameModel.currentPlayer).toBe(1);
    });

    it('should set game state to "player2-program" for player 2', () => {
      gameModel.startPlayerProgramming(2);
      expect(gameModel.gameState).toBe('player2-program');
      expect(gameModel.currentPlayer).toBe(2);
    });
  });

  describe('switchToPlayer2', () => {
    it('should switch to player 2 programming phase', () => {
      gameModel.startPlayerProgramming(1);
      gameModel.switchToPlayer2();
      expect(gameModel.gameState).toBe('player2-program');
      expect(gameModel.currentPlayer).toBe(2);
    });
  });

  describe('setReady', () => {
    it('should set game state to "ready"', () => {
      gameModel.setReady();
      expect(gameModel.gameState).toBe('ready');
    });
  });

  describe('startRace', () => {
    it('should set game state to "racing"', () => {
      gameModel.startRace();
      expect(gameModel.gameState).toBe('racing');
    });

    it('should reset scores to 0', () => {
      gameModel.player1Score = 5;
      gameModel.player2Score = 3;
      gameModel.startRace();
      expect(gameModel.player1Score).toBe(0);
      expect(gameModel.player2Score).toBe(0);
    });

    it('should reset winner to null', () => {
      gameModel.winner = 1;
      gameModel.startRace();
      expect(gameModel.winner).toBeNull();
    });
  });

  describe('Score Updates', () => {
    beforeEach(() => {
      gameModel.startRace();
    });

    it('should update player 1 score', () => {
      gameModel.updatePlayer1Score(5);
      expect(gameModel.player1Score).toBe(5);
    });

    it('should update player 2 score', () => {
      gameModel.updatePlayer2Score(7);
      expect(gameModel.player2Score).toBe(7);
    });

    it('should increment player 1 score by 1', () => {
      gameModel.incrementPlayer1Score();
      expect(gameModel.player1Score).toBe(1);
      gameModel.incrementPlayer1Score();
      expect(gameModel.player1Score).toBe(2);
    });

    it('should increment player 2 score by custom amount', () => {
      gameModel.incrementPlayer2Score(3);
      expect(gameModel.player2Score).toBe(3);
      gameModel.incrementPlayer2Score(2);
      expect(gameModel.player2Score).toBe(5);
    });
  });

  describe('Win Condition', () => {
    beforeEach(() => {
      gameModel.startRace();
    });

    it('should set player 1 as winner when score reaches 10', () => {
      gameModel.updatePlayer1Score(10);
      expect(gameModel.winner).toBe(1);
      expect(gameModel.gameState).toBe('finished');
    });

    it('should set player 2 as winner when score reaches 10', () => {
      gameModel.updatePlayer2Score(10);
      expect(gameModel.winner).toBe(2);
      expect(gameModel.gameState).toBe('finished');
    });

    it('should set player 1 as winner when score exceeds 10', () => {
      gameModel.updatePlayer1Score(15);
      expect(gameModel.winner).toBe(1);
      expect(gameModel.gameState).toBe('finished');
    });

    it('should not check win condition when not racing', () => {
      gameModel.gameState = 'setup';
      gameModel.updatePlayer1Score(10);
      expect(gameModel.winner).toBeNull();
      expect(gameModel.gameState).toBe('setup');
    });

    it('should set first player to reach 10 as winner', () => {
      gameModel.updatePlayer1Score(9);
      gameModel.updatePlayer2Score(9);
      expect(gameModel.winner).toBeNull();

      gameModel.incrementPlayer1Score();
      expect(gameModel.winner).toBe(1);
      expect(gameModel.gameState).toBe('finished');
    });
  });

  describe('reset', () => {
    it('should reset all game state to initial values', () => {
      gameModel.startRace();
      gameModel.updatePlayer1Score(8);
      gameModel.updatePlayer2Score(5);
      gameModel.updatePlayer1Score(10);

      gameModel.reset();

      expect(gameModel.gameState).toBe('setup');
      expect(gameModel.currentPlayer).toBe(1);
      expect(gameModel.player1Score).toBe(0);
      expect(gameModel.player2Score).toBe(0);
      expect(gameModel.winner).toBeNull();
    });
  });

  describe('updateSettings', () => {
    it('should update win condition', () => {
      gameModel.updateSettings({ winCondition: 15 });
      expect(gameModel.winCondition).toBe(15);
    });

    it('should trigger win with new win condition', () => {
      gameModel.updateSettings({ winCondition: 5 });
      gameModel.startRace();
      gameModel.updatePlayer1Score(5);
      expect(gameModel.winner).toBe(1);
      expect(gameModel.gameState).toBe('finished');
    });
  });

  describe('Computed Properties', () => {
    it('isRacing should return true when game state is "racing"', () => {
      expect(gameModel.isRacing).toBe(false);
      gameModel.startRace();
      expect(gameModel.isRacing).toBe(true);
    });

    it('isFinished should return true when game state is "finished"', () => {
      gameModel.startRace();
      expect(gameModel.isFinished).toBe(false);
      gameModel.updatePlayer1Score(10);
      expect(gameModel.isFinished).toBe(true);
    });

    it('canStartRace should return true when game state is "ready"', () => {
      expect(gameModel.canStartRace).toBe(false);
      gameModel.setReady();
      expect(gameModel.canStartRace).toBe(true);
      gameModel.startRace();
      expect(gameModel.canStartRace).toBe(false);
    });
  });
});
