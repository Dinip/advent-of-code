const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\n");

const time = Number(lines[0].split(" ").map(Number).filter(Boolean).join(""))
const distance = Number(lines[1].split(" ").map(Number).filter(Boolean).join(""))

let output = 1

const values: number[] = []
for (let i = 14; i <= time; i++) {
  //i = pressTime
  //time - i = travelTime
  values[i] = (time - i) * i
}
output *= values.filter(f => f > distance).length

console.log(output)