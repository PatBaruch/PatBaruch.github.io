import Game from './Game.js';

import CanvasRenderer from './CanvasRenderer.js';
import KeyListener from './KeyListener.js';
import Level0 from './Level0.js';
import Level from './Level.js';

export default class VirusVanguard extends Game {
  private canvas: HTMLCanvasElement;

  private keyListener: KeyListener;

  private currentLevel: Level;

  /**
   * Create a new instance of the game.
   *
   * @param canvas HTML canvas where the game should be rendered
   */
  public constructor(canvas: HTMLCanvasElement) {
    super();
    this.canvas = canvas;
    this.canvas.height = window.innerHeight;
    this.canvas.width = window.innerWidth;
    this.keyListener = new KeyListener();
    this.currentLevel = new Level0(canvas.width, canvas.height);
  }

  /**

  /**
   * Process all input. Called from the GameLoop.
   */
  public processInput(): void {
    this.currentLevel.processInput(this.keyListener);
  }

  /**
   * Update game state. Called from the GameLoop
   *
   * @param elapsed time elapsed from the GameLoop
   * @returns true if the game should continue
   */
  public update(elapsed: number): boolean {
    this.currentLevel.update(elapsed);
    const newLevel: Level | null = this.currentLevel.nextLevel();
    if (newLevel !== null) {
      this.currentLevel = newLevel;
    }
    return true;
  }

  /**
   * Render all the elements in the screen. Called from GameLoop
   */
  public render(): void {
    CanvasRenderer.clearCanvas(this.canvas);
    this.currentLevel.render(this.canvas);
  }
}
