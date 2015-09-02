// 4.1 The sum of a range
function between(target, n1, n2) {
    return target >= n1 && target <= n2 || target <= n1 && target >= n2;
}

function range(start, end, step) {
    var result = [];
    for (var n = start; between(n, start, end); n += step || 1) {
        result.push(n);
    }
    return result;
}

function sum(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

// 4.2 Reversing an array
function reverseArray(array) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        result.unshift(array[i]);
    }
    return result;
}

function reverseArrayInPlace(array) {
    for (var left = 0, right = array.length - 1; left < right; left++, right--) {
        var tmp = array[left];
        array[left] = array[right];
        array[right] = tmp;
    }
}

// 4.3 A list
function arrayToList(array) {
    var list = null;
    for (var i = array.length - 1; i >=0; i--) {
        list = {value: array[i], rest: list};
    }
    return list;
}

function listToArray(list) {
    var array = [];
    for (var node = list; node; node = node.rest) {
        array.push(node.value);
    }
    return array;
}

function prepend(value, list) {
    return {value: value, rest: list};
}

function nth(list, n) {
    if (list && n > 0) {
        return nth(list.rest, n - 1);
    }
    if (list && n === 0) {
        return list.value;
    }
}

// 4.4 Deep comparison
function isObject(obj) {
    return obj !== null && typeof obj === 'object';
}

function deepEqual(a, b) {
    if (a === b) {
        return true;
    }
    if (!isObject(a) || !isObject(b)) {
        return false;
    }
    // check that `a` properties have a 'deep equal' twin in `b`
    for (var prop in a) {
        if (!deepEqual(a[prop], b[prop])) {
            return false;
        }
    }
    // check that `b` properties also exist in `a`
    for (var prop in b) {
        if (!(prop in a)) {
            return false;
        }
    }
    return true;
}
