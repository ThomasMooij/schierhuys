import Reserve from "../models/reservatie.model.js"

export const intent = async (req,res,next) => {
    try{

        const newReserve = new Reserve({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            adults: req.body.adults,
            children: req.body.children,
            childrenAge:req.body.childrenAge,
            dates: req.body.dates,
            price:req.body.price,
            desc: req.body.desc,
            payment_intent: req.body.payment_intent
        })
      
        await newReserve.save()
        console.log(req.body)
        res.status(200).send("new reservation created")
      
    }catch(err){
        console.log(err)
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