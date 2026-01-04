# Day 9 - Learning Notes

## Grouping with Hash Maps

### Pattern: Using Normalized Keys
Group items by transforming them into a canonical form:

```javascript
// Group anagrams by sorted string
const groupAnagrams = (strs) => {
    const map = new Map();
    for (let str of strs) {
        const key = str.split('').sort().join('');
        if (!map.has(key)) map.set(key, []);
        map.get(key).push(str);
    }
    return Array.from(map.values());
};
```

### Character Mapping Pattern
For problems like isomorphic strings:

```javascript
function isIsomorphic(s, t) {
    if (s.length !== t.length) return false;
    
    const mapS = new Map();
    const mapT = new Map();
    
    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];
        
        // Check bijection both ways
        if (mapS.has(charS) && mapS.get(charS) !== charT) return false;
        if (mapT.has(charT) && mapT.get(charT) !== charS) return false;
        
        mapS.set(charS, charT);
        mapT.set(charT, charS);
    }
    
    return true;
}
```

### Timestamp/Rate Limiting Pattern
```javascript
class Logger {
    constructor() {
        this.map = new Map();
    }
    
    shouldPrintMessage(timestamp, message) {
        if (!this.map.has(message) || timestamp - this.map.get(message) >= 10) {
            this.map.set(message, timestamp);
            return true;
        }
        return false;
    }
}
```

## Key Takeaways
- 
- 
- 

## Mistakes to Avoid
- 
- 
- 
