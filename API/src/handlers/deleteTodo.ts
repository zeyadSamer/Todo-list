import Todos from '../models/todos-model';


const deleteTodo=async(id:number)=>{

   try{
    const todos=new Todos();
    const deletedTodo=await todos.delete(id);

    return deletedTodo;
    
   }catch(err){

    throw err;
    
   }


}

export default deleteTodo;