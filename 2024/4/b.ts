const input = await Bun.file("./input.txt").text();

const lines = input.split("\n");
const XMAS = 'MAS';
const XMAS_LEN = XMAS.length;

let count = 0;
let coordsOfA: string[] = [];

function findDiagonalLeftToRight() {
  for (let i = 0; i <= lines.length - XMAS_LEN; i++) {
    for (let j = 0; j <= lines[i].length - XMAS_LEN; j++) {
      const word = [lines[i][j], lines[i + 1][j + 1], lines[i + 2][j + 2]]
      if (word.join('') == XMAS || word.reverse().join('') == XMAS) {
        coordsOfA.push(`${i + 1},${j + 1}`)
      }
    }
  }
}

function findDiagonalRightToLeft() {
  for (let i = 0; i <= lines.length - XMAS_LEN; i++) {
    for (let j = lines[i].length; j >= XMAS_LEN - 1; j--) {
      const word = [lines[i][j], lines[i + 1][j - 1], lines[i + 2][j - 2]]
      if ((word.join('') == XMAS || word.reverse().join('') == XMAS) && coordsOfA.includes(`${i + 1},${j - 1}`)) {
        count++;
      }
    }
  }
}

findDiagonalLeftToRight()
findDiagonalRightToLeft()

console.log(count)