import { connectDb } from "./src/config/mongoConnection.js";

process.loadEnvFile()
const PORT=process.env.PORT

connectDb()