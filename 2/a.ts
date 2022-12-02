export const x = "";

const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\n");


//a rock
//b paper
//c scissors

//x rock
//y paper
//z scissors

console.log(
  lines
    .map(line => {
      const [otherPlayer, me] = line.split(" ")

      let playScore = 0;

      if (me == "X") playScore += 1;
      if (me == "Y") playScore += 2;
      if (me == "Z") playScore += 3;

      if (me == "X" && otherPlayer == "A" || me == "Y" && otherPlayer == "B" || me == "Z" && otherPlayer == "C") playScore += 3;
      if (me == "X" && otherPlayer == "C") playScore += 6;
      if (me == "Y" && otherPlayer == "A") playScore += 6;
      if (me == "Z" && otherPlayer == "B") playScore += 6;

      return playScore;
    })
    .reduce((a, b) => a + b, 0)
)