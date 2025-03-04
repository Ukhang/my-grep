import fs from "fs";

export class FileReader {
    static readFile(filePath: string): string | null {
        try {
            return fs.readFileSync(filePath, "utf-8");
        } catch(err) {
            console.error(`Error reading file: ${filePath}`);
            return null;
        }
    }
};