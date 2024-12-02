const input = await Bun.file("./input.txt").text();

const lines = input.split("\n");

console.log(lines)