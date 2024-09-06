export interface Analyser<T> {
  run(data: T[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary<T> {
  constructor(public analyser: Analyser<T>, public outputTarget: OutputTarget) { }

  buildAndPrintReport(data: T[]) {
    const output = this.analyser.run(data);
    this.outputTarget.print(output);
  }
}
