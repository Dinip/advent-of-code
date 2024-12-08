const input = await Bun.file("./input.txt").text();

const lines = input.split("\n");

type Point = { x: number; y: number };
type InputItem = { [key: string]: Point };

const uniqueAntinodes = new Set<String>();

const coords: InputItem[] = input
  .replaceAll('\n', '')
  .split('')
  .map((value, index) => value != '.' ? { [value]: to2DCoords(index, lines.length) } : null)
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
    antenas
      .filter(f => f != antenaPos)
      .map(value => sum2DCoords(antenaPos, diff2DCords(antenaPos, value)))
      .filter(c => c.x >= 0 && c.x < lines.length && c.y >= 0 && c.y < lines.length)
      .map(c => `${c.x},${c.y}`)
      .forEach(c => uniqueAntinodes.add(c));
  }
}

console.log(uniqueAntinodes.size) // 252


function to2DCoords(index: number, width: number) {
  return { x: index % width, y: Math.floor(index / width) } as Point;
}

function diff2DCords(point1: Point, point2: Point) {
  return { x: point1.x - point2.x, y: point1.y - point2.y } as Point;
}

function sum2DCoords(point1: Point, point2: Point) {
  return { x: point1.x + point2.x, y: point1.y + point2.y } as Point;
}