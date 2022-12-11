export const x = "";

const input = await Deno.readTextFile("./input.txt");
// const input = await Deno.readTextFile("./example.txt");
const lines = input.split("\n")

const files: { [key: string]: number } = {}
const folders = new Set()

let current: string[] = []
for (const line of lines) {
  if (line.startsWith("$")) {
    if (line.startsWith("$ cd ")) {
      const p = line.substring(5)
      if (p === "..") {
        if (current.length > 0) current.pop()
      } else if (p === "/") {
        current = []
      } else {
        current.push(p)
      }
    }
  } else {
    const [size, name] = line.split(" ")
    if (size !== "dir") {
      files[current.join("/") + name] = parseInt(size)
    }
    folders.add(current.join("/"))
  }
}

let sumFoldersUnder100k = 0
const folderSizes: { [key: string]: number } = {}

for (const folder of folders) {
  // console.log(folder)
  let size = 0
  for (const file in files) {
    if (file.startsWith(folder as string)) {
      size += files[file]
    }
  }
  if (size <= 100000) sumFoldersUnder100k += size
  folderSizes[folder as string] = size
}

console.log(folderSizes)
console.log(sumFoldersUnder100k)
