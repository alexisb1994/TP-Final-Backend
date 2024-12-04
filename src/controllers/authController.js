
import authModels from "../models/authModels.js";
import jwt from 'jsonwebtoken';

process.loadEnvFile()

const JWT_SECRET=process.env.JWT_SECRET;

const register=async (req,res)=>{

    try {
            
const {username,password,email}=req.body
if(!username|| !password|| !email){
console.log("aca");
    return res.status(400).json({error:"bad request,invalid data"})
}

const newUser= await authModels.register({username,password,email})
if(newUser===null){
    return res.status(400).json({error:"user already exists"})
}
res.status(201).json(newUser)

} catch (error) {
    if (error.name === 'ValidationError') {
        const validationErrors = Object.values(error.errors).map(err => err.message);
        return res.status(400).json({ error: validationErrors.join(', ') }); //le agrego la validacion de mail :)
    }
        res.status(500).json({error:"internal server error"})
        console.log(error);
}
}
const login = async (req, res) => {
    const { username, password } = req.body;
  
    // Verificar si ambos campos fueron enviados
    if (!username || !password) {
      return res.status(400).json({ message: "Username and password are required." });
    }
  
    try {
      // Llamamos a la función 'login' para validar las credenciales del usuario
      const user = await authModels.login({ username, password });
  
      // Si las credenciales no son válidas
      if (!user) {
        return res.status(401).json({ message: "Invalid username or password." });
      }
  
      // Generar un token JWT
      const token = jwt.sign(
        { id: user._id, username: user.username },
        process.env.JWT_SECRET,  // La clave secreta debe estar en .env
        { expiresIn: '1h' }  // El token expirará en 1 hora
      );
  
      console.log("Token generado:", token);  // Verificación en los logs
  
      // Si el login es exitoso, responder con el mensaje y los datos del usuario junto con el token
      return res.status(200).json({
        message: "Login successful",
        user: {
          username: user.username,
          email: user.email
        },
        token: token  // Aquí el token JWT
      });
  
    } catch (error) {
      // Si ocurre algún error en el proceso
      console.error("Error during login:", error);
      return res.status(500).json({ message: "An error occurred during login." });
    }
  };
export {register,login};