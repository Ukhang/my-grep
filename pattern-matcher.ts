export class PatternMatcher {
    static matchDigits(text: string): boolean {
        return /\d/.test(text);
      }    
}
