//manipulacionde datos,en la base de datos.
//retorna esta peticion al controller


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