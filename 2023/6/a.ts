const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\n");
const times = lines[0].split(" ").map(Number).filter(Boolean)
const distances = lines[1].split(" ").map(Number).filter(Boolean)

let output = 1

times.forEach((time, timeIdx) => {
  const values: number[] = []
  for (let i = 0; i <= time; i++) {
    //i = pressTime
    //time - i = travelTime
    values[i] = (time - i) * i
  }
  output *= values.filter(f => f > distances[timeIdx]).length
})

console.log(output)