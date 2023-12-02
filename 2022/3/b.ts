export const x = "";

const input = await Deno.readTextFile("./input.txt");
// const input = await Deno.readTextFile("./example.txt");

const lines = input.split("\n");
let total = 0

for (let i = 0; i < lines.length; i += 3) {

  const line1 = lines[i].split("");
  const line2 = lines[i + 1].split("");
  const line3 = lines[i + 2].split("");

  console.log(lines[i], lines[i + 1], lines[i + 2]);

  const equalChar1 = line1.filter((char) => line2.find(char2 => char2 === char))!;
  const equalChar2 = line2.filter((char) => line3.find(char2 => char2 === char))!;

  const equalChar3 = equalChar1.find((char) => equalChar2.find(char2 => char2 === char))!;

  console.log(equalChar3)

  const value = equalChar3.charCodeAt(0);
  const isUpperCase = value >= 65 && value <= 90;
  total += isUpperCase ? value - 64 + 26 : value - 96;
}
console.log(total)