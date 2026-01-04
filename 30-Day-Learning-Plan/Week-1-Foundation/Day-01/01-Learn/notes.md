# JavaScript Deep Dive - Day 01

## Event Loop

### What is the Event Loop?
The event loop is the mechanism that allows JavaScript to perform non-blocking operations despite being single-threaded.

### How it works:
1. **Call Stack**: Executes synchronous code
2. **Web APIs**: Handle async operations (setTimeout, fetch, etc.)
3. **Task Queue** (Macrotask): Holds callbacks from setTimeout, setInterval
4. **Microtask Queue**: Holds promises, queueMicrotask
5. **Event Loop**: Moves tasks from queues to call stack when empty

### Execution Order:
```
Synchronous Code → Microtasks → Macrotasks → Render
```

### Example:
```javascript
console.log('1');

setTimeout(() => console.log('2'), 0);

Promise.resolve().then(() => console.log('3'));

console.log('4');

// Output: 1, 4, 3, 2
```

---

## Microtask vs Macrotask

### Microtasks (Higher Priority)
- Promises (.then, .catch, .finally)
- queueMicrotask()
- MutationObserver
- Process.nextTick (Node.js)

### Macrotasks (Lower Priority)
- setTimeout
- setInterval
- setImmediate (Node.js)
- I/O operations
- UI rendering

**Key Rule**: All microtasks execute before the next macrotask

---

## Closures

### Definition
A closure is a function that has access to variables in its outer (enclosing) function's scope, even after the outer function has returned.

### Example:
```javascript
function outer() {
  const name = 'JavaScript';
  
  function inner() {
    console.log(name); // Has access to 'name'
  }
  
  return inner;
}

const myFunc = outer();
myFunc(); // 'JavaScript'
```

### Use Cases:
- Data privacy
- Function factories
- Event handlers
- Debounce/throttle
- Partial application

---

## Hoisting

### What is Hoisting?
JavaScript moves declarations to the top of their scope during compilation.

### var Hoisting:
```javascript
console.log(x); // undefined
var x = 5;

// Interpreted as:
var x;
console.log(x);
x = 5;
```

### let/const Hoisting:
```javascript
console.log(y); // ReferenceError: Cannot access before initialization
let y = 5;
```

**Temporal Dead Zone**: Period between entering scope and declaration line

### Function Hoisting:
```javascript
// Function declarations are hoisted
greet(); // Works!

function greet() {
  console.log('Hello');
}

// Function expressions are NOT hoisted
sayHi(); // Error!

const sayHi = function() {
  console.log('Hi');
};
```

---

## Key Takeaways

1. Event loop enables async in single-threaded JS
2. Microtasks execute before macrotasks
3. Closures provide data encapsulation
4. var is hoisted and initialized to undefined
5. let/const are hoisted but in TDZ until declaration
6. Function declarations are fully hoisted
