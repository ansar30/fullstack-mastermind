# Authentication - Day 13

## JWT (JSON Web Tokens)

### What is JWT?
A compact, URL-safe token format for securely transmitting information between parties.

### JWT Structure
```
header.payload.signature
```

### Parts
1. **Header**: Algorithm and token type
2. **Payload**: Claims (data)
3. **Signature**: Verifies token integrity

### Example
```javascript
const token = jwt.sign(
  { userId: user.id, email: user.email },
  process.env.JWT_SECRET,
  { expiresIn: '15m' }
);
```

---

## Refresh Token Pattern

### Access Token
- Short-lived (15 minutes)
- Contains user info
- Sent with every request

### Refresh Token
- Long-lived (7 days)
- Stored securely (httpOnly cookie)
- Used to get new access token

### Flow
```javascript
// Login
const accessToken = jwt.sign(payload, secret, { expiresIn: '15m' });
const refreshToken = jwt.sign(payload, refreshSecret, { expiresIn: '7d' });

// Store refresh token in database
await User.updateOne({ _id: userId }, { refreshToken });

// Refresh access token
const newAccessToken = jwt.sign(payload, secret, { expiresIn: '15m' });
```

---

## Token Rotation

### Security Best Practice
Rotate refresh tokens on each use:

```javascript
async function refreshAccessToken(refreshToken) {
  // Verify refresh token
  const decoded = jwt.verify(refreshToken, refreshSecret);
  
  // Generate new tokens
  const newAccessToken = generateAccessToken(decoded);
  const newRefreshToken = generateRefreshToken(decoded);
  
  // Update refresh token in database
  await User.updateOne(
    { _id: decoded.userId },
    { refreshToken: newRefreshToken }
  );
  
  return { accessToken: newAccessToken, refreshToken: newRefreshToken };
}
```

---

## Role-Based Access Control (RBAC)

### Implementation
```javascript
function authorize(...roles) {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Forbidden' });
    }
    
    next();
  };
}

// Usage
app.get('/admin', authenticate, authorize('admin'), (req, res) => {
  res.json({ message: 'Admin access' });
});
```

---

## Key Takeaways

1. JWT provides stateless authentication
2. Use short-lived access tokens
3. Store refresh tokens securely
4. Rotate refresh tokens for security
5. Implement RBAC for authorization

