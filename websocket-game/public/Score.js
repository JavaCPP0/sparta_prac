import { sendEvent } from './Socket0.js';

class Score {
  score = 0;
  HIGH_SCORE_KEY = 'highScore';
  stageChange = true;
  currentStage = 1000;
  nextStageScore = 100;
  scoreMultiplier = 1;

  constructor(ctx, scaleRatio) {
    this.ctx = ctx;
    this.canvas = ctx.canvas;
    this.scaleRatio = scaleRatio;
  }

  update(deltaTime) {
    this.score += (deltaTime * 0.001) * this.scoreMultiplier;
    if (Math.floor(this.score) >= this.nextStageScore && this.stageChange) {
      this.stageChange = false;
      this.currentStage++;
      this.nextStageScore *= 2;
      this.scoreMultiplier += 0.5;
      sendEvent(11, { 
        currentStage: this.currentStage - 1, 
        targetStage: this.currentStage 
      });
    }
  }

  getItem(itemId) {
    // 아이템 획득시 점수 변화
    switch(itemId) {
      case 1:
        this.score += 10;
        break;
      case 2:
        this.score += 20;
        break;
      case 3:
        this.score += 30;
        break;
      case 4:
        this.score += 40;
        break;
      case 5: // 폭탄
        this.score = Math.max(0, this.score - 50); // 폭탄은 점수를 감소시키되 0 밑으로는 안내려감
        break;
      default:
        this.score += 0;
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