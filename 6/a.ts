export const x = "";

const input = await Deno.readTextFile("./input.txt");
// const input = await Deno.readTextFile("./example.txt");

for(let i = 0; i < input.length; i++) {
  const val = input.slice(i, i+4).split("");
  const s = new Set(val);
  console.log(val, s)
  if(val.length === s.size) {
    console.log("result: ", i+4);
    break;
  }
}