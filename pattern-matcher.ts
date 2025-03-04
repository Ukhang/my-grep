export class PatternMatcher {
    static matchDigits(text: string): boolean {
        return /\d/.test(text);
    }

    static matchAlphanumeric(text: string): boolean {
        return /^[a-zA-Z0-9]+$/.test(text);
    }

    static matchPositiveGroup(text: string, pattern: string): boolean {
        const regex = new RegExp(`(?:${pattern})`);
        return regex.test(text);
    }
}
