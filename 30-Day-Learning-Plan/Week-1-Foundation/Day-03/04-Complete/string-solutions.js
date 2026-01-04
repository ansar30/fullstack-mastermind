/**
 * String Problems - Complete Solutions
 */

/**
 * Problem 1: Reverse String
 * Time: O(n), Space: O(1)
 */
function reverseString(s) {
    let left = 0;
    let right = s.length - 1;
    
    while (left < right) {
        // Swap characters
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
}

// Test
const test1 = ["h","e","l","l","o"];
reverseString(test1);
console.log('Reverse:', test1); // ["o","l","l","e","h"]

/**
 * Problem 2: Valid Anagram
 * Time: O(n), Space: O(1) - fixed size alphabet
 */
function isAnagram(s, t) {
    if (s.length !== t.length) return false;
    
    const charCount = new Map();
    
    // Count characters in s
    for (const char of s) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }
    
    // Decrement for t
    for (const char of t) {
        if (!charCount.has(char) || charCount.get(char) === 0) {
            return false;
        }
        charCount.set(char, charCount.get(char) - 1);
    }
    
    return true;
}

// Alternative: Using array for fixed alphabet
function isAnagramArray(s, t) {
    if (s.length !== t.length) return false;
    
    const count = new Array(26).fill(0);
    
    for (let i = 0; i < s.length; i++) {
        count[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        count[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }
    
    return count.every(c => c === 0);
}

// Test cases
console.log('Anagram:', isAnagram("anagram", "nagaram")); // true
console.log('Anagram:', isAnagram("rat", "car"));         // false

/**
 * Problem 3: Check Palindrome
 * Time: O(n), Space: O(1)
 */
function isPalindrome(s) {
    // Remove non-alphanumeric and convert to lowercase
    const cleaned = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    let left = 0;
    let right = cleaned.length - 1;
    
    while (left < right) {
        if (cleaned[left] !== cleaned[right]) {
            return false;
        }
        left++;
        right--;
    }
    
    return true;
}

console.log('Palindrome:', isPalindrome("A man, a plan, a canal: Panama")); // true

/**
 * Problem 4: Longest Common Prefix
 * Time: O(S) where S is sum of all characters, Space: O(1)
 */
function longestCommonPrefix(strs) {
    if (strs.length === 0) return '';
    
    let prefix = strs[0];
    
    for (let i = 1; i < strs.length; i++) {
        while (!strs[i].startsWith(prefix)) {
            prefix = prefix.slice(0, -1);
            if (prefix === '') return '';
        }
    }
    
    return prefix;
}

console.log('LCP:', longestCommonPrefix(["flower","flow","flight"])); // "fl"

/**
 * Problem 5: Group Anagrams
 * Time: O(n * k log k), Space: O(n * k)
 */
function groupAnagrams(strs) {
    const map = new Map();
    
    for (const str of strs) {
        const sorted = str.split('').sort().join('');
        if (!map.has(sorted)) {
            map.set(sorted, []);
        }
        map.get(sorted).push(str);
    }
    
    return Array.from(map.values());
}

console.log('Group Anagrams:', groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
// [["eat","tea","ate"],["tan","nat"],["bat"]]

