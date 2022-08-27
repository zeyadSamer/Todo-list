
import {TOGGLE_TODO} from '../actions/toggleTodo.js';
import {ADD_TODO} from '../actions/addTodo.js';
import { DELETE_TODO } from '../actions/deleteTodo.js';
import { RECEIVE_TODOS } from '../actions/receiveTodos.js';

//state=[{type,todo{id,name,completed},{},{},{}]

const todosReducer=(state=[],action)=>{

    const targetTodo=action.todo;
 

    console.log('action:',action);

    if(action.type===ADD_TODO)
    {
        return state.concat([targetTodo]);
    }
    else if(action.type===DELETE_TODO){
        const targetId=action.id;
        return state.filter((todo) => todo.id!==targetId );

    }
    else if(action.type===TOGGLE_TODO){ 
        const targetId=action.id;
      
      
        
        return state.map((todo)=>{
           
            if(todo.id===targetId )
            {
                //toggling its completion state
                todo.completed=!todo.completed;

            }
            return todo;


        }
        );
    }
    else if(action.type===RECEIVE_TODOS)
    {
        //return all todooos received from api
        return action.savedTodos;



    }
   
    return state;

    








}

export default todosReducer;