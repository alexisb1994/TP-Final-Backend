//recibe el input
//responde al cliente en caso de exito.

import filmModels from "../models/filmModels.js"

// console.log(filmModels);

const getAllFilms=(req,res)=>{
try {
    const films =filmModels.getAllFilms()
    res.json(films)
} catch (error) {
    res.status(500).json({error:"server error"})
}

}

const getFilmById=(req,res)=>{
    try {
    const {id}=req.params        
    const film =filmModels.getFilmById(id)   

    if (!film)res.status(404).json({error:"film not found"})
    res.json(film)

} catch (error) {
    res.status(500).json({error:"server error"})
    }
    
}

const createFilm=(req,res)=>{
        try {
     const {title,genre,duration,language,country,releasDate}=req.body
     if(!title|| !genre|| !duration|| !language|| !country|| !releasDate){
        return res.status(400).json({error:"bad request, invalid data"})
     }       
const newFilm =filmModels.createFilm({title,genre,duration,language,country,releasDate});
res.status(201).json(newFilm)

        } catch (error) {
            res.status(500).json({error:"server error"})
        }
        
}

const updateFilm=(req,res)=>{
            try {
                
            } catch (error) {
                res.status(500).json({error:"server error"})
            }
            
}

const deleteFilm=(req,res)=>{
                try {
                    
                } catch (error) {
                    
                }
                
}

export {getAllFilms,getFilmById,createFilm,updateFilm,deleteFilm}
