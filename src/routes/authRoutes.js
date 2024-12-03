
import{ Router } from "express";
import{login,register} from "../controllers/authController.js"
import { getAllFilms } from "../controllers/filmController.js";
import { auth } from "../middlewares/authMiddleware.js";



const AuthRoutes=Router();

AuthRoutes.post("/register",register)


export {AuthRoutes}
