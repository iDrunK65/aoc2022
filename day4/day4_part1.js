const fs = require('fs');
const buffer = fs.readFileSync('data_part1.txt');
const fileContent = buffer.toString();
const lines = fileContent.split('\n');

function isEngulfed(smallRange, largeRange) {
	const isSmallRangeMinGreater = smallRange.min >= largeRange.min;
	const isSmallRangeMaxLesser = smallRange.max <= largeRange.max;
	return isSmallRangeMinGreater && isSmallRangeMaxLesser;
};

function testIsOverlapping(pair) {
	const [smallerMinRange, largerMinRange] = pair.sort(
		(a, b) => a.min - b.min
	);
	if (smallerMinRange.max >= largerMinRange.min) return true;
};


function testIsEngulfing(pair) {
	const { smallRange, largeRange } = [pair[1]].reduce(
		(leftRange, rightRange) => {
			if (leftRange.range < rightRange.range) {
				return {
					smallRange: leftRange,
					largeRange: rightRange,
				};
			} else {
				return {
					smallRange: rightRange,
					largeRange: leftRange,
				};
			}
		},
		pair[0]
	);
	return isEngulfed(smallRange, largeRange);
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

let isEngulfingCounter = 0;
for (const pair of pairs) if (testIsEngulfing(pair)) ++isEngulfingCounter;
console.log(isEngulfingCounter);
