
const TOGGLE_TODO='TOGGLE_TODO';

const toggleTodoAction=(id)=>{

    return {
        type:TOGGLE_TODO,
        id
    }
    

}

export {toggleTodoAction,TOGGLE_TODO};
