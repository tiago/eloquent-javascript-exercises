function repeat(string, times) {
    var result = '';
    for (var i = 0; i < times; i++)
        result += string;
    return result;
}

function TextCell(text) {
    this.text = text.split('\n');
}
TextCell.prototype.minWidth = function() {
    return this.text.reduce(function(width, line) {
        return Math.max(width, line.length);
    }, 0);
};
TextCell.prototype.minHeight = function() {
    return this.text.length;
};
TextCell.prototype.draw = function(width, height) {
    var result = [];
    for (var i = 0; i < height; i++) {
        var line = this.text[i] || '';
        result.push(line + repeat(' ', width - line.length));
    }
    return result;
};

// 6.1 A vector type
function Vector(x, y) {
    this.x = x;
    this.y = y;
}

Vector.prototype.plus = function plus(v) {
    return new Vector(this.x + v.x, this.y + v.y);
};

Vector.prototype.minus = function minus(v) {
    return new Vector(this.x - v.x, this.y - v.y);
};

Object.defineProperty(Vector.prototype, 'length', {
    get: function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
});

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
console.log(new Vector(3, 4).length);

// 6.2 Another cell
function StretchCell(inner, width, height) {
    this.inner = inner;
    this.width = width;
    this.height = height;
}
StretchCell.prototype.minWidth = function () {
    return Math.max(this.inner.minWidth(), this.width);
};
StretchCell.prototype.minHeight = function () {
    return Math.max(this.inner.minHeight(), this.height);
};
StretchCell.prototype.draw = function (width, height) {
    return this.inner.draw(width, height);
};

var sc = new StretchCell(new TextCell('abc'), 1, 2);
console.log(sc.minWidth());
console.log(sc.minHeight());
console.log(sc.draw(3, 2));

// 6.3 Sequence interface
function logFive(seq) {
    for(var i = 0; i < 5 && seq.hasNext(); i++) {
        console.log(seq.next());
    }
}

function ArraySeq(array) {
    this.position = 0;
    this.array = array;
}
ArraySeq.prototype.next = function () {
    return this.array[this.position++];
};
ArraySeq.prototype.hasNext = function () {
    return this.position < this.array.length;
};

function RangeSeq(from, to) {
    this.current = from;
    this.stop = to;
}
RangeSeq.prototype.next = function () {
    return this.current++;
};
RangeSeq.prototype.hasNext = function () {
    return this.current < this.stop;
};

logFive(new ArraySeq([1, 2]));
logFive(new RangeSeq(100, 1000));
