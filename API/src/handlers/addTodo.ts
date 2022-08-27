import  Todos from '../models/todos-model'
import { Todo } from '../types/todo';

const addTodo=async(todo:Todo)=>{
try{
    const todos=new Todos();

    const addedTodosData=await todos.add(todo);

    return addedTodosData;


}catch(err){
    throw err;

    
}



}

export default addTodo;