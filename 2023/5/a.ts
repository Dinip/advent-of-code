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


const allSeedData = seeds.map((seed) => {
  const soil = findValue(seed, values[0]);
  const fertilizer = findValue(soil, values[1]);
  const water = findValue(fertilizer, values[2]);
  const light = findValue(water, values[3]);
  const temperature = findValue(light, values[4]);
  const humidity = findValue(temperature, values[5]);
  const location = findValue(humidity, values[6]);

  return {
    seed,
    soil,
    fertilizer,
    water,
    light,
    temperature,
    humidity,
    location,
  };
});

console.log(allSeedData.toSorted((a,b)=>a.location -b.location)[0].location)