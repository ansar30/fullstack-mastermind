/**
 * Data Fetching Component
 * Demonstrates: useEffect, async operations, loading states, error handling
 */

import React, { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchUserPosts = async (userId) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
      );
      const posts = await response.json();
      
      setSelectedUser(prev => ({
        ...prev,
        posts
      }));
    } catch (err) {
      console.error('Error fetching posts:', err);
    }
  };

  const handleUserClick = (user) => {
    setSelectedUser(user);
    fetchUserPosts(user.id);
  };

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Loading users...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        <h2>Error!</h2>
        <p>{error}</p>
        <button onClick={fetchUsers}>Try Again</button>
      </div>
    );
  }

  return (
    <div className="user-list-container">
      <h1>Users</h1>
      
      <div className="layout">
        <div className="users-sidebar">
          {users.map(user => (
            <div
              key={user.id}
              className={`user-card ${selectedUser?.id === user.id ? 'active' : ''}`}
              onClick={() => handleUserClick(user)}
            >
              <h3>{user.name}</h3>
              <p>{user.email}</p>
              <p>{user.company.name}</p>
            </div>
          ))}
        </div>

        <div className="user-details">
          {selectedUser ? (
            <>
              <h2>{selectedUser.name}</h2>
              <div className="details-grid">
                <div>
                  <strong>Email:</strong> {selectedUser.email}
                </div>
                <div>
                  <strong>Phone:</strong> {selectedUser.phone}
                </div>
                <div>
                  <strong>Website:</strong> {selectedUser.website}
                </div>
                <div>
                  <strong>Company:</strong> {selectedUser.company.name}
                </div>
                <div>
                  <strong>Address:</strong> {selectedUser.address.street}, {selectedUser.address.city}
                </div>
              </div>

              {selectedUser.posts && (
                <div className="posts-section">
                  <h3>Posts ({selectedUser.posts.length})</h3>
                  <div className="posts-list">
                    {selectedUser.posts.map(post => (
                      <div key={post.id} className="post-card">
                        <h4>{post.title}</h4>
                        <p>{post.body}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="placeholder">
              <p>Select a user to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Alternative: Using Custom Hook
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        if (!cancelled) {
          setData(json);
          setError(null);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      cancelled = true;
    };
  }, [url]);

  return { data, loading, error };
}

// Usage of custom hook
function UserListWithHook() {
  const { data: users, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/users'
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {users.map(user => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default UserList;

