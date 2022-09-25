import  Todos from '../models/todos-model'


const getAllTodos=async(userId:number)=>{

    try{ 

        const todos=new Todos();

        const todosData=await todos.read(userId);
        return todosData;


    }catch(err){

        throw err;



    }

 

}





const getTodo=async(id:string)=>{

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