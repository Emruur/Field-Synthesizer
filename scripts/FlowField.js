class Field {
    constructor(resolution) {
        this.resolution = resolution;
        this.cols = (width / resolution)+1;
        this.rows = height / resolution;

        this.field = [];

        this.xoff = 0;
        this.yoff = 0;
        this.xdiroff= 100;
        this.ydiroff= 0;
        this.inc = 0.003;
        this.init();
    }

    init() {
        for (let j = 0; j < this.rows; j++) {
            let row = [];
            for (let i = 0; i < this.cols; i++) {
                let angle = map(noise(i / this.noiseDetail, j / this.noiseDetail), 0, 1, 0, 2 * PI);
                row.push(p5.Vector.fromAngle(angle).setMag(this.resolution / 2));
            }
            this.field.push(row);
        }
    }

    update(inc,nd) {
        noiseDetail(2)
        for (let j = 0; j < this.rows; j++) {
            for (let i = 0; i < this.cols; i++) {
                let angle = map(
                    noise(i / nd + this.xoff, j / nd + this.yoff),
                    0,
                    1,
                    0,
                    2 * PI
                );
                this.field[j][i] = p5.Vector.fromAngle(angle);
                let mag= map(abs(this.field[j][i].heading()),0,PI,this.resolution, this.resolution)
                this.field[j][i].setMag(mag)
            }
        }
        this.xoff += inc
        this.yoff += inc
    }

    draw(heat) {
        let pos = createVector();
        for (let j = 0; j < this.rows; j++) {
            for (let i = 0; i < this.cols; i++) {
                pos.set(i * this.resolution, j * this.resolution)
                let w = map(abs(this.field[j][i].heading()), 0, PI, 10, 3)
                let r= map(abs(this.field[j][i].heading()),0,PI,100+heat,150+heat)
                let g= map(abs(this.field[j][i].heading()),0,PI,200-(heat/2),190-(heat/2))
                let b= map(abs(this.field[j][i].heading()),0,PI,100-heat,255-heat)
                drawArrow(pos, this.field[j][i],[r,g,b], w);
            }
        }
    }
}

function drawArrow(base, vec, myColor, weight) {
    push();
    stroke(myColor);
    strokeWeight(weight);
    fill(myColor);
    translate(base.x, base.y);
    line(0, 0, vec.x, vec.y);
    rotate(vec.heading());
    // let arrowSize = 3;
    // translate(vec.mag() - arrowSize, 0);
    // triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
    pop();
}
