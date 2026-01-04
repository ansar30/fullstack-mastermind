# Day 5 - Learning Notes

## Anagram Detection

### Definition
Anagrams are words/strings formed by rearranging letters of another word/string.
- Same length
- Same character frequency
- Different order

### Approaches

#### 1. Sorting Approach
```javascript
function isAnagram(s1, s2) {
    return s1.split('').sort().join('') === s2.split('').sort().join('');
}
// Time: O(n log n)
// Space: O(n)
```

#### 2. Frequency Map Approach
```javascript
function isAnagram(s1, s2) {
    if (s1.length !== s2.length) return false;
    const freq = {};
    for (let char of s1) freq[char] = (freq[char] || 0) + 1;
    for (let char of s2) {
        if (!freq[char]) return false;
        freq[char]--;
    }
    return true;
}
// Time: O(n)
// Space: O(1) - max 26 letters
```

## Grouping Anagrams
- Use sorted string as hash map key
- All anagrams will have the same sorted form
- Example: "eat", "tea", "ate" → "aet"

## Key Takeaways
- 
- 
- 

## Mistakes to Avoid
- 
- 
- 
