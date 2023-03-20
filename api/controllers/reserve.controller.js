import Reserve from "../models/reservation.model.js"

export const intent = async (req,res,next) => {
    try{

        const newReserve = new Reserve({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            adults: req.body.adults,
            children: req.body.children,
            childrenAge:req.body.childrenAge,
            dates: req.body.dates,
            price:req.body.price,
            desc: req.body.desc,
            payment_intent: req.body.payment_intent
        })
        
        await newReserve.save()
    
        res.status(200).send("new reservation created")

    }catch(err){

    }
}

export const getReserves = async (req,res,next) => {
    try{

    }catch(err){
        
    }
}
export const getUnavailables = async (req,res,next) => {
    try{

    }catch(err){
        
    }
}
export const confirm = async (req,res,next) => {
    try{


        //update unavailables

    }catch(err){
        
    }
}