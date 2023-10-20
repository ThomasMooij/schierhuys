import createError from "../functions/createError.js"
import Unavailables from "../models/unavailables.model.js"

export const getUnavailables = async (req,res,next) =>{ 
    try{
        const reserve = await Reserve.findOne().sort({'created_at' : 1}).select('unavailableDates -_id')
        res.status(200).send(reserve)
    }catch(err){
        next(err)
    }
}
export const setUnavailables = async (dates, reserve,) =>{
    try{       
      await Unavailables.create({
        reserveId: reserve,
        dates
      })
        res.status(200).send(reserve)
    }catch(err){
        createError(err)
    }
}
export const unSetUnavailables = async (req,res,next) =>{
    try{
    if(!req.isGert) return next(createError(403, "You are not Gertje"))
        const reserve = await Reserve.findOneAndUpdate(
            {'created_at' : 1},
            {$pull: {"unavailableDates" : {$in: req.body.dates}}})
        res.status(200).send(reserve)
    }catch(err){
        next(err)
    }
}