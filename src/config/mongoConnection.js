import mongoose from "mongoose"

process.loadEnvFile();

const URI_DB=process.env.URI_DB

const connectDb= async()=>{

try {
    await mongoose.connect(URI_DB)
    console.log("Conexion Base de datos exitosa");

} catch (error) {
    console.log("error",error);
}

}
export {connectDb}