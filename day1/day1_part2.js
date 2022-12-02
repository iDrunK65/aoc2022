const fs = require('fs');
const buffer = fs.readFileSync('data_part1.txt');
const fileContent = buffer.toString();

const numbers = fileContent.split('\n');
const totalCaloriesPerElf = [];
let elf = 0;

for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] === '') {
		totalCaloriesPerElf.push(parseInt(elf));
		elf = 0;
	} else {
		elf += parseInt(numbers[i]);
	}
}

let first;
let second;
let third;

for (let i = 0; i < totalCaloriesPerElf.length; i++) {
	if (i == 0) {
		first = totalCaloriesPerElf[i];
	}
	if (totalCaloriesPerElf[i] > first) {
		third = second;
		second = first;
		first = totalCaloriesPerElf[i];
	} else if (totalCaloriesPerElf[i] > second) {
		third = second;
		second = totalCaloriesPerElf[i];
	} else if (totalCaloriesPerElf[i] > third) {
		third = totalCaloriesPerElf[i];
	}
}


console.log(first, second, third);
console.log(first + second + third);