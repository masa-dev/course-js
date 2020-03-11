let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');

context.strokeStyle = 'red';
context.lineWidth = 2;
//現在のパスをリセットする
context.beginPath();
//パスの開始座標を指定する
context.moveTo(100, 500);
//座標を指定して二次ベジェ曲線を引く
context.quadraticCurveTo(100, 350, 250, 350);
//現在のパスを輪郭表示する
context.stroke();


//ベジェ曲線あり
courseCtx.strokeStyle = 'rgb(232, 230, 227)';
courseCtx.lineWidth = 2;
courseCtx.beginPath();

//線引き
courseCtx.moveTo(100, 700);
courseCtx.lineTo(100, 500);
courseCtx.quadraticCurveTo(100, 350, 250, 350);
courseCtx.lineTo(450, 350);
courseCtx.quadraticCurveTo(500, 350, 500, 300);
courseCtx.lineTo(500, 100);

courseCtx.moveTo(200, 700);
courseCtx.lineTo(200, 500);
courseCtx.quadraticCurveTo(200, 450, 250, 450);
courseCtx.lineTo(450, 450);
courseCtx.quadraticCurveTo(600, 450, 600, 300);
courseCtx.lineTo(600, 100);

//表示
courseCtx.stroke();



/*
//線引き
courseCtx.moveTo(100, 700);
courseCtx.lineTo(100, 500);
//courseCtx.quadraticCurveTo(100, 350, 250, 350);
courseCtx.lineTo(120, 430);
courseCtx.lineTo(180, 370);
courseCtx.lineTo(250, 350);
courseCtx.lineTo(450, 350);
//courseCtx.quadraticCurveTo(500, 350, 500, 300);
courseCtx.lineTo(485, 335);
courseCtx.lineTo(500, 300);
courseCtx.lineTo(500, 100);


courseCtx.moveTo(200, 700);
courseCtx.lineTo(200, 500);
//courseCtx.quadraticCurveTo(200, 450, 250, 450);
courseCtx.lineTo(215, 465);
courseCtx.lineTo(250, 450);
courseCtx.lineTo(450, 450);

//courseCtx.quadraticCurveTo(600, 450, 600, 300);
courseCtx.lineTo(520, 430);
courseCtx.lineTo(580, 370);
courseCtx.lineTo(600, 300);
courseCtx.lineTo(600, 100);
*/

