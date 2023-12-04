const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\n");

const cards = {} as { [key: string]: number }

lines.forEach((_, i) => {
  cards[i + 1] = 1;
})

for (let i = 0; i < lines.length; i++) {
  const [card, values] = lines[i].split(": ")

  const [winningNumbers, numbers] = values.split(" | ").map((f) =>
    f.trim().split(" ").filter((f) => f != "")
  )

  const found = numbers.filter((f) => winningNumbers.includes(f))

  for (let j = i + 2; j <= i + found.length + 1; j++) {
    cards[j] += cards[i + 1]
  }
}

console.log(Object.values(cards).reduce((acc, v) => acc + v, 0))