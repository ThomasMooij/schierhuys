import createError from "../functions/createError.js"
import Review from "../models/reviews.model.js"


export const createReview = async (req,res,next)=>{
    const newReview = new Review({
        userId: req.userId,
        desc: req.body.desc,
        star: req.body.star
    })
    try{
       
        const review = await Review.findOne({
        
            userId: req.userId
        })
        if(review) return next(createError(403, "U mag slechts een recentie achterlaten"))

        const savedReview = await newReview.save()
    }catch(err){
        next(err)
    }
}

export const getReviews = async (req,res,next)=>{
    try{
        const reviews = await Review.find({})

        res.status(200).send(reviews)
    }catch(err){
        
    }
}

export const deleteReview = async (req,res,next)=>{
    try{

    }catch(err){
        
    }
}