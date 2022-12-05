const fs = require('fs');
const buffer = fs.readFileSync('data_part1.txt');
const fileContent = buffer.toString();
const lines = fileContent.split('\n');

function testIsOverlapping(pair) {
	const [smallerMinRange, largerMinRange] = pair.sort(
		(a, b) => a.min - b.min
	);
	if (smallerMinRange.max >= largerMinRange.min) return true;
};


const pairs = lines.map(pair => {
	const sections = pair.split(",");

	const leftRange = sections[0].split("-");
	const rightRange = sections[1].split("-");
	const leftMin = parseInt(leftRange[0]);
	const leftMax = parseInt(leftRange[1]);

	const rigthMin = parseInt(rightRange[0]);
	const rigthMax = parseInt(rightRange[1]);
	return [
		{
			min: leftMin,
			max: leftMax,
			range: Math.abs(leftMin - leftMax),
		},
		{
			min: rigthMin,
			max: rigthMax,
			range: Math.abs(rigthMin - rigthMax),
		},
	];
});

let isOverlappingCounter = 0;
for (const pair of pairs)
	if (testIsOverlapping(pair)) ++isOverlappingCounter;
console.log(isOverlappingCounter);