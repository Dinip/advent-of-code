const input = await Bun.file("./input.txt").text();

const lines = input.split("\n");

const ORIENTATION = {
  LEFT: '<',
  UP: '^',
  RIGHT: '>',
  DOWN: 'v',
} as const;

const BLOCK = '#';

const initialPos = input.replaceAll('\n', '').indexOf(ORIENTATION.UP);
const initialPosCoords = to2DCoords(initialPos, lines.length);

type Position = { x: number, y: number }
type State = { finished: boolean, position: Position, orientation: string }

function to2DCoords(index: number, width: number) {
  return { x: index % width, y: Math.floor(index / width) };
}

function from2DCoords(x: number, y: number, width: number): number {
  return y * width + x;
}

function move(position: Position, orientation: string) {
  switch (orientation) {
    case ORIENTATION.UP:
      return { x: position.x, y: position.y - 1 };
    case ORIENTATION.RIGHT:
      return { x: position.x + 1, y: position.y };
    case ORIENTATION.DOWN:
      return { x: position.x, y: position.y + 1 };
    case ORIENTATION.LEFT:
      return { x: position.x - 1, y: position.y };
  }
  return { x: 0, y: 0 };
}

function nextRotation(orientation: string) {
  switch (orientation) {
    case ORIENTATION.UP:
      return ORIENTATION.RIGHT;
    case ORIENTATION.RIGHT:
      return ORIENTATION.DOWN;
    case ORIENTATION.DOWN:
      return ORIENTATION.LEFT;
    case ORIENTATION.LEFT:
      return ORIENTATION.UP;
  }
  return ORIENTATION.UP;
}

function isBlocked(lines: string[], position: Position) {
  return lines[position.y]?.[position.x] === BLOCK;
}

let possibleCount = 0;

for (let i = 0; i < lines.length; i++) {
  for (let j = 0; j < lines[i].length; j++) {
    if ([BLOCK, ORIENTATION.UP].includes(lines[i][j])) continue;
    const visited = new Set<string>();
    console.log({ row: i, col: j })

    let updatedLines = [...lines]
    let updateLine = updatedLines[i].split('')
    updateLine[j] = BLOCK
    updatedLines[i] = updateLine.join('')


    let state: State = {
      finished: false,
      position: initialPosCoords,
      orientation: ORIENTATION.UP,
    }

    while (!state.finished) {
      const posKey = `${state.position.x},${state.position.y},${state.orientation}`;

      const nextPosition = move(state.position, state.orientation);
      if (isBlocked(updatedLines, nextPosition)) {
        state.orientation = nextRotation(state.orientation);
      } else {
        state.position = nextPosition;
      }

      state.finished = (
        state.position.x < 0 ||
        state.position.x >= updatedLines[0].length ||
        state.position.y < 0 ||
        state.position.y >= updatedLines.length
      );

      if (visited.has(posKey)) {
        possibleCount++
        break;
      };

      visited.add(posKey);
    }
  }
}

console.log(possibleCount); // 1753