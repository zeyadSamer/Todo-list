import express from "express";

import { Request,Response } from "express";
import addTodo from "../handlers/addTodo";
import deleteTodo from "../handlers/deleteTodo";

import { getTodo, getAllTodos } from "../handlers/readTodos";
import updateTodo from "../handlers/updateTodo";

import {authenticateJWT} from '../middleware/authenticateJWT';


const routes=express.Router(); 


//get all todos
routes.get('/todos:userId',authenticateJWT,async(req:Request,res:Response)=>{

   try{

    const userId=(req.params.userId as unknown) as number;

    const data=await getAllTodos(userId);

    res.json(data);
   }catch(err){

      throw new Error(`Error getting todos:${err}`);


   }


});

//get specific todo

routes.get('/todos/:id',authenticateJWT,async(req:Request,res:Response)=>{

  
try{
   const id=(req.params.id as unknown) as string;

   const data=await getTodo(id);

   res.json(data);



}catch(err)
{
   throw new Error(`Error getting todo:${err}`);
 
}

} );


//post todo
routes.post('/todos:userId',authenticateJWT,async(req:Request,res:Response)=>{






  try{ 
   const userId=(req.params.userId as unknown)as number;

   const dataSent=req.body;
 
  const addedResult=await addTodo(dataSent,userId); 

  res.json(addedResult);

  }catch(err){

   throw err;
  }
   
})





routes.delete('/todos/:id/:userId',authenticateJWT,async(req:Request,res:Response)=>{

   
   const userId=(req.params.userId as unknown )as number
   const id=(req.params.id as unknown ) as string;

   try{

      const deletedTodo=await deleteTodo(id,userId);

      res.json(deletedTodo);

   }
   catch(err)
   {
      throw new Error(`Error deleting todo:${err}`);



   }






})

routes.patch('/todos/:id/:userId',authenticateJWT,async(req:Request,res:Response)=>{

   const userId=(req.params.userId as unknown )as number;

   const id=(req.params.id as unknown) as string;
   const dataChanges=req.body;

 
   try{

   const updatedTodo =await updateTodo(id,dataChanges,userId);
   res.json(updatedTodo);



   }catch(err){
      throw err;

   }
   










})







export default routes;
