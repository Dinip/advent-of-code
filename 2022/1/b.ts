export const x = "";

const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\n");

let counter = 0;
const topThree = [0, 0, 0];

for (const line of lines) {
  if (line != "") {
    counter += +line;
  } else {
    if (counter > topThree[0]) {
      topThree[0] = counter;
      topThree.sort((a, b) => a - b);
    }
    counter = 0;
  }
}

console.log(topThree.reduce((a, b) => a + b))