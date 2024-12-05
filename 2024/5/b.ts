const input = await Bun.file("./input.txt").text();

const [orderRules, pagesToProduce] = input.split("\n\n");
const pagesSplited = pagesToProduce.split('\n');
let totalSum = 0;


for (const page of pagesSplited) {
  const pageSplited = page.split(',');
  if (checkValid(pageSplited)) continue;

  const valid = kindaBubbleSort(pageSplited)
  totalSum += +valid[Math.floor(valid.length / 2)];
}

function kindaBubbleSort(arr: string[]): string[] {
  let swapped: boolean;

  for (let i = 0; i < arr.length - 1; i++) {
    swapped = false;

    for (let j = 0; j < arr.length - i - 1; j++) {
      if (!orderRules.includes(`${arr[j]}|${arr[j + 1]}`)) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    if (!swapped) break;
  }

  return arr;
}

function checkValid(pageSplited: string[]) {
  let pageValidCount = 0;
  for (let i = 0; i < pageSplited.length - 1; i++) {
    if (orderRules.includes(`${pageSplited[i]}|${pageSplited[i + 1]}`)) pageValidCount++;
  }
  return pageSplited.length - 1 == pageValidCount;
}

console.log(totalSum)