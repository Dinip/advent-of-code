const input = (await Bun.file("./input.txt").text()).split('').map(Number);

const data = input
  .map((value, index) => index % 2 === 0 ? Array.from({ length: value }).fill((index / 2).toString()) : Array.from({ length: value }).fill('.'))
  .filter(f => !!f.length)
  .flat() as String[];

let lastIndex = data.length - 1;
let newData: Number[] = [];

for (let i = 0; i < data.length; i++) {
  if (i >= lastIndex) {
    break;
  }
  if (data[i] == '.') {
    while (data[lastIndex] == '.') {
      lastIndex--;
    }
    if (i >= lastIndex) {
      break;
    }
    newData.push(+data[lastIndex]);
    lastIndex--;
    continue;
  }
  newData.push(+data[i]);
}

const checksum = newData.map((value, index) => +value * index).reduce((prev, value) => prev + value, 0);

console.log(checksum) // 6415184586041