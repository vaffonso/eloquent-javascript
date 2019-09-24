class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    plus( vector ) {
        return new Vec(this.x + vector.x,this.y + vector.y);
    }

    minus (vector) {
        return new Vec(this.x - vector.x, this.y - vector.y);
    }

    get length() {
        return Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y,2));
    }
}

module.exports = Vec;