const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\n");

const colors = { "red": 12, "green": 13, "blue": 14 } as { [key: string]: number }

let sum = 0

for (const l of lines) {
  const [game, values] = l.split(': ')
  const gameId = Number(game.split(' ')[1])
  const sets = values.split("; ")
  let countSets = 0

  setLoop: for (const s of sets) {
    const colorCount = s.split(', ')!
    for (const c of colorCount) {
      const [count, color] = c.split(' ')
      if (Number(count) > colors[color]) break setLoop
    }
    countSets++
  }

  if(sets.length == countSets) sum+= gameId
}

console.log(sum)