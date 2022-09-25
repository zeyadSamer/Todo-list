import { toggleTodoAction } from "../actions/toggleTodo";
import patchTodo from '../API-methods/patch';
import url from '../config.js'

const toggleTodo=(store,todo,userData)=>{

    try{

  

        store.dispatch(toggleTodoAction(todo.id));

        const newTodo={
            id:todo.id,
            name:todo.name,
            completed:todo.completed
        }


        patchTodo(url,newTodo,userData);






    }catch(err)
    {
        
        store.dispatch(toggleTodoAction(todo.id));
        return alert('error happened toggling todo');
        

    }


    


}

export default toggleTodo;
