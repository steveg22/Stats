import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";
import { AverageGoalAnalysis } from "./analysers/AverageGoalAnalysis";
import { WinsAnalysis } from "./analysers/WinsAnalysis";
import { ConsoleReport } from "./reports/ConsoleReport";
import { HTMLReport } from "./reports/HTMLReport";

const csvFileReader = new CsvFileReader("football.csv");

const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const averageGoals = new AverageGoalAnalysis();
const winsAnalysis = new WinsAnalysis("Man United");
const consoleLogger = new ConsoleReport();

const averageGoalSummary = new Summary(averageGoals, consoleLogger);
averageGoalSummary.buildAndPrintReport(matchReader.matches);

const winsSummary = new Summary(winsAnalysis, new HTMLReport());
winsSummary.buildAndPrintReport(matchReader.matches);

