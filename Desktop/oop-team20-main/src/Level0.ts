import Level from './Level.js';
import Level1 from './Level1.js';

export default class Level0 extends Level {
  public constructor(maxX: number, maxY: number){
    super(maxX, maxY);
    document.body.className = 'level0';
    this.maxX = 1375;
    this.maxY = 750;
    this.minX = 50;
    this.minY = 250;
    this.startLevel();
  }

  /**
   *
   */
  public override spawnNextItem(): void {
  }

  /**
   *  @returns Level | null
   */
  public override nextLevel(): Level | null {
    if (this.player.getPosX() > 1370 && this.player.getPosY() < 600
    && this.player.getPosY() > 420) {
      return new Level1(this.maxX, this.maxY);
    }
    return null;
  }

}
