

import jwt from 'jsonwebtoken';

process.loadEnvFile()
const JWT_SECRET=process.env.JWT_SECRET;

// Middleware para verificar el token JWT
const auth = (req, res, next) => {
  // Obtener el token del encabezado 'Authorization'
  const token = req.header('Authorization')?.split(' ')[1]; // Se espera formato "Bearer <token>"

  if (!token) {
    return res.status(401).json({ message: 'Access Denied. No token provided.' });
  }

  try {
    // Verificar el token
    const decoded = jwt.verify(token, JWT_SECRET);

    // Agregar los datos decodificados al objeto `req` para que estén disponibles en los controladores posteriores
    req.user = decoded;

    // Continuar con la siguiente función en la cadena de middleware o controlador
    next();
  } catch (error) {
    console.error("Token verification failed:", error);
    return res.status(403).json({ message: 'Invalid token.' });
  }
};

export  {auth}