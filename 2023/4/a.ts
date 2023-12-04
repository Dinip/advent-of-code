const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\n");

let sum = 0;

lines.forEach((line) => {
  const [card, values] = line.split(": ");
  console.log(card)

  const [winningNumbers, numbers] = values.split(" | ").map((f) =>
    f.trim().split(" ").filter((f) => f != "")
  )

  const found = numbers.filter((f) => winningNumbers.includes(f))
  console.log(found)

  if (found.length == 0) return
  sum += 2 ** (found.length - 1)
})

console.log(sum)