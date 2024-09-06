import { MatchData } from "./MatchReader";
import { Analyser } from "./Summary";

export class AverageGoalAnalysis implements Analyser<MatchData> {
  run(data: MatchData[]) {
    let goals = 0;
    for (let match of data) {
      if (match[3] && match[4])
        goals += match[3] + match[4];
    }
    return "Average goals: " + (goals / data.length).toFixed(2);
  }
}
