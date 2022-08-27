import Todos from '../models/todos-model';
import updateForTodo from '../types/updatesForTodo';

const updateTodo=async(id:number,todoUpdates:updateForTodo)=>{


    try{


        const todos=new Todos();
        const result=await todos.update(id,todoUpdates);
        return result;


    }catch(err){
        throw err;




    }






}

export default updateTodo;