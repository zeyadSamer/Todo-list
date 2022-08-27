import  Todos from '../models/todos-model'


const getAllTodos=async()=>{

    try{ 

        const todos=new Todos();

        const todosData=await todos.read();
        return todosData;


    }catch(err){

        throw err;



    }



}





const getTodo=async(id:number)=>{

    try{


        const todos=new Todos();
        const todosData=await todos.show(id);
        return todosData;



    }catch(err)
    {
        throw err;


      

    }


    



}

export {getAllTodos,getTodo}