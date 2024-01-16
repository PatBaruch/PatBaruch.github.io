import Level from './Level.js';

export default class Level1 extends Level {
  public constructor(maxX: number, maxY: number){
    super(maxX, maxY);
    document.body.className = 'level1';
    this.maxX = 5000;
    this.maxY = 5000;
    this.minX = 0;
    this.minY = 0;
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
    return null;
  }
}
