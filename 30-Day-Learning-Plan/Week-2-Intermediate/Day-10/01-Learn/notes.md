# Next.js App Router - Day 10

## Server Components vs Client Components

### Server Components (Default)
- Render on the server
- No JavaScript sent to client
- Can access databases directly
- Cannot use hooks or browser APIs

```javascript
// app/page.js (Server Component)
async function Page() {
  const data = await fetch('https://api.example.com/data');
  const json = await data.json();
  
  return <div>{json.title}</div>;
}
```

### Client Components
- Render on the client
- Can use hooks, state, effects
- Can access browser APIs
- Mark with `'use client'`

```javascript
'use client';

import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
}
```

---

## App Router Layouts

### Root Layout
```javascript
// app/layout.js
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <header>Header</header>
        {children}
        <footer>Footer</footer>
      </body>
    </html>
  );
}
```

### Nested Layouts
```javascript
// app/dashboard/layout.js
export default function DashboardLayout({ children }) {
  return (
    <div>
      <nav>Dashboard Nav</nav>
      {children}
    </div>
  );
}
```

---

## API Routes

### Creating API Routes
```javascript
// app/api/users/route.js
export async function GET() {
  const users = await getUsers();
  return Response.json(users);
}

export async function POST(request) {
  const body = await request.json();
  const user = await createUser(body);
  return Response.json(user, { status: 201 });
}
```

### Dynamic Routes
```javascript
// app/api/users/[id]/route.js
export async function GET(request, { params }) {
  const user = await getUserById(params.id);
  return Response.json(user);
}
```

---

## Data Fetching

### Server Components
```javascript
async function Page() {
  const data = await fetch('https://api.example.com/data', {
    cache: 'no-store' // or 'force-cache'
  });
  return <div>{data.title}</div>;
}
```

### Client Components
```javascript
'use client';

import { useEffect, useState } from 'react';

function DataDisplay() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(setData);
  }, []);
  
  return <div>{data?.title}</div>;
}
```

---

## Key Takeaways

1. Server Components are default (no JS to client)
2. Use 'use client' for interactive components
3. Layouts wrap pages and share UI
4. API routes in app/api directory
5. Fetch data in Server Components when possible

