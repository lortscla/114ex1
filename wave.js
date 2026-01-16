const Oscillator = function (img) {
    this.img = img;

    this._getRandVector = function () {
        return random(-0.06, 0.06);
    };

    imageMode(CENTER);

    this.angle = createVector();
    this.velocity = createVector(this._getRandVector(), this._getRandVector());
    this.amplitude = createVector(random(20, width / 2), random(30, height / 3));

    let count = 0;

    this.oscillate = function () {
        this.angle.add(this.velocity);
    };

    this.display = function () {
        const x = sin(this.angle.x) * this.amplitude.x;
        const y = sin(this.angle.y) * this.amplitude.y;
        const size = Math.abs(sin(count)) * 200;
        console.log(size);

        push();
        translate(width / 2, height / 2);

        count += 0.02;
        rotate(count);

        const a = Math.abs(Math.round(Math.cos(count * 2) * 100));
        console.log(a);
        tint(255, count * a);

        image(this.img, x, y, size, size);
        pop();
    };
};