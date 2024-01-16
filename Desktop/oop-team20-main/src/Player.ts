import CanvasItem from './CanvasItem.js';
import CanvasRenderer from './CanvasRenderer.js';

export default class Player extends CanvasItem {
  public constructor() {
    super();
    this.image = CanvasRenderer.loadNewImage('./assets/player.png');
    this.posX = 180;
    this.posY = 490;
  }

  /**
   *
   */
  public moveUp():void {
    this.posY -= 5;
  }

  /**
   *
   */
  public moveDown():void {
    this.posY += 5;
  }

  /**
   *
   */
  public moveLeft():void {
    this.posX -= 5;
  }

  /**
   *
   */
  public moveRight(): void {
    this.posX += 5;
  }
}

