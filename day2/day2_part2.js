const fs = require('fs');
const buffer = fs.readFileSync('data_part2.txt');
const fileContent = buffer.toString();
const lines = fileContent.split('\n');

/*
opponent :
A = Rock
B = Paper
C = Scissors

Me :
X = Lose
Y = Draw
Z = Win


Gains :
1 for Rock
2 for Paper
3 for Scissors
0 for loss
3 for draw
6 for win
 */

const scores = [];

for (let i = 0; i < lines.length; i++) {
	const line = lines[i];
	const data = line.split(' ');
	const opponent = data[0];
	const me = data[1];

	if (opponent === 'A' && me === 'X') {
		scores.push(0 + 3);
	} else if (opponent === 'A' && me === 'Y') {
		scores.push(3 + 1);
	} else if (opponent === 'A' && me === 'Z') {
		scores.push(6 + 2);
	} else if (opponent === 'B' && me === 'X') {
		scores.push(0 + 1);
	} else if (opponent === 'B' && me === 'Y') {
		scores.push(3 + 2);
	} else if (opponent === 'B' && me === 'Z') {
		scores.push(6 + 3);
	} else if (opponent === 'C' && me === 'X') {
		scores.push(0 + 2);
	} else if (opponent === 'C' && me === 'Y') {
		scores.push(3 + 3);
	}  else if (opponent === 'C' && me === 'Z') {
		scores.push(6 + 1);
	}
}

console.log(scores.reduce((partialSum, a) => partialSum + a, 0));

