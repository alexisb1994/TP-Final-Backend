

import jwt from 'jsonwebtoken';

process.loadEnvFile()
const JWT_SECRET=process.env.JWT_SECRET;


const auth = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1]; 

  if (!token) {
    return res.status(401).json({ message: 'Access Denied. No token provided.' });
  }

  try {
        const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;

    next();
  } catch (error) {
    console.error("Token verification failed:", error);
    return res.status(403).json({ message: 'Invalid token.' });
  }
};

export  {auth}