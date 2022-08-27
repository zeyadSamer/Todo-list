import getAllTodos from "../API-methods/get";

import {receiveTodosAction} from '../actions/receiveTodos'



const receiveTodos= async(store,url)=>{



    const savedTodos=await getAllTodos(url);
    store.dispatch(receiveTodosAction(savedTodos));

   
}


export default receiveTodos;