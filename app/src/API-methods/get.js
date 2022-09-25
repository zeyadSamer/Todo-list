

import fetch from "node-fetch";


const getAllTodos=async(url,token)=>{

  console.log('fetching start')
    
    try{
        
        const response=await fetch(url,
            {
        headers:{
            'Authorization': 'Bearer ' + token,
        
        } 

        }
        );
        
        const allTodos=await response.json();
      
 
        return allTodos;

    }catch(err)
    {
        console.log(Error,err)
        
      
    }


}

export default getAllTodos;



