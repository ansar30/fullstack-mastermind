/**
 * Debounce Function Template
 * 
 * Task: Implement a debounce function that delays execution
 * until after a specified wait time has elapsed since the last call.
 * 
 * Requirements:
 * - Must use closures
 * - Should cancel previous timer on new call
 * - Return a debounced version of the function
 */

function debounce(func, delay) {
    // TODO: Implement debounce logic
    // Hint: Use setTimeout and clearTimeout
    // Hint: Store timer ID in closure
}

// Example usage:
const handleSearch = debounce((query) => {
    console.log('Searching for:', query);
}, 500);

// Test it:
// handleSearch('a');
// handleSearch('ab');
// handleSearch('abc');
// Only 'abc' should be logged after 500ms
