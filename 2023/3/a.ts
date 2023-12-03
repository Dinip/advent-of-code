const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\n");

const matchChar = /[^\w\d\.\s]/g

let sum = 0

lines.forEach((line, i) => {
  const prev = i == 0 ? [] : [...lines[i - 1].matchAll(matchChar)].map(l => l.index!)
  const next = i == lines.length - 1 ? [] : [...lines[i + 1].matchAll(matchChar)].map(l => l.index!)
  const idxs = [...new Set([...prev, ...next])]
  console.log(line)

  const numbers = [...line.matchAll(/\d+/g)]
  numbers.forEach(number => {
    const searchIdx = Array.from({ length: number[0].length + 2 }, (_, i) => i - 1 + number.index!)
    const validIdx = searchIdx.some(s => idxs.includes(s))
    
    //another option was to use matchChar.test(line[number.index! - 1]) but for some reason
    //it was falling on same cases ¯\_(ツ)_/¯
    const leftChar = ((number.index! - 1) < 0) ? false : !!(line[number.index! - 1].match(matchChar))
    const rightChar = (number.index! + number[0].length) > line.length - 1 ? false : !!(line[number.index! + number[0].length].match(matchChar))

    console.log("l", leftChar, "r", rightChar, searchIdx, "idx", validIdx, number[0])
    if (leftChar || rightChar || validIdx) sum += Number(number[0])
  })
})

console.log(sum)