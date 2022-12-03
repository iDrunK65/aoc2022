const fs = require('fs');
const buffer = fs.readFileSync('data_part1.txt');
const fileContent = buffer.toString();
const lines = fileContent.split('\n');

const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

const badges = [];
let score = 0;
for (let i = 0; i < lines.length; i += 3) {
	const element1 = lines[i];
	const element2 = lines[i + 1];
	const element3 = lines[i + 2];
	for (let j = 0; j < element1.length; j++) {
		const element = element1[j];
		const regex = new RegExp(element);
		const firstMatch = element2.match(regex);
		const secondMatch = element3.match(regex);
		if (firstMatch !== null && secondMatch !== null) {
			badges.push(element);
			j = element1.length;
		}
	}
}
for (let i = 0; i < badges.length; i++) {
	const element = badges[i];
	const matchedValue = alphabet.indexOf(element);
	score += matchedValue + 1;
}
console.log(score);