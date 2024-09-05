import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";

const team = "Man United";
let wins = 0;

const csvFileReader = new CsvFileReader("football.csv");

const matchReader = new MatchReader(csvFileReader);
matchReader.load();

for (let record of matchReader.matches) {
  if ((record[1] === team && record[5] === MatchResult.HomeWin) || (record[2] === team && record[5] === MatchResult.AwayWin)) wins++;
}

console.log(team, "has won", wins, "times");
