const express=require('express');
const router=express.Router();
const User=require('../models/user');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
router.post('/register',(req,res)=>{
   const email=req.body.email;
   const phone=req.body.phone;
   const name=req.body.name;
   const password=req.body.password;
   bcrypt.hash(password,10).then(hash=>{
      User.create({
          Name:name,
          Email:email,
          Phone:phone,
          Password:hash
      }).then(()=>{
        res.status(200).json({
            message:'User registered'
        });
      }).catch(err=>{
          req.status(401).json({
              message:'error occured',
              error:err
          });
      });
   }).catch(err=>{
      res.status(403).json({
          message:'Error occured',
          error:err
      });
   });
});
router.post('/login',(req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    let fetchedUser;
     User.findOne({where:{email}}).then(result=>{
       if(!result)
       {
           res.status(401).json({
               message:'Error occured!user not found'
           });

       }
       fetchedUser=result;
       return bcrypt.compare(password,fetchedUser.Password);
     }).then(user=>{
         if(!user)
         {
           res.status(401).json({
               message:'Password is invalid'
           });
         }
         else{
           const token =jwt.sign({email:fetchedUser.email,id:fetchedUser.id},"Jackward");
           res.status(200).json({
               token:token,
               id:fetchedUser.id,
               email:fetchedUser.Email
           });
         }
     }).catch(err=>{
       res.status(400).json({
           message:'Error occured',
           error:err
       });
     });
});
module.exports=router;