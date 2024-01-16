import CanvasItem from './CanvasItem.js';

export default abstract class GameItem extends CanvasItem {
  protected speed: number;

  protected score: number;

  public getScore(): number {
    return this.score;
  }

  /**
   *
   * @param elapsed time between ticks
   */
  public update(elapsed: number): void {
    this.posY += this.speed * elapsed;
  }
}
