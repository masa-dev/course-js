class Car {
    constructor(x, y, speed) {
        this.x = x;
        this.y = y;
        this.speed = speed;

        this.radians = (3 / 2) * Math.PI;  //270°（角度）
        this.xVector = 0;
        this.yVector = -(this.speed);
    }

    update() {
        this.x += this.xVector;
        this.y += this.yVector;
    }
    turnRight() {
        this.radians += Math.PI / 75;  //ベクトルを 2.5°ずつ右に回転
        this.xVector = this.speed * Math.cos(this.radians);
        this.yVector = this.speed * Math.sin(this.radians);
    }
    turnLeft() {
        this.radians -= Math.PI / 75;  //ベクトルを 2.5°ずつ左に回転
        this.xVector = this.speed * Math.cos(this.radians);
        this.yVector = this.speed * Math.sin(this.radians);
    }
    start(startSpeed) {
        this.speed = startSpeed;
        this.xVector = this.speed * Math.cos(this.radians);
        this.yVector = this.speed * Math.sin(this.radians);
    }
    stop() {
        this.speed = 0;
        this.xVector = 0;
        this.yVector = 0;
    }
    displayOnCanvas(context) {
        context.beginPath();
        context.fillStyle = 'red';
        context.arc(this.x, this.y, 3, 0, 2 * Math.PI);
        context.fill();
    }
}
