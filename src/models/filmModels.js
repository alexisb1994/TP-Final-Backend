//manipulacionde datos,en la base de datos.
//retorna esta peticion al controller

import mongoose from "mongoose"

const filmSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    genre: { type: String, required: true },
    duration: { type: Number },
    language: { type: String },
    country: { type: String },
    releaseDate: { type: Date }
  }, {
    versionKey: false
  });
  
  filmSchema.index({ title: 1 }, { unique: true });
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
    
    const updateFilm=(id,updateFilm)=>{
    return Film.findByIdAndUpdate(id,updateFilm,{new:true,runValidators: true})
    }
    
    const deleteFilm=(id)=>{
    return Film.findByIdAndDelete(id)
    }

    export default {getAllFilms,getFilmById,createFilm,updateFilm,deleteFilm}