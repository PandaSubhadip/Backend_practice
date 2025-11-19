const model = require('../model/usermodel');
const bcrypt = require('bcryptjs');
const jwt = require ('jsonwebtoken');

// Additional authentication controller logic can be added here in the future
const signup =async(req,res)=>{
    try{
        const { fullname, email, password, gender } = req.body;
        // console.log(req.body);
        // Check if user already exists
        const existuser = await model.findOne({email});
        if(existuser){
            return res.status(400).json({
                message: "user exists"
            })
        }
        const hashedPassword = await bcrypt.hash(password,10);
        const newUser = await model.create({
            fullname,
            email,
            password: hashedPassword,
            gender
        });
        
        res.status(201).json({
            message: "user created successfully",
        });

    } catch(err){
        res.status(500).json({message:'Server Error'});
        console.error(err);

    }
}

const login = async(req,res)=>{
    //Login logice start here
    try{
        const {email,password} = req.body;
        // Chekcing user exist or not
        const user =await model.findOne({email});
        if(!user){
            res.status(400).json({message:'Invalid credentials'});
        }   
        const ValidPassword = await bcrypt.compare(password,user.password);
        if(!ValidPassword){
            res.status(400).json({message:'Invalid credentials'});
        }
        const token = jwt.sign({id:user._id},process.env.JWT_SECRET);
        res.cookie('token',token);
        res.status(200).json({
            message:'Login successful',
           
        });
    } catch(err){
        res.status(500).json({ message:'Server Error'});
        console.error(err);
         
      
    }
}
module.exports = {signup,login};