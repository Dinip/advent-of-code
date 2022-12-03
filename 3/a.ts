export const x = "";

const input = await Deno.readTextFile("./input.txt");
// const input = await Deno.readTextFile("./example.txt");

const lines = input.split("\n");

console.log(
  lines.map((line) => {
    const half1 = line.substring(0, line.length / 2).split("");
    const half2 = line.substring(line.length / 2).split("");

    const equalChar = half1.find((char) => half2.find(char2 => char2 === char))!;
    //a = 1
    //z = 26
    //A = 27
    //Z = 52
    const value = equalChar.charCodeAt(0);
    const isUpperCase = value >= 65 && value <= 90;
    return isUpperCase ? value - 64 + 26 : value - 96;
  }).reduce((a, b) => a + b, 0)
);