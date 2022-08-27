import fetch from "node-fetch";


const patchTodo=async(url,data)=>{
    try{

    const response=await fetch(`${url}/${data.id}`,{

        method:'PATCH',
        headers:{
         'Content-Type':'application/json',



        },
        body:JSON.stringify({name:data.name,completed:data.completed}),







    });

    return response;


    }catch(err){

        throw new Error('cannot patch due to :',err)





    }


    


}

export default patchTodo;
