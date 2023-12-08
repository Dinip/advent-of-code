// NOT DONE :(

const input = await Deno.readTextFile("./input.txt");

const [seeds, ...values] = input.split("\n\n").map((f) =>
  f.split("\n").flatMap((f) => f.split(" ")).filter((f) => !isNaN(Number(f)))
    .map(Number)
);

const findValue = (input: number, values: number[]) => {
  for (let i = 0; i < values.length - 1; i += 3) {
    if (input >= values[i + 1] && input <= values[i + 1] + values[i + 2] - 1) {
      return values[i] + Math.abs(values[i + 1] - input);
    }
  }
  return input;
};