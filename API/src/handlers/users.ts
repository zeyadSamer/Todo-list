
import {Users} from '../models/users-model'
import User from '../types/user';
import jwt from 'jsonwebtoken';

export const addUser=async(user:User)=>{

    const users=new Users();
    const result=await users.add(user);
   
    if(result===null){
        return null;

    }

    let token = jwt.sign(result,(process.env.TOKEN_SECRET as unknown)as string);
    console.log(token);
   
    const userData={
        id:result.id,
        email:result.email,
        token
   }

    return userData;


}

export const getUser=async(user:User)=>{
    const users=new Users();
    const result=await users.show(user);
    if(result===null){
        return null;
    }
    //we will give the user the token if he was found in the db with the right data



    const tokenSecret=(process.env.TOKEN_SECRET as unknown)as string;

    const token=jwt.sign(result,tokenSecret);

   const userData={
        id:result.id,
        email:result.email,
        token
   }

    return userData;

}


