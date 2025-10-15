import express from "express"
import UserModel from "../model/UserSchema.js";

const router=express.Router();

router.post("/latestemail",async(req,res)=>{
    try{
        const {email}=req.body;
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
          return res.status(400).json({ message: "Already You are in Our waitlist." });
        }
        const newuser=new UserModel({
            email:email
        });
        await newuser.save()
        res.status(200).json({
            message: "Sended Successful",
            status: true,
            email:email
          });
    }catch(err){
        res.status(500).json({success:false,message:"Failed to Send"})
    }
});

export default router;