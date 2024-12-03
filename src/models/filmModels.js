//manipulacionde datos,en la base de datos.
//retorna esta peticion al controller

import mongoose from "mongoose"

const filmSchema =new mongoose.Schema({
    title: { type: String, required: true }, 
    genre: { type: String, required: true }, 
    duration: { type: Number},
    language: { type: String}, 
    country: { type: String}, 
    releaseDate: { type: Date}
})

const Film=mongoose.model("films",filmSchema)

const getAllFilms=()=>{
return Film.find()
   
    }
    
    const getFilmById=(id)=>{
   return Film.findById(id)
    }
    
    const createFilm=(newFilm)=>{
const film=new Film(newFilm)
return film.save()


    }
    
    const updateFilm=()=>{
    return "actualizar una pelicula"
    }
    
    const deleteFilm=()=>{
    return "borrar una pelicula"
    }

    export default {getAllFilms,getFilmById,createFilm,updateFilm,deleteFilm}