import fs from 'fs';
import { OutputTarget } from "../Summary";

export class HTMLReport implements OutputTarget {
  print(report: string): void {
    const html = `<!DOCTYPE html>
                      <html>
                        <head>
                          <title>Report</title>
                        </head>

                        <body>
                          <h1>Report</h1>
                          <p>${report}</p>
                        </body>

                      </html> `;

    fs.writeFileSync("index.html", html);
  }
}
