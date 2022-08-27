import { addTodoAction } from "../actions/addTodo";
import { deleteTodoAction } from "../actions/deleteTodo"
import removeTodo from '../API-methods/delete.js'
import url from '../config.js'

const deleteTodo=(store,todo)=>{

  

     

    store.dispatch(deleteTodoAction(todo.id));
 
    try{
        removeTodo(url,todo.id);
      store.dispatch(deleteTodoAction(todo.id));
    }catch(err)
    {
        alert('error happened deleting todo');
        store.dispatch(addTodoAction(todo));
        throw new Error('error:',err);
    }


}


export default deleteTodo;
