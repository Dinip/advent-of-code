const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\n");

const sum = lines.reduce((acc, line) => acc + Number(line.match(/\d/g)![0] + line.match(/\d/g)!.pop()), 0)

console.log(sum)