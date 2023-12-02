export const x = "";

const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\n");

//a rock
//b paper
//c scissors

//x rock
//y paper
//z scissors

//new
//x lose
//y draw
//z win

const vals = ["A", "B", "C"];

console.log(
  lines
    .map(line => {
      const [otherPlayer, status] = line.split(" ")
      let playScore = 0;

      if (status == "X") {
        //prev index roll + 1
        playScore = (vals.indexOf(otherPlayer) - 1) % 3 + 1;
      }

      if (status == "Y") {
        //same index + 1
        playScore = 3 + vals.indexOf(otherPlayer) + 1;
      }

      if (status == "Z") {
        //next index roll + 1
        playScore = 6 + (vals.indexOf(otherPlayer) + 1) % 3 + 1;
      }

      //JAVASCRIPT IS DRUNK
      //when evaluating the modulo of a negative number, it returns a negative number!!!!!!!!
      //WHYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY?!
      if (playScore == 0) playScore = 3

      return playScore;
    })
    .reduce((a, b) => a + b, 0)
)