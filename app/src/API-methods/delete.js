import fetch from "node-fetch";



const removeTodo=async(url,id)=>{

    const response=await fetch(`${url}/${id}`,{ 
        method:'DELETE',
        headers:{ 
            'Content-type':'application/json'
        }





    }
    

    
    );
    return await response.json();
    

   

}

export default removeTodo;
