# Day 03 - Setup Guide

## Prerequisites

- Node.js installed (v18+)
- npm or yarn package manager
- Code editor (VS Code recommended)

## React Project Setup

### Option 1: Create React App (CRA)
```bash
npx create-react-app day03-react-app
cd day03-react-app
npm start
```

### Option 2: Vite (Faster)
```bash
npm create vite@latest day03-react-app -- --template react
cd day03-react-app
npm install
npm run dev
```

### Option 3: Minimal Setup (Manual)
```bash
mkdir day03-react-app
cd day03-react-app
npm init -y
npm install react react-dom
npm install --save-dev @vitejs/plugin-react vite
```

## Project Structure
```
day03-react-app/
├── src/
│   ├── components/
│   │   └── Form.jsx
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── vite.config.js
```

## Testing Your Setup

Create a simple component:
```jsx
// src/App.jsx
function App() {
  return <h1>Hello React!</h1>;
}

export default App;
```

## Files to Create

- `Form.jsx` - Form component with validation
- `StringProblems.js` - String algorithm problems
- `test.html` - HTML file for string problems

## Ready to Start!

Once setup is complete, move to `03-Solve` folder to begin coding.

