//manipulacionde datos,en la base de datos.
//retorna esta peticion al controller

import mongoose from "mongoose"

const filmSchema =new mongoose.Schema({
    title: { type: String, required: true }, 
    genre: { type: String, required: true }, 
    duration: { type: String},
    language: { type: String}, 
    country: { type: String}, 
    releaseDate: { type: Date}
})

const Film=mongoose.model("films",filmSchema)

const getAllFilms=(req,res)=>{
return "buscar todas las peliculas"
   
    }
    
    const getFilmById=(req,res)=>{
    return "buscar una pelicula"
        
    }
    
    const createFilm=(req,res)=>{
  return "crear una pelicula"
    }
    
    const updateFilm=(req,res)=>{
    return "actualizar una pelicula"
    }
    
    const deleteFilm=(req,res)=>{
    return "borrar una pelicula"
    }

    export default {getAllFilms,getFilmById,createFilm,updateFilm,deleteFilm}