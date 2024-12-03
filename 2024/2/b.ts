const input = await Bun.file("./input.txt").text();

const lines = input.split("\n");

const diffs = lines.map(l => l.split(' ').map((value, i, arr) => (i + 1 < arr.length) ? +value - +arr[i + 1] : NaN)).map(m => m.filter(f => !Number.isNaN(f)));

function isSafe(diff: number[]) {
  const isIncreasing = diff.every(d => d > 0);
  const isDecreasing = diff.every(d => d < 0);
  const diffValid = diff.every(d => Math.abs(d) >= 1 && Math.abs(d) <= 3);
  return (isIncreasing || isDecreasing) && diffValid;
}

let safe = 0;

for (const diff of diffs) {
  if (isSafe(diff)) {
    safe++
    continue
  }

  let singleBadLevelSafe = false;
  for (let i = 0; i < diff.length + 1; i++) {
    const originalLevels = lines[diffs.indexOf(diff)].split(' ').map(Number);
    const dampenedLevels = [...originalLevels.slice(0, i), ...originalLevels.slice(i + 1)];

    const dampenedDiff = dampenedLevels.slice(0, -1).map((value, j) =>
      dampenedLevels[j] - dampenedLevels[j + 1]
    );

    if (isSafe(dampenedDiff)) {
      singleBadLevelSafe = true;
      break;
    }
  }

  if (singleBadLevelSafe) {
    safe++;
  }
}

console.log(safe);