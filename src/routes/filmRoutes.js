
import{ Router } from "express";
import{getAllFilms,getFilmById,createFilm,updateFilm,deleteFilm} from "../controllers/filmController.js"
import { auth } from "../middlewares/authMiddleware.js";


const FilmRoutes=Router();

//api/films
FilmRoutes.get("/",auth,getAllFilms)
FilmRoutes.get("/:id",auth,getFilmById)
FilmRoutes.post("/",auth,createFilm)
FilmRoutes.patch("/:id",auth,updateFilm)
FilmRoutes.delete("/:id",auth,deleteFilm)

export {FilmRoutes}
