import User from "../models/users.model.js"
export const getUser = async (req,res,next) => {
    try{
        const user = await User.findById(req.params.id);

        res.status(200).send(user);
    }
    catch(err){
        next(err)
    }
}
export const deleteUser = async (req,res,next) => {
    try{
    
    }
    catch(err){
        
    }
}