const input = await Bun.file("./input.txt").text();

const lines = input.split("\n");
const XMAS = 'XMAS';
const XMAS_LEN = XMAS.length;

let count = 0;

function findVertical() {
  for (let i = 0; i <= lines.length - XMAS_LEN; i++) {
    for (let j = 0; j <= lines[i].length; j++) {
      const word = [lines[i][j], lines[i + 1][j], lines[i + 2][j], lines[i + 3][j]]
      if (word.join('') == XMAS || word.reverse().join('') == XMAS) count++;
    }
  }
}


function findHorizontal() {
  for (let i = 0; i < lines.length; i++) {
    for (let j = 0; j <= lines[i].length - XMAS_LEN; j++) {
      const word = [lines[i][j], lines[i][j + 1], lines[i][j + 2], lines[i][j + 3]]
      if (word.join('') == XMAS || word.reverse().join('') == XMAS) count++;
    }
  }
}

function findDiagonalLeftToRight() {
  for (let i = 0; i <= lines.length - XMAS_LEN; i++) {
    for (let j = 0; j <= lines[i].length - XMAS_LEN; j++) {
      const word = [lines[i][j], lines[i + 1][j + 1], lines[i + 2][j + 2], lines[i + 3][j + 3]]
      if (word.join('') == XMAS || word.reverse().join('') == XMAS) count++;
    }
  }
}

function findDiagonalRightToLeft() {
  for (let i = 0; i <= lines.length - XMAS_LEN; i++) {
    for (let j = lines[i].length; j >= XMAS_LEN - 1; j--) {
      const word = [lines[i][j], lines[i + 1][j - 1], lines[i + 2][j - 2], lines[i + 3][j - 3]]
      if (word.join('') == XMAS || word.reverse().join('') == XMAS) count++;
    }
  }
}

findVertical()
findHorizontal()
findDiagonalLeftToRight()
findDiagonalRightToLeft()

console.log(count)