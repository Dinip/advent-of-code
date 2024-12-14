const input = (await Bun.file("./input.txt").text()).split('').map(Number);

const data = input
  .map((value, index) => index % 2 === 0 ? Array.from({ length: value }).fill((index / 2).toString()) : Array.from({ length: value }).fill('.'))
  .filter(f => !!f.length).flat();

let newData = [...data] as String[];
let index = newData.length - 1;

while (index >= newData.indexOf('.')) {
  if (!isNaN(Number(newData[index]))) {
    const firstIndex = newData.indexOf(newData[index]);
    const len = index - firstIndex + 1;

    for (let j = 0; j <= firstIndex; j++) {
      const slice = newData.slice(j, j + len);

      if (slice.every((item) => item === '.')) {
        const filled = Array.from({ length: len }).fill(newData[index]) as String[];
        const dots = Array.from({ length: len }).fill('.') as String[];

        newData.splice(j, len, ...filled);
        newData.splice(firstIndex, len, ...dots);

        break;
      }
    }

    index -= len;
    continue;
  }

  index -= 1;
}

const checksum = newData.map((value, index) => !isNaN(+value) ? +value * index : 0).reduce((prev, value) => prev + value, 0);
console.log(checksum) // 6436819084274