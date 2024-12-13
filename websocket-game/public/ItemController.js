import Item from "./Item.js";

// 게임 내 아이템 관리 클래스
class ItemController {

    // 아이템 생성 간격 설정
    INTERVAL_MIN = 0;               // 최소 생성 간격 (ms)
    INTERVAL_MAX = 12000;           // 최대 생성 간격 (ms)

    nextInterval = null;
    items = [];


    constructor(ctx, itemImages, scaleRatio, speed) {
        this.ctx = ctx;
        this.canvas = ctx.canvas;
        this.itemImages = itemImages;       // 아이템 이미지 배열
        this.scaleRatio = scaleRatio;       // 화면 크기 비율
        this.speed = speed;                 // 이동 속도

        this.setNextItemTime();             // 다음 아이템 생성 시간 설정
    }

    setNextItemTime() {
        this.nextInterval = this.getRandomNumber(
            this.INTERVAL_MIN,
            this.INTERVAL_MAX
        );
    }

    getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    // 새로운 아이템 생성
    createItem() {
        const index = this.getRandomNumber(0, this.itemImages.length - 1);
        const itemInfo = this.itemImages[index];
        // 화면 오른쪽에서 랜덤한 높이에 생성
        const x = this.canvas.width * 1.5;
        const y = this.getRandomNumber(10, this.canvas.height - itemInfo.height);

        const item = new Item(
            this.ctx,
            itemInfo.id,
            x,
            y,
            itemInfo.width,
            itemInfo.height,
            itemInfo.image
        );

        this.items.push(item);
    }


    update(gameSpeed, deltaTime) {
        if(this.nextInterval <= 0) {
            this.createItem();
            this.setNextItemTime();
        }

        this.nextInterval -= deltaTime;

        this.items.forEach((item) => {
            item.update(this.speed, gameSpeed, deltaTime, this.scaleRatio);
        })

        this.items = this.items.filter(item => item.x > -item.width);
    }

    draw() {
        this.items.forEach((item) => item.draw());
    }

    // 충돌 감지 및 아이템 효과 처리
    collideWith(sprite) {
        const collidedItem = this.items.find(item => item.collideWith(sprite))
        if (collidedItem) {
            // 충돌한 아이템 제거 및 효과 반환
            this.ctx.clearRect(collidedItem.x, collidedItem.y, collidedItem.width, collidedItem.height)
            return {
                itemId: collidedItem.id
            }
        }
    }

    reset() {
        this.items = [];
    }
}

export default ItemController;