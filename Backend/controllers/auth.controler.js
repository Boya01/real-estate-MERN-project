import User from "../model/User.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../util/error.js";

const signup = async(req,res,next)=>{
    const {username,email,password } = req.body 
    const hashedPassword = bcryptjs.hashSync(password,10);
    const newUser = new User({username,email,password:hashedPassword});
   
    
    try {
       
        await newUser.save();    
         
        res.status(201).json('user was created succesfully')
   
      
    } catch (error) {
        next(errorHandler(500,error.message))
        
    }
    
    
   
};

export default signup;