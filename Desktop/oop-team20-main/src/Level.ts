import Player from './Player.js';
import KeyListener from './KeyListener.js';

export default abstract class Level {
  protected player: Player;

  protected maxX: number;

  protected maxY: number;

  protected minX: number;

  protected minY: number;

  protected currentLevel: number;


  public constructor(maxX: number, maxY: number) {
    this.maxX = maxX;
    this.maxY = maxY;
  }

  protected startLevel(): void {
    this.player = new Player();
  }

  public abstract spawnNextItem(): void;

  public abstract nextLevel(): Level | null;

  /**
   *
   * @param keyListener key that is pressed
   */
  public processInput(keyListener: KeyListener): void {
    if (keyListener.isKeyDown(KeyListener.KEY_W) && this.player.getPosY() > this.minY) {
      this.player.moveUp();
      console.log(this.player.getPosY());
    }
    if (keyListener.isKeyDown(KeyListener.KEY_A) && this.player.getPosX() > this.minX) {
      this.player.moveLeft();
      console.log(this.player.getPosX());
    }
    if (keyListener.isKeyDown(KeyListener.KEY_S) && this.player.getPosY() < this.maxY) {
      this.player.moveDown();
      console.log(this.player.getPosY());
    }
    if (keyListener.isKeyDown(KeyListener.KEY_D) && this.player.getPosX() < this.maxX ) {
      this.player.moveRight();
      console.log(this.player.getPosX());
    }
  }

  /**
   * Updates the level.
   * @param elapsed The elapsed time since the last update.
   */
  public update(elapsed: number): void {
  }

  /**
   *
   * @param canvas canvas on which it is rendered
   */
  public render(canvas: HTMLCanvasElement): void {
    this.player.render(canvas);
  }
}
