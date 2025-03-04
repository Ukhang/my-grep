import readlineSync from 'readline-sync';
import { FileReader } from './fileReader';
import { PatternMatcher } from './pattern-matcher';

export class Greper {
  static grepFile(filePath: string, pattern: string) {
    const fileContent = FileReader.readFile(filePath);
    if (!fileContent) return;

    const lines = fileContent.split('\n');

    lines.forEach((line, index) => {
      if (this.matchLine(line, pattern)) {
        console.log(`Line ${index + 1}: ${line}`);
      }
    });
  }

  static matchLine(line: string, pattern: string): boolean {
    // Check if the pattern is for any of the predefined matches
    if (pattern === 'digits') {
      return PatternMatcher.matchDigits(line);
    } else if (pattern === 'alphanumeric') {
      return PatternMatcher.matchAlphanumeric(line);
    } else if (pattern.startsWith('positiveGroup:')) {
      const regexPattern = pattern.split(':')[1];
      return PatternMatcher.matchPositiveGroup(line, regexPattern);
    } else if (pattern.startsWith('negativeGroup:')) {
      const regexPattern = pattern.split(':')[1];
      return PatternMatcher.matchNegativeGroup(line, regexPattern);
    } else if (pattern === 'startOfString') {
      return PatternMatcher.matchStartOfString(line);
    } else if (pattern === 'endOfString') {
      return PatternMatcher.matchEndOfString(line);
    } else if (pattern.startsWith('oneOrMore:')) {
      const regexPattern = pattern.split(':')[1];
      return PatternMatcher.matchOneOrMore(line, regexPattern);
    } else if (pattern.startsWith('zeroOrOne:')) {
      const regexPattern = pattern.split(':')[1];
      return PatternMatcher.matchZeroOrOne(line, regexPattern);
    } else if (pattern === 'wildcard') {
      return PatternMatcher.wildcard(line, '.*');
    } else if (pattern === 'alternation') {
      return PatternMatcher.alternation(line, 'a|b');
    } else if (pattern.startsWith('backreference:')) {
      const regexPattern = pattern.split(':')[1];
      return PatternMatcher.singleBackreference(line, regexPattern);
    } else if (pattern.startsWith('multipleBackreferences:')) {
      const regexPattern = pattern.split(':')[1];
      return PatternMatcher.multipleBackreferences(line, regexPattern);
    } else if (pattern.startsWith('nestedBackreferences:')) {
      const regexPattern = pattern.split(':')[1];
      return PatternMatcher.nestedBackreferences(line, regexPattern);
    }
    
    // If no match pattern is found, fallback to a generic regex match
    const regex = new RegExp(pattern);
    return regex.test(line);
  }

  static run() {
    const filePath = readlineSync.question('Enter the file path: ');
    console.log('Examples of valid patterns:\n');
    console.log('- digits');
    console.log('- alphanumeric');
    console.log('- positiveGroup:abc');
    console.log('- negativeGroup:xyz');
    console.log('- startOfString');
    console.log('- endOfString');
    console.log('- oneOrMore:abc');
    console.log('- zeroOrOne:abc');
    console.log('- wildcard');
    console.log('- alternation');
    console.log('- backreference:(\\d+)');
    console.log('- multipleBackreferences:(\\d+)\\1');
    console.log('- nestedBackreferences:(\\d+)\\(\\d+\\)');

    const pattern = readlineSync.question('Enter the pattern: ');

    this.grepFile(filePath, pattern);
  }
}