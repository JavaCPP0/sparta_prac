class Player {
    // 걷기 애니메이션 관련 상수 및 변수
    WALK_ANIMATION_TIMER = 200;  // 애니메이션 프레임 전환 시간 (ms)
    walkAnimationTimer = this.WALK_ANIMATION_TIMER;
    dinoRunImages = [];  // 달리기 애니메이션 이미지 배열

    // 점프 관련 상태 변수
    jumpPressed = false;     // 점프 키가 눌렸는지 여부
    jumpInProgress = false;  // 점프가 진행 중인지 여부
    falling = false;         // 낙하 중인지 여부

    // 물리 상수
    JUMP_SPEED = 0.6;  // 점프 속도
    GRAVITY = 0.4;     // 중력 가속도

    // 생성자
    constructor(ctx, width, height, minJumpHeight, maxJumpHeight, scaleRatio) {
        this.ctx = ctx;
        this.canvas = ctx.canvas;
        this.width = width;
        this.height = height;
        this.minJumpHeight = minJumpHeight;
        this.maxJumpHeight = maxJumpHeight;
        this.scaleRatio = scaleRatio;

        this.x = 10 * scaleRatio;
        this.y = this.canvas.height - this.height - 1.5 * scaleRatio;
        // 기본 위치 상수화
        this.yStandingPosition = this.y;

        this.standingStillImage = new Image();
        this.standingStillImage.src = "images/standing_still.png";
        this.image = this.standingStillImage;

        // 달리기
        const dinoRunImage1 = new Image();
        dinoRunImage1.src = "images/dino_run1.png";

        const dinoRunImage2 = new Image();
        dinoRunImage2.src = "images/dino_run2.png";

        this.dinoRunImages.push(dinoRunImage1);
        this.dinoRunImages.push(dinoRunImage2);

        // 키보드 설정
        // 등록된 이벤트가 있는 경우 삭제하고 다시 등록
        window.removeEventListener("keydown", this.keydown);
        window.removeEventListener("keyup", this.keyup);

        window.addEventListener("keydown", this.keydown);
        window.addEventListener("keyup", this.keyup);
    }

    // 키보드 이벤트 핸들러 - 스페이스바 누를 때
    keydown = (event) => {
        if (event.code === "Space") {
            this.jumpPressed = true;
        }
    };

    // 키보드 이벤트 핸들러 - 스페이스바 뗄 때
    keyup = (event) => {
        if (event.code === "Space") {
            this.jumpPressed = false;
        }
    };

    // 게임 상태 업데이트 메서드
    update(gameSpeed, deltaTime) {
        this.run(gameSpeed, deltaTime);

        if (this.jumpInProgress) {
            this.image = this.standingStillImage;
        }

        this.jump(deltaTime);
    }

    // 점프 로직 처리 메서드
    jump(deltaTime) {
        if (this.jumpPressed) {
            this.jumpInProgress = true;
        }

        // 상승 단계
        if (this.jumpInProgress && !this.falling) {
            // 최소 점프 높이에 도달하지 않았거나
            // 최대 점프 높이에 도달하지 않고 점프 키를 계속 누르고 있는 경우
            if ((this.y > this.canvas.height - this.minJumpHeight) ||
                (this.y > this.canvas.height - this.maxJumpHeight) && this.jumpPressed) {
                this.y -= this.JUMP_SPEED * deltaTime * this.scaleRatio;
            } else {
                this.falling = true;
            }
        } 
        // 하강 단계
        else {
            if (this.y < this.yStandingPosition) {
                this.y += this.GRAVITY * deltaTime * this.scaleRatio;

                // 착지 위치 보정
                if (this.y + this.height > this.canvas.height) {
                    this.y = this.yStandingPosition
                }
            } else {
                // 착지 완료
                this.falling = false;
                this.jumpInProgress = false;
            }
        }
    }

    // 달리기 애니메이션 처리 메서드
    run(gameSpeed, deltaTime) {
        if (this.walkAnimationTimer <= 0) {
            if (this.image === this.dinoRunImages[0]) {
                this.image = this.dinoRunImages[1];
            } else {
                this.image = this.dinoRunImages[0];
            }
            this.walkAnimationTimer = this.WALK_ANIMATION_TIMER;
        }

        this.walkAnimationTimer -= deltaTime * gameSpeed;
    }

    // 캐릭터 그리기 메서드
    draw() {
        this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}

export default Player;