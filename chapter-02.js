// 2.1 Looping a triangle
for (var line = '#'; line.length <= 7; line += '#') {
  console.log(line);
}

// 2.2 FizzBuzz
for (var i = 1; i <= 100; i++) {
	var result = '';
	if (i % 3 === 0) {
		result += 'Fizz';
	}
	if (i % 5 === 0) {
		result += 'Buzz';
	}
	result = result || i;

	console.log(result);
}

// 2.3 Chess board
var size = 8;
var board = '';

var black = '\u2593';
var white = '\u2591';
for (var row = 0; row < size; row++) {
	for (var col = 0; col < size; col++) {
		// even row and odd column OR odd row and even column (i.e. i+j is odd) means 'black'
		board += (row + col) % 2 !== 0 ? black : white;
	}
	board += '\n';
}
console.log(board);
