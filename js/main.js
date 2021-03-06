//コースのコンテキスト
const courseCanvas = document.getElementById('canvas-course');
const courseCtx = courseCanvas.getContext('2d');
//ゴールのコンテキスト
const goalCanvas = document.getElementById('canvas-goal');
const goalCtx = goalCanvas.getContext('2d');
//車のコンテキスト
const carCanvas = document.getElementById('canvas-car');
const carCtx = carCanvas.getContext('2d');

//コースの各座標
const courseCoodinates1 = [[100, 700], [100, 500], [120, 430], [180, 370], [250, 350], [450, 350], [485, 335], [500, 300], [500, 100]];
const courseCoodinates2 = [[200, 700], [200, 500], [215, 465], [250, 450], [450, 450], [520, 430], [580, 370], [600, 300], [600, 100]];
let course = [];

//fps のカウント
let flameCount = 0;

//コースの設定
initCanvasSettings(courseCtx, 2, 'rgb(232, 230, 227)')
initCanvasSettings(goalCtx, 2, 'blue');

//コースの線を作る
for (let i = 0; i < 8; i++) {
    course.push(new CourseObj(courseCoodinates1[i][0], courseCoodinates1[i][1], courseCoodinates1[i + 1][0], courseCoodinates1[i + 1][1]));
    course.push(new CourseObj(courseCoodinates2[i][0], courseCoodinates2[i][1], courseCoodinates2[i + 1][0], courseCoodinates2[i + 1][1]));
}
course.push(new CourseObj(100, 700, 200, 700));     //入り口を封鎖
let goal = new CourseObj(500, 100, 600, 100);

//線引き
for (let i = 0; i < course.length; i++) {
    course[i].lineToCanvas(courseCtx);
}
goal.lineToCanvas(goalCtx);


//車を定義
let car = new Car(150, 690, 5);

//キー操作
let keydown = '';
document.addEventListener('keydown', event => {
    keydown = event.key;
});
document.addEventListener('keyup', () => {
    keydown = '';
});
function keyOperation(keydown) {
    switch (keydown) {
        case 'ArrowLeft':
            car.turnLeft();
            break;
        case 'ArrowRight':
            car.turnRight();
            break;
        case 'a':
            car.turnLeft();
            break;
        case 'd':
            car.turnRight();
            break;
        case 'Enter':
            location.reload();
            break;
        case ' ':
            location.reload();
            break;
        default:
            break;
    }
}

//画面のサイズが小さいとき

const width = document.body.clientWidth;
const height = document.body.clientHeight;

if (width < 850) {
    const baseSize = width - 10;
    const canvasSize = document.getElementsByClassName('canvas');
    const canvasSpace = document.getElementById('canvas-space');

    for (let i = 0; i < canvasSize.length; i++) {
        canvasSize[i].style.width = baseSize + 'px';
    }
    canvasSpace.style.height = baseSize + 'px';
    canvasSpace.style.width = baseSize + 'px';

}
if (height < 950) {
    const baseSize = height - 350;
    const canvasSize = document.getElementsByClassName('canvas');
    const canvasSpace = document.getElementById('canvas-space');

    for (let i = 0; i < canvasSize.length; i++) {
        canvasSize[i].style.width = baseSize + 'px';
    }
    canvasSpace.style.height = baseSize + 'px';
    canvasSpace.style.width = baseSize + 'px';

}


//車の動作とcanvas更新
function loop() {
    carCtx.clearRect(0, 0, 800, 800);
    //car.turnRight();
    keyOperation(keydown);

    //canvas更新
    car.update();
    courseCtx.stroke();
    goalCtx.stroke();
    car.displayOnCanvas(carCtx);

    //衝突判定
    course.forEach((element) => {
        if (element.judgeCollision(car.x, car.y)) {
            car.stop();
            document.getElementById('result').innerHTML = 'You Lose'
        }
    });
    if (goal.judgeCollision(car.x, car.y)) {
        document.getElementById('result').innerHTML = 'ゴールしました'
        car.stop();
    }

    //フレームをカウントする
    flameCount++;

    //再帰的に呼び出す
    window.requestAnimationFrame(() => loop());
}
window.requestAnimationFrame(() => loop());

//fps を表示
let displayFPS = setInterval(function () {
    let fps = flameCount / 0.5;
    document.getElementById('fps').innerHTML = fps + ' fps';
    flameCount = 0;
}, 500);