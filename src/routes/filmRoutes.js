
import{ Router } from "express";
import{getAllFilms,getFilmById,createFilm,updateFilm,deleteFilm} from "../controllers/filmController.js"


const FilmRoutes=Router();

//api/films
FilmRoutes.get("/",getAllFilms)
FilmRoutes.get("/:id",getFilmById)
FilmRoutes.post("/",createFilm)
FilmRoutes.patch("/:id",updateFilm)
FilmRoutes.delete(":/id",deleteFilm)

export {FilmRoutes}
