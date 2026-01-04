# JavaScript Memory & Patterns - Day 02

## Garbage Collection

### What is Garbage Collection?
JavaScript automatically manages memory by identifying and removing unused objects. This prevents memory leaks.

### How it Works:
1. **Mark and Sweep Algorithm**: Marks all reachable objects, then sweeps unreachable ones
2. **Reference Counting**: Counts references to objects (less common, has circular reference issues)

### Memory Leaks to Avoid:
```javascript
// 1. Global variables
window.myData = new Array(1000000).fill(0); // Never garbage collected

// 2. Event listeners not removed
element.addEventListener('click', handler);
// Must remove: element.removeEventListener('click', handler);

// 3. Closures holding references
function outer() {
  const largeData = new Array(1000000);
  return function inner() {
    // largeData is kept in memory even if not used
  };
}

// 4. Timers not cleared
const timer = setInterval(() => {}, 1000);
// Must clear: clearInterval(timer);
```

---

## `this` Binding Rules

### Rule 1: Default Binding (Global/Window)
When function is called without context:
```javascript
function greet() {
  console.log(this); // Window (browser) or global (Node)
}
greet(); // Default binding
```

### Rule 2: Implicit Binding
When function is called as method of object:
```javascript
const person = {
  name: 'John',
  greet() {
    console.log(this.name); // 'John'
  }
};
person.greet(); // Implicit binding - this = person
```

### Rule 3: Explicit Binding
Using `call`, `apply`, or `bind`:
```javascript
function greet() {
  console.log(this.name);
}

const person = { name: 'John' };

greet.call(person);    // Explicit - this = person
greet.apply(person);   // Explicit - this = person
const bound = greet.bind(person);
bound();               // Explicit - this = person
```

### Rule 4: `new` Binding
When function is called with `new`:
```javascript
function Person(name) {
  this.name = name; // this = new object
}

const john = new Person('John');
```

### Rule 5: Arrow Functions
Arrow functions don't have their own `this`, they inherit from enclosing scope:
```javascript
const obj = {
  name: 'John',
  regular: function() {
    console.log(this.name); // 'John'
  },
  arrow: () => {
    console.log(this.name); // undefined (this = global)
  }
};
```

**Priority Order**: `new` > explicit > implicit > default

---

## Call, Apply, and Bind

### `call()`
Calls function with specified `this` and arguments:
```javascript
function introduce(greeting, punctuation) {
  console.log(`${greeting}, I'm ${this.name}${punctuation}`);
}

const person = { name: 'John' };
introduce.call(person, 'Hello', '!'); // "Hello, I'm John!"
```

### `apply()`
Same as `call()` but takes array of arguments:
```javascript
introduce.apply(person, ['Hi', '.']); // "Hi, I'm John."
```

### `bind()`
Returns new function with bound `this`:
```javascript
const boundIntroduce = introduce.bind(person);
boundIntroduce('Hey', '!'); // "Hey, I'm John!"
```

### Implementing from Scratch:

```javascript
// Implement call
Function.prototype.myCall = function(context, ...args) {
  context = context || window;
  context.fn = this;
  const result = context.fn(...args);
  delete context.fn;
  return result;
};

// Implement apply
Function.prototype.myApply = function(context, args) {
  context = context || window;
  context.fn = this;
  const result = args ? context.fn(...args) : context.fn();
  delete context.fn;
  return result;
};

// Implement bind
Function.prototype.myBind = function(context, ...args1) {
  const fn = this;
  return function(...args2) {
    return fn.apply(context, [...args1, ...args2]);
  };
};
```

---

## Key Takeaways

1. Garbage collection prevents memory leaks automatically
2. `this` binding follows 5 rules with priority order
3. `call` and `apply` execute immediately, `bind` returns function
4. Arrow functions don't have their own `this`
5. Always clean up event listeners and timers

