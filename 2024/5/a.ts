const input = await Bun.file("./input.txt").text();

const [orderRules, pagesToProduce] = input.split("\n\n");
const pagesSplited = pagesToProduce.split('\n');
let totalSum = 0;

for (const page of pagesSplited) {
  const pageSplited = page.split(',');
  if (checkValid(pageSplited)) {
    totalSum += +pageSplited[Math.floor(pageSplited.length / 2)];
  }
}

function checkValid(pageSplited: string[]) {
  let pageValidCount = 0;
  for (let i = 0; i < pageSplited.length - 1; i++) {
    if (orderRules.includes(`${pageSplited[i]}|${pageSplited[i + 1]}`)) pageValidCount++;
  }
  return pageSplited.length - 1 == pageValidCount;
}

console.log(totalSum)