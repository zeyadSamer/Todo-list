
import { ADD_TODO } from "../actions/addTodo"

import isSpacesString from "../helperFunctions/isSpacesString";





const emptyChecker=(store)=>(next)=>(action)=>{

        //check empty string
        if(action.type===ADD_TODO)
        {
           
            if(isSpacesString(action.todo.name))
            {
               
               return alert(`you can't do nothing, you have to do something`);
            }
        }

        return next(action);

        




}

export default emptyChecker;