const input = await Bun.file("./input.txt").text();

const lines = input.split("\n");

const multiplications = lines.map(l => l.match(/mul\((\d{1,3}),(\d{1,3})\)/gi)!.map(g => g.match(/\d+/gi)).flatMap(f => +f![0] * +f![1]));

console.log(multiplications.map(f => f.reduce((prev, current) => prev + current, 0)).reduce((prev, current) => prev + current, 0))