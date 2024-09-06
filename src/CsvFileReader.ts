import fs from 'fs';
import { DataReader } from './DataReader';

export class CsvFileReader implements DataReader {
  data: string[][] = [];

  constructor(public filename: string) { }

  read(): void {
    this.data = fs.readFileSync(this.filename, {
      encoding: "utf-8"
    })
      .split("\n")
      .filter(Boolean)
      .map((record: string): string[] => record.split(","))
  }
}
