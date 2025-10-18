# HTML, CSS & JavaScript - Complete Guide

## Table of Contents

### HTML
- [HTML Basics](#html-basics)
- [Semantic HTML](#semantic-html)
- [Forms and Input](#forms-and-input)
- [HTML5 APIs](#html5-apis)

### CSS
- [CSS Fundamentals](#css-fundamentals)
- [Box Model](#box-model)
- [Flexbox](#flexbox)
- [Grid](#grid)
- [Responsive Design](#responsive-design)
- [CSS Animations](#css-animations)
- [Modern CSS](#modern-css)

### JavaScript
- [JavaScript Basics](#javascript-basics)
- [ES6+ Features](#es6-features)
- [Asynchronous JavaScript](#asynchronous-javascript)
- [DOM Manipulation](#dom-manipulation)
- [Array Methods](#array-methods)
- [Object-Oriented JavaScript](#object-oriented-javascript)

---

## HTML Basics

### Document Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Page description">
    <title>Page Title</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <nav><!-- Navigation --></nav>
    </header>
    
    <main>
        <!-- Main content -->
    </main>
    
    <footer>
        <!-- Footer content -->
    </footer>
    
    <script src="script.js"></script>
</body>
</html>
```

### Common HTML Elements

```html
<!-- Headings -->
<h1>Main Heading</h1>
<h2>Sub Heading</h2>
<h3>Section Heading</h3>

<!-- Text -->
<p>Paragraph text</p>
<span>Inline text</span>
<strong>Bold text</strong>
<em>Italic text</em>
<small>Small text</small>
<mark>Highlighted text</mark>

<!-- Links -->
<a href="https://example.com">External Link</a>
<a href="/about">Internal Link</a>
<a href="#section">Anchor Link</a>
<a href="mailto:email@example.com">Email Link</a>
<a href="tel:+1234567890">Phone Link</a>

<!-- Images -->
<img src="image.jpg" alt="Description" width="300" height="200">
<figure>
    <img src="image.jpg" alt="Description">
    <figcaption>Image caption</figcaption>
</figure>

<!-- Lists -->
<ul>
    <li>Unordered item 1</li>
    <li>Unordered item 2</li>
</ul>

<ol>
    <li>Ordered item 1</li>
    <li>Ordered item 2</li>
</ol>

<dl>
    <dt>Term</dt>
    <dd>Definition</dd>
</dl>

<!-- Divs and Sections -->
<div class="container">Content</div>
<section id="about">Section content</section>
<article>Article content</article>
```

## Semantic HTML

Semantic HTML uses meaningful tags that describe the content.

```html
<header>
    <nav>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
        </ul>
    </nav>
</header>

<main>
    <article>
        <header>
            <h1>Article Title</h1>
            <p>Published on <time datetime="2024-01-01">January 1, 2024</time></p>
        </header>
        
        <section>
            <h2>Introduction</h2>
            <p>Content...</p>
        </section>
        
        <aside>
            <h3>Related Info</h3>
            <p>Sidebar content...</p>
        </aside>
    </article>
</main>

<footer>
    <p>&copy; 2024 Company Name</p>
</footer>
```

### Semantic Tags Benefits:
- Better SEO
- Improved accessibility
- Cleaner code
- Easier maintenance

## Forms and Input

```html
<form action="/submit" method="POST">
    <!-- Text Inputs -->
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
    
    <!-- Email -->
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    
    <!-- Password -->
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required>
    
    <!-- Number -->
    <label for="age">Age:</label>
    <input type="number" id="age" name="age" min="18" max="100">
    
    <!-- Date -->
    <label for="dob">Date of Birth:</label>
    <input type="date" id="dob" name="dob">
    
    <!-- Checkbox -->
    <label>
        <input type="checkbox" name="subscribe" value="yes">
        Subscribe to newsletter
    </label>
    
    <!-- Radio Buttons -->
    <fieldset>
        <legend>Gender:</legend>
        <label>
            <input type="radio" name="gender" value="male"> Male
        </label>
        <label>
            <input type="radio" name="gender" value="female"> Female
        </label>
    </fieldset>
    
    <!-- Select Dropdown -->
    <label for="country">Country:</label>
    <select id="country" name="country">
        <option value="">Select...</option>
        <option value="us">United States</option>
        <option value="uk">United Kingdom</option>
    </select>
    
    <!-- Textarea -->
    <label for="message">Message:</label>
    <textarea id="message" name="message" rows="4"></textarea>
    
    <!-- File Upload -->
    <label for="file">Upload File:</label>
    <input type="file" id="file" name="file" accept=".pdf,.doc">
    
    <!-- Submit Button -->
    <button type="submit">Submit</button>
    <button type="reset">Reset</button>
</form>
```

### HTML5 Input Types:
- `text`, `email`, `password`, `tel`, `url`
- `number`, `range`, `date`, `time`, `datetime-local`
- `color`, `file`, `search`, `hidden`

## HTML5 APIs

### Local Storage

```javascript
// Save data
localStorage.setItem('username', 'John');

// Get data
const username = localStorage.getItem('username');

// Remove data
localStorage.removeItem('username');

// Clear all
localStorage.clear();

// Save objects
const user = { name: 'John', age: 30 };
localStorage.setItem('user', JSON.stringify(user));

// Get objects
const savedUser = JSON.parse(localStorage.getItem('user'));
```

### Geolocation

```javascript
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            console.log(`Lat: ${lat}, Lon: ${lon}`);
        },
        (error) => {
            console.error('Error:', error.message);
        }
    );
}
```

---

## CSS Fundamentals

### Selectors

```css
/* Element */
p { color: blue; }

/* Class */
.container { width: 100%; }

/* ID */
#header { background: white; }

/* Attribute */
input[type="text"] { border: 1px solid #ccc; }

/* Descendant */
div p { margin: 0; }

/* Child */
div > p { padding: 10px; }

/* Adjacent Sibling */
h1 + p { margin-top: 0; }

/* General Sibling */
h1 ~ p { color: gray; }

/* Pseudo-classes */
a:hover { color: red; }
input:focus { outline: 2px solid blue; }
li:first-child { font-weight: bold; }
li:last-child { border-bottom: none; }
li:nth-child(odd) { background: #f0f0f0; }

/* Pseudo-elements */
p::first-line { font-weight: bold; }
p::first-letter { font-size: 2em; }
div::before { content: "→"; }
div::after { content: "←"; }
```

### Properties

```css
.element {
    /* Colors */
    color: #333;
    background-color: rgba(0, 0, 0, 0.5);
    
    /* Typography */
    font-family: Arial, sans-serif;
    font-size: 16px;
    font-weight: bold;
    line-height: 1.5;
    text-align: center;
    text-decoration: underline;
    text-transform: uppercase;
    
    /* Spacing */
    margin: 10px 20px 10px 20px; /* top right bottom left */
    padding: 15px;
    
    /* Borders */
    border: 1px solid #ccc;
    border-radius: 5px;
    
    /* Display */
    display: block;
    visibility: visible;
    opacity: 0.8;
    
    /* Positioning */
    position: relative;
    top: 10px;
    left: 20px;
    z-index: 10;
    
    /* Dimensions */
    width: 100%;
    height: 200px;
    max-width: 1200px;
    min-height: 100px;
    
    /* Box Model */
    box-sizing: border-box;
}
```

## Box Model

```
┌─────────────────────────────────┐
│          Margin                  │
│  ┌──────────────────────────┐  │
│  │       Border              │  │
│  │  ┌───────────────────┐  │  │
│  │  │    Padding         │  │  │
│  │  │  ┌─────────────┐  │  │  │
│  │  │  │   Content    │  │  │  │
│  │  │  └─────────────┘  │  │  │
│  │  └───────────────────┘  │  │
│  └──────────────────────────┘  │
└─────────────────────────────────┘
```

```css
.box {
    /* Standard box model */
    width: 300px;
    padding: 20px;
    border: 5px solid black;
    margin: 10px;
    /* Total width = 300 + 20*2 + 5*2 + 10*2 = 370px */
    
    /* Border-box (recommended) */
    box-sizing: border-box;
    /* Total width = 300px (includes padding and border) */
}

/* Apply to all elements */
* {
    box-sizing: border-box;
}
```

## Flexbox

```css
.container {
    display: flex;
    
    /* Direction */
    flex-direction: row; /* row, row-reverse, column, column-reverse */
    
    /* Wrap */
    flex-wrap: wrap; /* nowrap, wrap, wrap-reverse */
    
    /* Justify content (main axis) */
    justify-content: center; /* flex-start, flex-end, center, space-between, space-around, space-evenly */
    
    /* Align items (cross axis) */
    align-items: center; /* flex-start, flex-end, center, stretch, baseline */
    
    /* Align content (multi-line) */
    align-content: space-between;
    
    /* Gap */
    gap: 20px;
}

.item {
    /* Flex properties */
    flex: 1; /* flex-grow flex-shrink flex-basis */
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: auto;
    
    /* Align self */
    align-self: flex-end;
    
    /* Order */
    order: 2;
}
```

### Common Flexbox Patterns

```css
/* Center content */
.center {
    display: flex;
    justify-content: center;
    align-items: center;
}

/* Space between items */
.space-between {
    display: flex;
    justify-content: space-between;
}

/* Equal width columns */
.columns {
    display: flex;
}
.column {
    flex: 1;
}

/* Responsive navigation */
.nav {
    display: flex;
    gap: 20px;
}
@media (max-width: 768px) {
    .nav {
        flex-direction: column;
    }
}
```

## Grid

```css
.container {
    display: grid;
    
    /* Columns and rows */
    grid-template-columns: 200px 1fr 1fr;
    grid-template-rows: 100px auto 100px;
    
    /* Repeat */
    grid-template-columns: repeat(3, 1fr);
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    
    /* Gap */
    gap: 20px;
    column-gap: 20px;
    row-gap: 10px;
    
    /* Areas */
    grid-template-areas:
        "header header header"
        "sidebar main main"
        "footer footer footer";
}

.item {
    /* Placement */
    grid-column: 1 / 3; /* start / end */
    grid-row: 1 / 2;
    
    /* Span */
    grid-column: span 2;
    grid-row: span 3;
    
    /* Area */
    grid-area: header;
    
    /* Alignment */
    justify-self: center;
    align-self: start;
}
```

### Common Grid Patterns

```css
/* Basic grid layout */
.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

/* Responsive grid */
.responsive-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}

/* Layout with areas */
.layout {
    display: grid;
    grid-template-areas:
        "header header"
        "sidebar content"
        "footer footer";
    grid-template-columns: 250px 1fr;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.content { grid-area: content; }
.footer { grid-area: footer; }
```

## Responsive Design

### Media Queries

```css
/* Mobile First Approach */
.container {
    width: 100%;
}

/* Tablet */
@media (min-width: 768px) {
    .container {
        width: 750px;
    }
}

/* Desktop */
@media (min-width: 1024px) {
    .container {
        width: 960px;
    }
}

/* Large Desktop */
@media (min-width: 1200px) {
    .container {
        width: 1140px;
    }
}

/* Orientation */
@media (orientation: landscape) {
    /* Styles for landscape */
}

/* Print */
@media print {
    .no-print {
        display: none;
    }
}
```

### Responsive Units

```css
/* Relative units */
.element {
    /* Relative to parent */
    width: 50%;
    
    /* Relative to font size */
    padding: 1em; /* 1em = current font size */
    margin: 2rem; /* 2rem = 2 * root font size */
    
    /* Viewport units */
    width: 100vw; /* 100% of viewport width */
    height: 100vh; /* 100% of viewport height */
    font-size: 5vw; /* 5% of viewport width */
    
    /* Minimum/maximum */
    width: clamp(300px, 50%, 600px); /* min, preferred, max */
    font-size: min(5vw, 20px);
    width: max(50%, 300px);
}
```

## CSS Animations

### Transitions

```css
.button {
    background: blue;
    transition: background 0.3s ease;
}

.button:hover {
    background: darkblue;
}

/* Multiple properties */
.box {
    transition: all 0.3s ease-in-out;
    /* Or specify each */
    transition: 
        background 0.3s ease,
        transform 0.2s ease-out,
        opacity 0.5s linear;
}
```

### Keyframe Animations

```css
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes slide {
    0% {
        transform: translateX(-100%);
    }
    50% {
        transform: translateX(50%);
    }
    100% {
        transform: translateX(0);
    }
}

.element {
    animation: fadeIn 1s ease-in-out;
    /* name duration timing-function delay iteration-count direction fill-mode */
    animation: slide 2s ease-in 0.5s infinite alternate forwards;
}
```

### Common Animations

```css
/* Fade in */
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

/* Slide up */
@keyframes slideUp {
    from {
        transform: translateY(100%);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

/* Bounce */
@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
}

/* Rotate */
@keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

/* Pulse */
@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
}
```

## Modern CSS

### CSS Variables

```css
:root {
    --primary-color: #007bff;
    --secondary-color: #6c757d;
    --font-size-base: 16px;
    --spacing-unit: 8px;
}

.element {
    color: var(--primary-color);
    font-size: var(--font-size-base);
    padding: calc(var(--spacing-unit) * 2);
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
    :root {
        --primary-color: #0d6efd;
        --background: #1a1a1a;
        --text: #ffffff;
    }
}
```

### Advanced Selectors

```css
/* :is() - grouping */
:is(h1, h2, h3) {
    font-weight: bold;
}

/* :where() - zero specificity */
:where(.card, .panel) {
    padding: 20px;
}

/* :not() - negation */
li:not(.active) {
    opacity: 0.5;
}

/* :has() - parent selector */
div:has(> img) {
    border: 1px solid #ccc;
}
```

---

## JavaScript Basics

### Variables

```javascript
// var - function scoped (avoid)
var name = 'John';

// let - block scoped, can reassign
let age = 25;
age = 26;

// const - block scoped, cannot reassign
const PI = 3.14159;
const user = { name: 'John' }; // Can mutate properties
user.name = 'Jane'; // OK
// user = {}; // Error
```

### Data Types

```javascript
// Primitives
const string = 'Hello';
const number = 42;
const boolean = true;
const nullValue = null;
const undefinedValue = undefined;
const symbol = Symbol('id');
const bigInt = 9007199254740991n;

// Objects
const object = { key: 'value' };
const array = [1, 2, 3];
const func = function() {};

// Type checking
typeof 'Hello'; // 'string'
typeof 42; // 'number'
Array.isArray([]); // true
```

### Operators

```javascript
// Arithmetic
+ - * / % **

// Assignment
= += -= *= /= %=

// Comparison
== != === !== < > <= >=

// Logical
&& || !

// Ternary
const result = condition ? 'yes' : 'no';

// Nullish coalescing
const value = null ?? 'default'; // 'default'

// Optional chaining
const name = user?.profile?.name;
```

### Functions

```javascript
// Function declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Function expression
const greet = function(name) {
    return `Hello, ${name}!`;
};

// Arrow function
const greet = (name) => {
    return `Hello, ${name}!`;
};

// Concise arrow function
const greet = name => `Hello, ${name}!`;

// Default parameters
const greet = (name = 'Guest') => `Hello, ${name}!`;

// Rest parameters
const sum = (...numbers) => numbers.reduce((a, b) => a + b, 0);

// Destructuring parameters
const greet = ({ name, age }) => `${name} is ${age} years old`;
```

## ES6+ Features

### Template Literals

```javascript
const name = 'John';
const age = 30;

// String interpolation
const message = `My name is ${name} and I'm ${age} years old.`;

// Multi-line strings
const html = `
    <div>
        <h1>${name}</h1>
        <p>Age: ${age}</p>
    </div>
`;

// Expression evaluation
const total = `Total: ${price * quantity}`;
```

### Destructuring

```javascript
// Array destructuring
const [first, second, ...rest] = [1, 2, 3, 4, 5];

// Object destructuring
const { name, age, country = 'USA' } = user;

// Nested destructuring
const { address: { city, zipCode } } = user;

// Function parameters
function greet({ name, age }) {
    return `${name} is ${age} years old`;
}
```

### Spread and Rest

```javascript
// Spread in arrays
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
const combined = [...arr1, ...arr2];

// Spread in objects
const user = { name: 'John', age: 30 };
const updatedUser = { ...user, age: 31 };

// Rest in destructuring
const [first, ...others] = [1, 2, 3, 4, 5];
const { name, ...rest } = user;
```

### Promises and Async/Await

```javascript
// Promise
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Success!');
    }, 1000);
});

promise
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => console.log('Done'));

// Async/Await
async function fetchData() {
    try {
        const response = await fetch('/api/data');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}

// Multiple promises
const [users, posts] = await Promise.all([
    fetch('/api/users').then(r => r.json()),
    fetch('/api/posts').then(r => r.json())
]);
```

### Array Methods

```javascript
const numbers = [1, 2, 3, 4, 5];

// map - transform each element
const doubled = numbers.map(n => n * 2); // [2, 4, 6, 8, 10]

// filter - keep elements that pass test
const evens = numbers.filter(n => n % 2 === 0); // [2, 4]

// reduce - reduce to single value
const sum = numbers.reduce((acc, n) => acc + n, 0); // 15

// find - find first match
const found = numbers.find(n => n > 3); // 4

// some - check if any pass test
const hasEven = numbers.some(n => n % 2 === 0); // true

// every - check if all pass test
const allPositive = numbers.every(n => n > 0); // true

// forEach - iterate
numbers.forEach(n => console.log(n));

// sort
numbers.sort((a, b) => b - a); // Descending

// includes
numbers.includes(3); // true
```

### DOM Manipulation

```javascript
// Selecting elements
const element = document.getElementById('id');
const elements = document.getElementsByClassName('class');
const element = document.querySelector('.class');
const elements = document.querySelectorAll('.class');

// Creating elements
const div = document.createElement('div');
div.textContent = 'Hello';
div.className = 'container';
div.setAttribute('data-id', '123');

// Appending
parent.appendChild(div);
parent.append(div1, div2, 'text');
parent.prepend(div);
element.insertAdjacentHTML('beforeend', '<p>Text</p>');

// Modifying
element.textContent = 'New text';
element.innerHTML = '<strong>Bold</strong>';
element.classList.add('active');
element.classList.remove('inactive');
element.classList.toggle('visible');
element.style.color = 'red';

// Event listeners
element.addEventListener('click', (e) => {
    console.log('Clicked!', e.target);
});

// Removing
element.remove();
parent.removeChild(element);
```

---

**Next Steps:**
- Review [Interview Questions](./interview-questions.md)
- Practice with [Code Examples](./code-examples/)
- Check the [Cheatsheet](./cheatsheet.md)

