const input = await Bun.file("./input.txt").text();

const lines = input.split("\n");

let sum = 0

// an afterthought, implementing a "cache like" approach, with a simple map
// for the symbol permutations, saved an impressive ~3 seconds 😎
// ❯ time bun run b.ts -> 34612812972206
// bun run b.ts  11.57s user 0.17s system 101% cpu 11.542 total
// ❯ time bun run b.ts -> 34612812972206
// bun run b.ts  8.32s user 0.11s system 100% cpu 8.404 total
const cache: Record<number, String[]> = {}

for (const line of lines) {
  const [result, rawValues] = line.split(': ')
  const values = rawValues.split(' ').map(Number)

  const cacheHit = cache[values.length - 1];
  let operationGroups: String[] = []
  if (cacheHit) {
    operationGroups = cacheHit
  } else {
    operationGroups = generatePermutations(values.length - 1);
    cache[values.length - 1] = operationGroups
  }

  for (const operationGroup of operationGroups) {
    if (calculate(operationGroup.split(''), values) == Number(result)) {
      sum += Number(result)
      break;
    }
  }
}

console.log(sum) // 34612812972206

// `|` is the new concatenation operator, since it makes things easier 😅
function calculate(operations: string[], values: number[]): number {
  if (operations.length == 0) return values[0];
  if (operations[operations.length - 1] == '*') return values[values.length - 1] * calculate(operations.slice(0, -1), values.slice(0, -1));
  if (operations[operations.length - 1] == '+') return values[values.length - 1] + calculate(operations.slice(0, -1), values.slice(0, -1));
  if (operations[operations.length - 1] == '|') return Number(`${calculate(operations.slice(0, -1), values.slice(0, -1))}${values[values.length - 1]}`);
  return 0;
}

function generatePermutations(spaces: number) {
  const result: string[] = [];

  function generate(current: string[]) {
    if (current.length === spaces) {
      result.push(current.join(''));
      return;
    }

    for (const symbol of ['*', '+', '|']) {
      generate([...current, symbol]);
    }
  }

  generate([]);
  return result;
}