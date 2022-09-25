import getAllTodos from "../API-methods/get";

import {receiveTodosAction} from '../actions/receiveTodos'



const receiveTodos= async(store,url,token)=>{



    const savedTodos=await getAllTodos(url,token);
    store.dispatch(receiveTodosAction(savedTodos));

   
}


export default receiveTodos;