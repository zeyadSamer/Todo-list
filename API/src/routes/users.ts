
import express from 'express';
import { Request,Response } from "express";
import {addUser,getUser} from '../handlers/users'
import jwt from 'jsonwebtoken';
import { authenticateJWT } from '../middleware/authenticateJWT';

const usersRoutes=express.Router();

//for signing up and creating user
//we get the user by email & password sent in the body
usersRoutes.post('/user',async(req:Request,res:Response)=>{


    try{

    const userData=req.body;


    console.log('userdata received:',userData);
    
    const result=await addUser(userData);

    if(result){
    res.json(result);
    }else{
        res.status(500)
       res.send('operation failed')
    }

  }catch(error){
    console.log('error');
  }
 
})

//used in sign in

usersRoutes.post('/user/authenticate',async(req:Request,res:Response)=>{

    try{
  
    const userData=req.body;
    console.log('userdata received:',userData);
    
    const result=await getUser(userData);
    
    if(result===null){
        res.status(404).send('user not found');
        
    }else{
  
    //the result contains the token
    res.json(result);

    }
}catch(error){
    console.log(error);
}


})

export default usersRoutes;
