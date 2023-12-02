export const x = "";

const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\n");

let counter = 0;
let highest = 0;

for (const line of lines) {
  if (line != "") {
    counter += +line;
  } else {
    if (counter > highest) {
      highest = counter;
    }
    counter = 0;
  }
}

console.log(highest)