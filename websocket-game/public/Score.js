import { sendEvent } from './Socket0.js';
import ItemController from './ItemController.js';

class Score {
  score = 0;
  HIGH_SCORE_KEY = 'highScore';
  stageChange = true;
  currentStage = 1000;
  nextStageScore = 100;
  scoreMultiplier = 1;

  constructor(ctx, scaleRatio, itemController) {
    this.ctx = ctx;
    this.canvas = ctx.canvas;
    this.scaleRatio = scaleRatio;
    this.itemController = itemController;
  }

  update(deltaTime) {
    this.score += deltaTime * 0.001 * this.scoreMultiplier;
    if (Math.floor(this.score) >= this.nextStageScore && this.stageChange) {
      this.stageChange = false;
      this.currentStage++;
      this.nextStageScore *= 2;
      this.scoreMultiplier += 0.5;
      this.itemController.updateStage(this.currentStage);
      sendEvent(11, {
        currentStage: this.currentStage - 1,
        targetStage: this.currentStage,
      });
    }
  }

  // Score.js의 getItem 메서드 수정
  getItem(itemId) {
    const collidedItem = this.itemController.items.find((item) => item.id === itemId);
    if (collidedItem) {
      this.score = Math.max(0, this.score + collidedItem.score); // 점수가 0 미만이 되지 않도록
    }
  }

  reset() {
    this.score = 0;
    this.currentStage = 1000;
    this.nextStageScore = 100;
    this.scoreMultiplier = 1;
    this.stageChange = true;
  }

  setHighScore() {
    const highScore = Number(localStorage.getItem(this.HIGH_SCORE_KEY));
    if (this.score > highScore) {
      localStorage.setItem(this.HIGH_SCORE_KEY, Math.floor(this.score));
    }
  }

  getScore() {
    return this.score;
  }

  draw() {
    const highScore = Number(localStorage.getItem(this.HIGH_SCORE_KEY));
    const y = 20 * this.scaleRatio;

    const fontSize = 20 * this.scaleRatio;
    this.ctx.font = `${fontSize}px serif`;
    this.ctx.fillStyle = '#525250';

    const scoreX = this.canvas.width - 75 * this.scaleRatio;
    const highScoreX = scoreX - 125 * this.scaleRatio;

    const scorePadded = Math.floor(this.score).toString().padStart(6, 0);
    const highScorePadded = highScore.toString().padStart(6, 0);

    this.ctx.fillText(scorePadded, scoreX, y);
    this.ctx.fillText(`HI ${highScorePadded}`, highScoreX, y);
  }
}

export default Score;
