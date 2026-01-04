# Day 4 - Learning Notes

## String Manipulation

### Key Concepts
- Strings in JavaScript are **immutable**
- To modify, convert to array: `str.split('')`
- Convert back: `arr.join('')`

### Two Pointer for Strings
```javascript
function reverse(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
}
```

## Common String Methods
- `split()` - Split string into array
- `join()` - Join array into string
- `trim()` - Remove whitespace
- `toLowerCase()`, `toUpperCase()` - Case conversion
- `slice()`, `substring()` - Extract portion
- `replace()` - Replace substring

## Key Takeaways
- 
- 
- 

## Mistakes to Avoid
- 
- 
- 
