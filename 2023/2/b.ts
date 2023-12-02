const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\n");

let sum = 0

for (const l of lines) {
  const [_, values] = l.split(': ')
  const sets = values.split("; ")

  const colorValues = { "red": 0, "green": 0, "blue": 0 } as { [key: string]: number }

  for (const s of sets) {
    const colorCount = s.split(', ')!
    for (const c of colorCount) {
      const [count, color] = c.split(' ')
      if (Number(count) > colorValues[color]) {
        colorValues[color] = Number(count)
      }
    }
  }

  //power
  sum += Object.values(colorValues).reduce((acc, v) => (acc * v), 1)
}

console.log(sum)