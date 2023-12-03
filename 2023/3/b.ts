const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\n");

const matchChar = /\*/g
const matchDigit = /\d+/g

let sum = 0

lines.forEach((line, i) => {
  const charsInLine = [...line.matchAll(matchChar)]

  charsInLine.forEach(char => {
    const top = i == 0 ? [] : [...lines[i - 1].matchAll(matchDigit)].filter(f => Array.from({ length: f[0].length + 2 }, (_, i) => i - 1 + f.index!).includes(char.index!)).map(m => m[0])
    const bottom = i == lines.length - 1 ? [] : [...lines[i + 1].matchAll(matchDigit)].filter(f => Array.from({ length: f[0].length + 2 }, (_, i) => i - 1 + f.index!).includes(char.index!)).map(m => m[0])

    const left = ((char.index! - 1) < 0) ? [] : [[...line.substring(0, char.index).matchAll(/\d+/g)].find(m => m.index! + m[0].length == char.index!)?.[0]]
    const right = ((char.index! + 1) > line.length - 1) ? [] : [[...line.substring(char.index! + 1).matchAll(/\d+/g)].find(m => m.index! == 0)?.[0]]

    const all = [...top, ...bottom, ...left, ...right].filter(f => f != undefined)

    if (all.length != 2) return
    sum += all.reduce((acc, v) => acc * Number(v), 1)
  })
})

console.log(sum)