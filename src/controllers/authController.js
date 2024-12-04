
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
  
       if (!username || !password) {
      return res.status(400).json({ message: "Username and password are required." });
    }
  
    try {
          const user = await authModels.login({ username, password });
  
      if (!user) {
        return res.status(401).json({ message: "Invalid username or password." });
      }
  
     
      const token = jwt.sign(
        { id: user._id, username: user.username },
        JWT_SECRET, 
        { expiresIn: '1h' }  
      );
  
      console.log("Token generado:", token);  
  
        return res.status(200).json({
        message: "Login successful",
        user: {
          username: user.username,
          email: user.email
        },
        token: token  
      });
  
    } catch (error) {
          console.error("Error during login:", error);
      return res.status(500).json({ message: "An error occurred during login." });
    }
  };
export {register,login};