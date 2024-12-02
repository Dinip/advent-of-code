const input = await Bun.file("./input.txt").text();

const lines = input.split("\n");

const firstN = lines.map(l => +l.split('   ')[0]).sort((a, b) => a - b);
const lastN = lines.map(l => +l.split('   ')[1]).sort((a, b) => a - b);

const sum = firstN.map((value, i) => Math.abs(value - lastN[i])).reduce((prev, value) => prev + value, 0)

console.log(sum)