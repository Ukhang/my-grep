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

    static matchNegativeGroup(text: string, pattern: string): boolean {
        const regex = new RegExp(`[^${pattern}]`);
        return regex.test(text);
    }

    static matchStartOfString(text: string): boolean {
        return /^/.test(text);
    }

    static matchEndOfString(text: string): boolean {
        return /$/.test(text);
    }

    static matchOneOrMore(text: string, pattern: string): boolean {
        const regex = new RegExp(`${pattern}+`);
        return regex.test(text);
    }

    static matchZeroOrOne(text: string, pattern: string): boolean {
        const regex = new RegExp(`${pattern}?`);
        return regex.test(text);
    }

    static wildcard(text: string, pattern: string): boolean {
        const regex = new RegExp(`${pattern}`);
        return regex.test(text);
    }

    static alternation(text: string, pattern: string): boolean {
        const regex = new RegExp(pattern);
        return regex.test(text);
    }

    static singleBackreference(text: string, pattern: string): boolean {
        const regex = new RegExp(pattern);
        return regex.test(text);
    }
}
