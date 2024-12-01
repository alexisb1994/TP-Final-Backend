import mongoose from "mongoose"

process.loadEnvFile();

const URI_DB=process.env.URI_DB

const connectDb= async()=>{

try {
    await mongoose.connect(URI_DB)
    console.log("conexion exitosa");

} catch (error) {
    console.log("errorrrr",error);
}

}
export {connectDb}