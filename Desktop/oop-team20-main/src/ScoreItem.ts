import GameItem from './GameItem.js';
import CanvasRenderer from './CanvasRenderer.js';

export default class ScoreItem extends GameItem {
  public constructor(posX: number) {
    super();
    this.posX = posX;
    this.posY = 0;
  }
}
