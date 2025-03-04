export class PatternMatcher {
    static matchDigits(text: string): boolean {
        return /\d/.test(text);
    }

    static matchAlphanumeric(text: string): boolean {
        return /^[a-zA-Z0-9]+$/.test(text);
    }
}
