import express from "express";

import { Request,Response } from "express";
import addTodo from "../handlers/addTodo";
import deleteTodo from "../handlers/deleteTodo";

import { getTodo, getAllTodos } from "../handlers/readTodos";
import updateTodo from "../handlers/updateTodo";



const routes=express.Router(); 


//get all todos
routes.get('/todos',async(req:Request,res:Response)=>{

   try{
   const data=await getAllTodos();

   res.json(data);
   }catch(err){

      throw new Error(`Error getting todos:${err}`);




   }


});

//get specific todo

routes.get('/todos/:id',async(req:Request,res:Response)=>{

   const id=parseInt(req.params.id);
try{
   const data=await getTodo(id);




   res.json(data);



}catch(err)
{
   throw new Error(`Error getting todo:${err}`);
 
}

} );


routes.post('/todos',async(req:Request,res:Response)=>{


  const dataSent=req.body;




  try{ 

  const addedResult=await addTodo(dataSent); 

  res.json(addedResult);

  }catch(err){

   throw err;
  }
   







})





routes.delete('/todos/:id',async(req:Request,res:Response)=>{



   const id=parseInt(req.params.id);

   try{

      const deletedTodo=await deleteTodo(id);

      res.json(deletedTodo);

   }
   catch(err)
   {
      throw new Error(`Error deleting todo:${err}`);



   }






})

routes.patch('/todos/:id',async(req:Request,res:Response)=>{

   const id=parseInt(req.params.id);
   const dataChanges=req.body;

 
   try{

   const updatedTodo =await updateTodo(id,dataChanges);
   res.json(updatedTodo);



   }catch(err){
      throw err;

   }
   










})







export default routes;
