
// BOX 
var sketch = function(b) {

    b.setup = function() {
        b.canvas = b.createCanvas(100,100, b.WEBGL);
        b.canvas.parent('box-p5');
        b.timex = 2;
        b.timey = 20;
    }

    b.draw = function() {
        b.background(255,0,255);
        b.rotateX(b.frameCount * 0.01);
        b.rotateY(b.frameCount * 0.002);
        b.box(50);
        b.normalMaterial();
    }
}

var box = new p5(sketch);

// TORUS

var sketch1 = function(t) {

    t.setup = function() {
        t.canvas = t.createCanvas(100,100, t.WEBGL);
        t.canvas.parent('torus-p5');
        t.timex = 2;
        t.timey = 20;
    }

    t.draw = function() {
        t.background(0,255,255);
        t.rotateX(t.frameCount * 0.01);
        t.rotateY(t.frameCount * 0.002);
        t.torus(30,10);
        t.normalMaterial();
    }
}

var torus = new p5(sketch1);


// CYLINDER

var sketch2 = function(c) {

    c.setup = function() {
        c.canvas = c.createCanvas(100,100, c.WEBGL);
        c.canvas.parent('cylinder-p5');
        c.timex = 2;
        c.timey = 20;
    }

    c.draw = function() {
        c.background(0,255,0);
        c.rotateX(c.frameCount * 0.01);
        c.rotateZ(c.frameCount * 0.002);
        c.cylinder(25,60);
        c.normalMaterial();
    }
}

var cylinder = new p5(sketch2);



// CONE

var sketch3 = function(n) {

    n.setup = function() {
        n.canvas = n.createCanvas(100,100, n.WEBGL);
        n.canvas.parent('cone-p5');
        n.timex = 2;
        n.timey = 20;
    }

    n.draw = function() {
        n.background(255,100,0);
        n.rotateX(n.frameCount * 0.01);
        n.rotateZ(n.frameCount * 0.002);
        n.cone(40,40);
        n.normalMaterial();
    }
}

var cone = new p5(sketch3);