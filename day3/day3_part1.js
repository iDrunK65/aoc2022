const fs = require('fs');
const buffer = fs.readFileSync('data_part1.txt');
const fileContent = buffer.toString();
const lines = fileContent.split('\n');


// each line is a string, we split it into 2 parts same length

const charMatch = [];

for (let i = 0; i < lines.length; i++) {
	const line = lines[i];
	const firstHalf = line.slice(0, line.length / 2);
	const secondHalf = line.slice(line.length / 2);


	const lineArray = secondHalf.split("");
	for (let j = 0; j < lineArray.length; j++) {
		const char = lineArray[j];
		if (firstHalf.includes(char)) {
			charMatch.push(char);
			break;
		}
	}
}

// convert letters to numbers

const charMatchNumbers = charMatch.map(char => {
	const charCode = char.charCodeAt(0);
	if (charCode >= 65 && charCode <= 90) {
		return charCode - 38;
	} else {
		return charCode - 96;
	}
});


const sum = charMatchNumbers.reduce((acc, curr) => acc + curr, 0);

console.log(sum);

