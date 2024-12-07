const input = await Bun.file("./input.txt").text();

const lines = input.split("\n");

let sum = 0

for (const line of lines) {
  const [result, rawValues] = line.split(': ')
  const values = rawValues.split(' ').map(Number)
  const operationGroups = generatePermutations(values.length - 1);

  for (const operationGroup of operationGroups) {
    if (calculate(operationGroup.split(''), values) == Number(result)) {
      sum += Number(result)
      break;
    }
  }
}

console.log(sum) // 538191549061

function calculate(operations: string[], values: number[]): number {
  if (operations.length == 0) return values[0];
  if (operations[operations.length - 1] == '*') return values[values.length - 1] * calculate(operations.slice(0, -1), values.slice(0, -1));
  if (operations[operations.length - 1] == '+') return values[values.length - 1] + calculate(operations.slice(0, -1), values.slice(0, -1));
  return 0;
}

function generatePermutations(spaces: number) {
  const result: string[] = [];

  function generate(current: string[]) {
    if (current.length === spaces) {
      result.push(current.join(''));
      return;
    }

    for (const symbol of ['*', '+']) {
      generate([...current, symbol]);
    }
  }

  generate([]);
  return result;
}