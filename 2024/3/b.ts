const input = await Bun.file("./input.txt").text();

const lines = input.split("\n");

const valueGroups = lines.map(l => l.match(/(mul\((\d{1,3}),(\d{1,3})\)|(do\(\))|(don\'t\(\)))/gi));

let total = 0;
let blocked = false;

for (const value of valueGroups) {
  for (const group of value!) {
    if (group === 'don\'t()') {
      blocked = true
      continue
    }

    if (group === 'do()') {
      blocked = false
      continue
    }

    if (!blocked) {
      const pair = group.match(/\d+/gi);
      const pairMult = +pair![0] * +pair![1]
      total += pairMult
      continue
    }
  }
}
console.log(total)