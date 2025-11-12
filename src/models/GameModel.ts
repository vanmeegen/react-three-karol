import { action, makeObservable, observable } from "mobx";

export type GameState =
  | 'setup'           // Initial setup phase
  | 'player1-program' // Player 1 is programming
  | 'player2-program' // Player 2 is programming
  | 'ready'           // Both programs ready to race
  | 'racing'          // Race is running
  | 'finished';       // Race finished, winner determined

export interface GameSettings {
  winCondition: number; // Number of bricks to pickup to win (default: 10)
}

/**
 * GameModel manages the two-player race game state
 */
export class GameModel {
  @observable gameState: GameState = 'setup';
  @observable currentPlayer: 1 | 2 = 1;
  @observable player1Score: number = 0;
  @observable player2Score: number = 0;
  @observable winner: 1 | 2 | null = null;
  @observable winCondition: number = 10;

  constructor() {
    makeObservable(this);
  }

  @action startPlayerProgramming(player: 1 | 2): void {
    this.currentPlayer = player;
    this.gameState = player === 1 ? 'player1-program' : 'player2-program';
    console.log(`Player ${player} is now programming`);
  }

  @action switchToPlayer2(): void {
    this.gameState = 'player2-program';
    this.currentPlayer = 2;
    console.log('Switched to Player 2 programming');
  }

  @action setReady(): void {
    this.gameState = 'ready';
    console.log('Both players ready - race can start');
  }

  @action startRace(): void {
    this.gameState = 'racing';
    this.player1Score = 0;
    this.player2Score = 0;
    this.winner = null;
    console.log('Race started!');
  }

  @action updatePlayer1Score(score: number): void {
    this.player1Score = score;
    this.checkWinCondition();
  }

  @action updatePlayer2Score(score: number): void {
    this.player2Score = score;
    this.checkWinCondition();
  }

  @action incrementPlayer1Score(amount: number = 1): void {
    this.player1Score += amount;
    this.checkWinCondition();
  }

  @action incrementPlayer2Score(amount: number = 1): void {
    this.player2Score += amount;
    this.checkWinCondition();
  }

  private checkWinCondition(): void {
    if (this.gameState === 'racing') {
      if (this.player1Score >= this.winCondition) {
        this.finishRace(1);
      } else if (this.player2Score >= this.winCondition) {
        this.finishRace(2);
      }
    }
  }

  @action finishRace(winner: 1 | 2): void {
    this.winner = winner;
    this.gameState = 'finished';
    console.log(`Player ${winner} wins with ${winner === 1 ? this.player1Score : this.player2Score} bricks!`);
  }

  @action reset(): void {
    this.gameState = 'setup';
    this.currentPlayer = 1;
    this.player1Score = 0;
    this.player2Score = 0;
    this.winner = null;
    console.log('Game reset');
  }

  @action updateSettings(settings: Partial<GameSettings>): void {
    if (settings.winCondition !== undefined) {
      this.winCondition = settings.winCondition;
    }
  }

  /**
   * Returns true if the game is currently running
   */
  get isRacing(): boolean {
    return this.gameState === 'racing';
  }

  /**
   * Returns true if the game is finished
   */
  get isFinished(): boolean {
    return this.gameState === 'finished';
  }

  /**
   * Returns true if both players are ready and race can start
   */
  get canStartRace(): boolean {
    return this.gameState === 'ready';
  }
}
