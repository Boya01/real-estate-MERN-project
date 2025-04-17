import mongoose from "mongoose";

const userSchema =new mongoose.Schema({
username:{
    type: String,
    requied:true,
    unique:true,

},
email:{
    type: String,
    required: false,
    unique:true
},
password:{
    type: String,
    required: false,
    unique:false
}
},
{timestamps:true}
);

const User = mongoose.model("user" ,userSchema)

export default User;