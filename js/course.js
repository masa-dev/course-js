//座標のオブジェクト
class Coordinate {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class CourseObj {
    constructor(pointA_X, pointA_Y, pointB_X, pointB_Y) {
        this.pointA = new Coordinate(pointA_X, pointA_Y);
        this.pointB = new Coordinate(pointB_X, pointB_Y);
    }

    judgeIentersected(ax, ay, bx, by) {
        [cx, cy, dx, dy] = [this.pointA.x, this.pointA.y, this.pointB.x, this.pointB.y];
        
        let ta = (cx - dx) * (ay - cy) + (cy - dy) * (cx - ax);
        let tb = (cx - dx) * (by - cy) + (cy - dy) * (cx - bx);
        let tc = (ax - bx) * (cy - ay) + (ay - by) * (ax - cx);
        let td = (ax - bx) * (dy - ay) + (ay - by) * (ax - dx);
      
        //return tc * td < 0 && ta * tb < 0; // 端点を含まない場合
        return tc * td <= 0 && ta * tb <= 0;
    }
    
    judgeCollision(x, y) {  //点と線分の距離で衝突判別する
        let tempA = new Coordinate(), tempB = new Coordinate();
        [tempA.x, tempB.x] = AisBiggerThanB(this.pointA.x, this.pointB.x);
        [tempA.y, tempB.y] = AisBiggerThanB(this.pointA.y, this.pointB.y);

        //傾きが無限大になるので別に判定
        if(this.pointA.x == this.pointB.x) {
            if(y > tempA.y && y < tempB.y) {
                return (x > (this.pointA.x - 4) && x < (this.pointA.x + 4));    //誤差を+-2までにする
            }
        }
        
        else {
            //傾きと切片
            let slope, intercepts;
            let a, b, c, distance;  //ax+by+c=0 , 二点間の距離
            
            //バウンティボックスを作成
            if(x > tempA.x-5 && x < tempB.x+5) {
                if(y > tempA.y-5 && y < tempB.y+5) {
                    slope = (this.pointB.y - this.pointA.y) / (this.pointB.x - this.pointA.x);
                    intercepts = slope * (-this.pointA.x) + this.pointA.y;

                    a = slope;
                    b = -1;
                    c = intercepts;

                    distance = Math.abs(a*x + b*y + c) / Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
                    return distance > -4 && distance < 4;   //小数点の誤差をなくす

                }
            }
        }
    }
    lineToCanvas(context) {
        context.moveTo(this.pointA.x, this.pointA.y);
        context.lineTo(this.pointB.x, this.pointB.y);
    }
}

//a<bにする関数
function AisBiggerThanB(a, b) {
    if(a < b) {
        return [a, b];
    }
    else {
        return [b, a];
    }
}

//context の設定
function initCanvasSettings(context, lineWidth, strokeColor) {
    context.strokeStyle = strokeColor;
    context.lineWidth = lineWidth;
    context.beginPath();
}
