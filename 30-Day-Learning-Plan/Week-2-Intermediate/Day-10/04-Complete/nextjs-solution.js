/**
 * Next.js App with API - Complete Solution
 */

// app/api/users/route.js
export async function GET() {
    const users = [
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
    ];
    return Response.json(users);
}

export async function POST(request) {
    const body = await request.json();
    const newUser = {
        id: Date.now(),
        ...body
    };
    return Response.json(newUser, { status: 201 });
}

// app/page.js
async function Page() {
    const response = await fetch('http://localhost:3000/api/users', {
        cache: 'no-store' // Force fresh data
    });
    const users = await response.json();
    
    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name} - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Page;

// app/api/data/route.js (Alternative example)
export async function GET() {
    // Simulate database call
    const data = {
        message: 'Hello from Next.js API',
        timestamp: new Date().toISOString()
    };
    return Response.json(data);
}

/**
 * Client Component Example (if needed)
 * 
 * 'use client';
 * 
 * import { useEffect, useState } from 'react';
 * 
 * function ClientDataDisplay() {
 *   const [data, setData] = useState(null);
 *   
 *   useEffect(() => {
 *     fetch('/api/data')
 *       .then(res => res.json())
 *       .then(setData);
 *   }, []);
 *   
 *   if (!data) return <div>Loading...</div>;
 *   
 *   return <div>{data.message}</div>;
 * }
 */

