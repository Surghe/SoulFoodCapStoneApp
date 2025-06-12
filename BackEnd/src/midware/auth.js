// middleware/auth.js
const jwt = ('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  // Format: 'Bearer <token>'

  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    console.log('❌ No token provided');
    return res.status(401).json({ message: 'Access token required' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      console.log('❌ Invalid token');
      return res.status(403).json({ message: 'Invalid token' });
    }

    req.user = user; // Attach user to request object
    console.log('✅ Token validated. User:', user);
    next();
  });
};

export default authenticateToken;
