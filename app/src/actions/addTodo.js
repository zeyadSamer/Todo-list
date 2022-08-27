

const ADD_TODO='ADD_TODO';

const addTodoAction=(todo)=>{


    return{
        type:ADD_TODO,
        todo
    }
}


export {addTodoAction,ADD_TODO};