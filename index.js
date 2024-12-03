import { connectDb } from "./src/config/mongoConnection.js";
import express from "express";
import { FilmRoutes } from "./src/routes/filmRoutes.js";
import { AuthRoutes } from "./src/routes/authRoutes.js";

process.loadEnvFile()
const PORT=process.env.PORT



const app=express();
app.use(express.json())

app.use("/api/films",FilmRoutes)
app.use("/api/auth",AuthRoutes)


app.listen(PORT,()=>{
    connectDb()
console.log("server up on port http://localhost:"+PORT);

})