import jwt from 'jsonwebtoken';
import {Request, Response} from 'express';
 
export const authenticateJWT=(req:Request,res:Response,next: () => void)=>{

try{

    const authorizationHeader=(req.headers.authorization as unknown)as string;

    // authorization header = bearer tokenvalue
    const token=authorizationHeader.split(' ')[1];
    console.log('token:',token)
    const tokenSecret=(process.env.TOKEN_SECRET as unknown)as string;

    jwt.verify(token,tokenSecret);

      next();
    
}catch(err){
    res.status(401);
    res.json('right token must be provided');
}


}
