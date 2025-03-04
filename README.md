
![Frame 7](https://github.com/user-attachments/assets/198f6f8c-0e5e-486a-93db-0128e4fd6dab)

# My Grep
A custom implementation of the grep command written in TypeScript.

## Supported Patterns

- **digits**:  
  Matches any digit.

- **alphanumeric**:  
  Matches any alphanumeric string.

- **positiveGroup:pattern**:  
  Matches lines containing the specified group.  
  Example: `positiveGroup:abc` matches lines containing `"abc"`.

- **negativeGroup:pattern**:  
  Matches lines that do not contain the specified group.  
  Example: `negativeGroup:xyz` matches lines that do not contain `"xyz"`.

- **startOfString**:  
  Matches patterns at the start of the line.

- **endOfString**:  
  Matches patterns at the end of the line.

- **oneOrMore:pattern**:  
  Matches the given pattern one or more times.

- **zeroOrOne:pattern**:  
  Matches the given pattern zero or one time.

- **wildcard**:  
  Matches any character sequence (`.*`).

- **alternation**:  
  Matches either of two alternatives.  
  Example: `a|b` matches either `"a"` or `"b"`.

- **backreference:pattern**:  
  Matches a previously captured group.  
  Example: `backreference:(\d+)` matches the same digits captured in the first group.

- **multipleBackreferences:pattern**:  
  Matches multiple backreferences.  
  Example: `multipleBackreferences:(\d+)\1` matches the first group followed by the same digits.

- **nestedBackreferences:pattern**:  
  Matches nested backreferences.  
  Example: `nestedBackreferences:(\d+)\(\d+\)` matches digits followed by nested parentheses with digits.

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/Ukhang/my-grep.git
   cd my-grep
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the shell:
   ```sh
   npm run my-grep
   ```

## Usage
```bash
Enter the file path: <file path>
Enter the pattern: digits
```

```bash
Enter the file path: ./sample.txt
Examples of valid patterns:
- digits
- alphanumeric
- positiveGroup:abc
- negativeGroup:xyz
- startOfString
- endOfString
- oneOrMore:abc
- zeroOrOne:abc
- wildcard
- alternation
- backreference:(\d+)
- multipleBackreferences:(\d+)\1
- nestedBackreferences:(\d+)\(\d+\)

Enter the pattern: digits
Line 2: The number is 12345
Line 5: Another number 67890
```

## License

This project is licensed under the MIT License.
