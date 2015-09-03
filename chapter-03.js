// 3.1 Minimum
function min(a, b) {
    return a < b ? a : b;
}

console.log(min(0, 10));
console.log(min(0, -10));

// 3.2 Recursion
function isEven(n) {
    if (n === 0) {
        return true;
    }
    if (n === 1) {
        return false;
    }
    if (n < 0) {
        return isEven(-n);
    }
    return isEven(n - 2);
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

// 3.3 Bean counting
function countBs(str) {
    return countChar(str, 'B');
}

function countChar(str, char) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) === char) {
            count++;
        }
    }
    return count;
}

console.log(countBs('BBC'));
console.log(countChar('kakkerlak', 'k'));
