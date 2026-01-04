# React Performance - Day 08

## Virtual DOM and Reconciliation

### What is Virtual DOM?
A JavaScript representation of the real DOM. React uses it to optimize updates.

### Reconciliation Process
1. React creates Virtual DOM tree
2. On state change, new Virtual DOM tree created
3. React compares (diffs) old and new trees
4. Only changed nodes updated in real DOM

### Why Virtual DOM?
- Faster than direct DOM manipulation
- Batches updates
- Optimizes re-renders

---

## Memoization (React.memo)

### React.memo
Prevents re-renders when props haven't changed:

```javascript
const MemoizedComponent = React.memo(function Component({ name }) {
  return <div>{name}</div>;
});
```

### When to Use
- Component receives same props frequently
- Component is expensive to render
- Parent re-renders often

---

## List Rendering and Keys

### Keys
Help React identify which items changed:

```javascript
{items.map(item => (
  <Item key={item.id} data={item} />
))}
```

### Key Rules
- Must be unique among siblings
- Should be stable (not index for dynamic lists)
- Use IDs when possible

---

## Error Boundaries

### What are Error Boundaries?
Components that catch JavaScript errors in child components.

```javascript
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
```

---

## Key Takeaways

1. Virtual DOM optimizes rendering
2. React.memo prevents unnecessary re-renders
3. Keys help React track list items
4. Error boundaries catch component errors
5. Measure performance before optimizing

