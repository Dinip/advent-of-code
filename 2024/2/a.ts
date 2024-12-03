const input = await Bun.file("./input.txt").text();

const lines = input.split("\n");

const diffs = lines.map(l => l.split(' ').map((value, i, arr) => (i + 1 < arr.length) ? +value - +arr[i + 1] : NaN)).map(m => m.filter(f => !Number.isNaN(f)));

function isSafe(diff: number[]) {
  const isIncreasing = diff.every(d => d > 0);
  const isDecreasing = diff.every(d => d < 0);
  const diffValid = diff.every(d => Math.abs(d) >= 1 && Math.abs(d) <= 3);
  return (isIncreasing || isDecreasing) && diffValid;
}

console.log(diffs.map(isSafe).filter(f => f).length);