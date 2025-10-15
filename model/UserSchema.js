import mongoose from "mongoose";

const userschema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    }
},{ timestamps: true })

const UserModel=mongoose.model("userschema",userschema);
export default UserModel;