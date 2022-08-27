import { addTodoAction } from "../actions/addTodo";
import url from '../config.js';
import postTodo from '../API-methods/post'
import { deleteTodoAction } from "../actions/deleteTodo";

const addTodo=(store,todo)=>{



    try{
        store.dispatch(addTodoAction(todo));
      
      //we are checking if the todo is added to the store first after passing all middleware functions then we post the request
 
      if(store.getState().todos.includes(todo))
        {
            postTodo(url,todo);

        }
        else{

           throw new Error('error happened');
        }
        

       



    }catch(err){
        alert('error happened adding todo');
        store.dispatch(deleteTodoAction(todo.id));




    }







}

export default addTodo;
