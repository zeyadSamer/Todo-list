

import { ADD_TOKEN,addToken } from "../actions/addToken";

const tokenReducer=(state='',action)=>{

    if(action.type=ADD_TOKEN){
        return action.token;
 
    }

     return state;


}

export default tokenReducer;
