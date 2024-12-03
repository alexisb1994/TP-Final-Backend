


const register=async (req,res)=>{

    try {
            
const {username,password,email}=req.body
if(!username||!password||email){

    return res.status(400).json({error:"bad request,invalid data"})
}
const newUser=await AuthModel.register({username,password,email})
if(newUser){
return res.status(201).json(newUser)
}
res.status(400).json({error:"bad request"})

} catch (error) {
        res.status(500).json({error:"internal server error"})
}
}

const login=(req,res)=>{

    
}

export {register,login};