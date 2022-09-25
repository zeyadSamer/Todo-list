import Todos from '../models/todos-model';


const deleteTodo=async(id:string,userId:number)=>{

   try{
    const todos=new Todos();
    const deletedTodo=await todos.delete(id,userId);

    return deletedTodo;
    
   }catch(err){
 
    throw err;
    
   }


}

export default deleteTodo;