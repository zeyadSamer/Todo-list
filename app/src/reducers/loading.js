import {RECEIVE_TODOS} from "../actions/receiveTodos";

const loadingReducer=(state=true,action)=>{

    

    if(action.type===RECEIVE_TODOS)
    {
       
        return false;
    }

    return state;






}

export default loadingReducer;