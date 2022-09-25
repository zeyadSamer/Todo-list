import Todos from '../models/todos-model';
import updateForTodo from '../types/updatesForTodo';

const updateTodo=async(id:string,todoUpdates:updateForTodo,userId:number)=>{


    try{


        const todos=new Todos();
        const result=await todos.update(id,todoUpdates,userId);
        return result;


    }catch(err){
        throw err;




    }






}

export default updateTodo;