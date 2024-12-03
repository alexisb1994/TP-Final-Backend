//recibe el input
//responde al cliente en caso de exito.

import filmModels from "../models/filmModels.js"

// console.log(filmModels);

const getAllFilms=async(req,res)=>{
try {
    const films =await filmModels.getAllFilms()
    res.json(films)
} catch (error) {
    console.log(error);
    res.status(500).json({error:"server error"})
}

}

const getFilmById=async(req,res)=>{
    try {
    const {id}=req.params        
    const film =await filmModels.getFilmById(id)   

    if (!film)res.status(404).json({error:"film not found"})
    res.json(film)

} catch (error) {
    res.status(500).json({error:"Server Error"})
    }
    
}

const createFilm= async(req,res)=>{
        try {
     const {title,genre,duration,language,country,releaseDate}=req.body
     if(!title|| !genre|| !duration|| !language|| !country|| !releaseDate){
        return res.status(400).json({error:"bad request, invalid data"})
     }       
const newFilm =await filmModels.createFilm({title,genre,duration,language,country,releaseDate});
res.status(201).json(newFilm)

        } catch (error) {
            res.status(500).json({error:"Server Error"})
        }
        
}

const updateFilm= async(req,res)=>{
            try {

const {id}=req.params  
const {body}=req          
const film= await filmModels.updateFilm(id,body);
if(!film) res.status(404).json({message:"Pelicula No encontrada"});
res.json(film)                
                
            } catch (error) {
                res.status(500).json({error:"Server Error"})
            }
            
}

const deleteFilm= async(req,res)=>{
                try {
    const {id}=req.params
    const film= await filmModels.deleteFilm(id);
    
    if (!film) res.status(404).json({message:'Pelicula no encontrada'});
    res.json(film);

                    
                } catch (error) {
                    console.log(error);
                    res.status(500).json({error:"server error"})  
                }
                
}

export {getAllFilms,getFilmById,createFilm,updateFilm,deleteFilm}
