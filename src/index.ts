import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";

const reader = new MatchReader("football.csv");
reader.read();


const team = "Man United";
let wins = 0;

for (let record of reader.data) {
  if ((record[1] === team && record[5] === MatchResult.HomeWin) || (record[2] === team && record[5] === MatchResult.AwayWin)) wins++;
}

console.log(reader.data[0]);
console.log(team, "has won", wins, "times");
