const fs = require('fs');
const buffer = fs.readFileSync('data_part1.txt');
const fileContent = buffer.toString();

const numbers = fileContent.split('\n');
const elfs = [];
let elf = 0;

for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] === '') {
		elfs.push(parseInt(elf));
		elf = 0;
	} else {
		elf += parseInt(numbers[i]);
	}
}

// sort the array in descending order
elfs.sort((a, b) => b - a);

console.log(elfs[0]); // 72511
