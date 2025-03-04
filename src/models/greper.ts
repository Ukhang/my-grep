import readlineSync from 'readline-sync';
import { PatternMatcher } from './pattern-matcher';
import { FileReader } from './fileReader';

export class Greper {
  static grepFile(filePath: string, pattern: string) {
    const fileContent = FileReader.readFile(filePath);
    if (!fileContent) return;

    const lines = fileContent.split('\n');

    lines.forEach((line, index) => {
      if (new RegExp(pattern).test(line)) {
        console.log(`Line ${index + 1}: ${line}`);
      }
    });
  }

  static run() {
    const filePath = readlineSync.question('Enter the file path: ');
    const pattern = readlineSync.question('Enter the pattern: ');

    this.grepFile(filePath, pattern);
  }
}