export const x = "";

const input = await Deno.readTextFile("./input.txt");
// const input = await Deno.readTextFile("./example.txt");

const [state, operations] = input.split("\n\n");
const nOfStacks = state.match(/\d+/g)!.map(Number).sort((a, b) => b - a)[0];
const stateParsed = state.split("\n").slice(0, state.split("\n").length - 1)
const stacks = []

for (let i = 0; i < nOfStacks; i++) {
  const stack = []
  for (let j = 0; j < stateParsed.length; j++) {
    const val = stateParsed[j][4 * i + 1]
    if (val !== " ") stack.unshift(val)
  }
  stacks.push(stack)
}

const operationsParsed = operations.split("\n")
for (let i = 0; i < operationsParsed.length; i++) {
  const [amount, from, to] = operationsParsed[i].match(/\d+/g)!.map(Number)
  stacks[to - 1].push(...stacks[from - 1].splice(-amount))
}

console.log(stacks.map(s=>s.pop()).join(""))