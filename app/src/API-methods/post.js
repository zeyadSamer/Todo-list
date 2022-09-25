

import fetch from "node-fetch";
import patchTodo from "./patch";


const postTodo=async(url,todoData,token)=>{



    try{
    const response= await fetch(url,{
        
     method:'POST',
     headers:{

        'Content-Type':'application/json',
        'Authorization': 'Bearer ' + token,

        },
    
        body:JSON.stringify(todoData)



     }   );

     return response;

    }catch(err){

    
     throw new Error('failed to post due to',err);

    }
        
        
}

export default postTodo