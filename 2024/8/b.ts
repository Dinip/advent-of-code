const input = await Bun.file("./input.txt").text();

const lines = input.split("\n");

type Point = { x: number; y: number };
type Antinode = { coords: Point; diff: Point; }
type InputItem = { [key: string]: Point };

const uniqueAntinodes = new Set<String>();

const coords: InputItem[] = input
  .replaceAll('\n', '')
  .split('')
  .map((value, index) => !['.', '#'].includes(value) ? { [value]: to2DCoords(index, lines.length) } : null)
  .filter(f => f != null)

const foldedMap = coords.reduce((map, item) => {
  const [key, value] = Object.entries(item)[0];
  if (!map.has(key)) map.set(key, []);
  map.get(key)!.push(value);
  return map;
}, new Map<string, Point[]>());

for (const entry of foldedMap.entries()) {
  const antenas = entry[1].values().toArray();
  for (const antenaPos of antenas) {
    const anti = antenas
      .filter(f => f != antenaPos)
      .map(value => ({ coords: sum2DCoords(antenaPos, diff2DCords(antenaPos, value)), diff: diff2DCords(antenaPos, value) }))
      .filter(c => c.coords.x >= 0 && c.coords.x < lines.length && c.coords.y >= 0 && c.coords.y < lines.length)

    anti.forEach(f => uniqueAntinodes.add(`${f.coords.x},${f.coords.y}`));
    anti.map(getNextAntinodesOfAntinode).flatMap(f => f).forEach(f => uniqueAntinodes.add(`${f.coords.x},${f.coords.y}`))
    uniqueAntinodes.add(`${antenaPos.x},${antenaPos.y}`)
  }
}

function getNextAntinodesOfAntinode(antinode: Antinode): Antinode[] {
  const nextAntinode = sum2DCoords(antinode.coords, antinode.diff)
  if (nextAntinode.x >= 0 && nextAntinode.x < lines.length && nextAntinode.y >= 0 && nextAntinode.y < lines.length) {
    return [{ coords: nextAntinode, diff: antinode.diff }, ...getNextAntinodesOfAntinode({ coords: nextAntinode, diff: antinode.diff })]
  }
  return []
}

console.log(uniqueAntinodes.size) // 839


function to2DCoords(index: number, width: number) {
  return { x: index % width, y: Math.floor(index / width) } as Point;
}

function diff2DCords(point1: Point, point2: Point) {
  return { x: point1.x - point2.x, y: point1.y - point2.y } as Point;
}

function sum2DCoords(point1: Point, point2: Point) {
  return { x: point1.x + point2.x, y: point1.y + point2.y } as Point;
}