

import fetch from "node-fetch";

const url='http://localhost:3000/todos'

const getAllTodos=async(url)=>{

  console.log('fetching start')
    
    try{
        
        const response=await fetch(url);
        
        const allTodos=await response.json();
      
 
        return allTodos;

    }catch(err)
    {
        console.log(Error,err)
        
      
    }


}

export default getAllTodos;



