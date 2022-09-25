import fetch from "node-fetch";



const removeTodo=async(url,id,userData)=>{

    const response=await fetch(`${url}/${id}/${userData.id}`,{ 
        method:'DELETE',
        headers:{ 
            'Content-type':'application/json',
            'Authorization': 'Bearer ' + userData.token,
        }



    }
    

    
    );
    return await response.json();
    

   

}

export default removeTodo;
