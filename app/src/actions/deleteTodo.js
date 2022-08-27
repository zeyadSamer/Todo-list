

const DELETE_TODO='DELETE_TODO';

const deleteTodoAction=(id)=>{
    return{
        type:DELETE_TODO,
        id
    }

}


export {deleteTodoAction,DELETE_TODO};