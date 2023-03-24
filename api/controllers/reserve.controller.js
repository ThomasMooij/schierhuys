import Reserve from "../models/reservatie.model.js"
import Stripe from "stripe"


export const intent = async (req,res,next) => {
    try{
        const stripe = new Stripe(
            process.env.STRIPE_KEY
        )

        const calculatePrice = (child, adult, days) => {
            const childPrice =  days * 35 * child;
            const adultPrice = days * 45 * adult;

            return childPrice + adultPrice
        }

        const paymentIntent = await stripe.paymentIntents.create({
            amount: calculatePrice(
                req.body.children,
                req.body.adults, 
                req.body.days) * 100,
            currency: "eur",
            automatic_payment_methods:{
                enabled: true,
            }
        });

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
            payment_intent:paymentIntent.id,
        })
      
        await newReserve.save()
     
        res.status(200).send({clientSecret: paymentIntent.client_secret,})
      
    }catch(err){
        console.log(err)
    }
}

export const getReserves = async (req,res,next) => {
    try{
        if(!req.isGert) return next(createError(403, "You are not Gertje"))
        const reserves = await Reserve.find({})

        res.status(200).send(reserves)

    }catch(err){
        next(err)
    }
}

export const getReserve = async (req,res,next) => {
    try{
        if(!req.isGert) return next(createError(403, "You are not Gertje"))

        const reserve = await Reserve.find({
            _id: req.params.id
        })

        res.status(200).send(reserve)

    }catch(err){
        
    }
}

export const confirm = async (req,res,next) => {
    try{
        //update unavailables
        const reserve = await Reserve.findOneAndUpdate(
            {payment_intent:req.body.payment_intent,} , 
            {$set:{ isCompleted:true,}})
        const dates = await Reserve.findOneAndUpdate(
            console.log(req.body.dates),
            {'created_at' : 1}, 
            {$push: {"unavailableDates" : req.body.dates}})

    }catch(err){
        
    }
}

export const deleteReserve = async (req,res,next) => {
    try{
        if(!req.isGert) return next(createError(403, "You are not Gertje"))

        const reserve = await Reserve.findByIdAndDelete({
            _id: req.params.id
        })

        res.status(200).send(reserve)

    }catch(err){
        
    }
}
