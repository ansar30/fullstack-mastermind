# Day 6 - Learning Notes

## String Compression

### Run-Length Encoding
Compress consecutive duplicate characters into character + count.
- "aaabbc" → "a3b2c1"
- Only compress if result is shorter

```javascript
function compress(chars) {
    let write = 0;
    let i = 0;
    
    while (i < chars.length) {
        let char = chars[i];
        let count = 0;
        
        while (i < chars.length && chars[i] === char) {
            count++;
            i++;
        }
        
        chars[write++] = char;
        if (count > 1) {
            for (let digit of String(count)) {
                chars[write++] = digit;
            }
        }
    }
    
    return write;
}
```

## Character Frequency Patterns

### Finding First Unique
1. Build frequency map - O(n)
2. Iterate again to find first char with freq = 1 - O(n)
3. Total: O(n)

### Building Longest Palindrome from Chars
- Count frequency of each character
- Use all even frequencies completely
- Use odd frequencies minus 1
- Add one more character in middle if any odd exists

## Key Takeaways
- 
- 
- 

## Mistakes to Avoid
- 
- 
- 
