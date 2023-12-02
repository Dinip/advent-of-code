export const x = "";

const input = await Deno.readTextFile("./input.txt");
// const input = await Deno.readTextFile("./example.txt");

const lines = input.split("\n");
const r = lines.map(line => {
  const [first, second] = line.split(",")
  const [firstX, firstY] = first.split("-").map(Number)
  const [secondX, secondY] = second.split("-").map(Number)

  // ¯\_(ツ)_/¯ it works
  if (
    firstX >= secondX && firstX <= secondY ||
    firstY >= secondX && firstY <= secondY ||
    secondX >= firstX && secondX <= firstY ||
    secondY >= firstX && secondY <= firstY
  ) return 1;

  //this works if it only returns 0 but TS (on the reduce function) thinks that I'm returning either 0 or 1 (binary) and not a number
  return 0 + 0;
}).reduce((a, b) => a + b, 0)

console.log(r)