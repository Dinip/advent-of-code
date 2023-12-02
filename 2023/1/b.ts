const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\n");

const numTxt = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]

const getNumbers = (text: string) => {
  return [
    ...numTxt.flatMap(n => [...text.matchAll(new RegExp(n, 'g'))].map(n => ({ index: n.index!, number: numTxt.indexOf(n.at(0)!) + 1 }))),
    ...[...text.matchAll(/\d/g)].map(n => ({ index: n.index!, number: +n.at(0)! }))
  ]
    .filter(f => f.index !== -1)
    .sort((a, b) => a.index - b.index)
}

const sum = lines.reduce((acc, line, i) => {
  const numbers = getNumbers(line)
  const v = Number(numbers.at(0)!.number + "" + numbers.at(-1)!.number)
  return acc + v
}, 0)

console.log(sum)