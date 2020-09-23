// Slower Solution - O(n)

const addUpToSlower = (num) => {
	let total = 0;
	for (let i = 1; i <= num; i++) {
		total += i;
	}
	return total;
};

console.log(addUpToSlower(3));

// Faster Solution - O(1)
const addUpToFaster = (num) => {
	return num * (num + 1) / 2;
};

console.log(addUpToFaster(3));
