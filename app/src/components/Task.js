import '../css/Task.css'
import {useState} from 'react';

import { useEffect } from 'react';

const Task=({task,deleteTask,editTask,toggleTask,initialStyle})=>{

    const [taskData,setTaskData]=useState(task);
    const [readOnlyState,setReadOnlyState]=useState(true);
    const [buttonText,setButtonText]=useState('Edit');
    const [taskStyle,setTaskStyle]=useState(initialStyle);
    const [finishButtonText,setFinishButtonText]=useState('finish')
    const [finishTextStyle,setFinishTextStyle]=useState({color:'crimson'});   


    const styles={
        complete:{
            border:'4px solid green'

        },
        incomplete:{
            border:'2px solid #111827'

        }



    }



    useEffect(()=>{
        if(taskData.completed)
        {
            setFinishButtonText('Done');
            setFinishTextStyle({color:'green'})

        }else{
            setFinishButtonText('finish');
            setFinishTextStyle({color:'crimson'})
        }
    },[]);


    
    const handleDeleteTask=()=>{

        deleteTask(task);

    }
    const toggleButtonState=()=>{
        if(buttonText==='Edit'){
            setButtonText('Save');
        }
        else{
            setButtonText('Edit');
        }
        
        
    }

    const toggleFinishButtonState=()=>{
        if(finishButtonText==='finish')
        {
            setFinishButtonText('Done');
            setFinishTextStyle({color:'green'})
        }else if(finishButtonText==='Done') {
            setFinishButtonText('finish');
            setFinishTextStyle({color:'crimson'})
        }

    }

    const toggleReadOnly=()=>{

        //special condition=> if the user hits the edit again after finishing editing we will submit the new data

        if(!readOnlyState){
            handleEditTask();
            


        }
    
        setReadOnlyState(!readOnlyState);

        

    }

    const handleEditTask=()=>{
    

        const newTodo={
            id:task.id,
            name:taskData,
            completed:task.completed
        }
        
        editTask(task,newTodo);
        
        setTaskData(newTodo);

            
       
    }
    const handleToggleTask=()=>{
        
        const newTodo={

            id:taskData.id,
            name:taskData.name,
            completed:! taskData.completed
        }

        toggleTask(taskData);//affect the store so the task list will be rerendered with the new task data
   
        const appliedStyle=taskData.completed? styles.complete:styles.incomplete;

        setTaskStyle(appliedStyle)

    
        
    }



    return(
   

        
        <div className="task">
            <div className='container' style={taskStyle}>

            <input type="text" 
            value={taskData.name} readOnly={readOnlyState} onChange={(event)=>{setTaskData(event.target.value)}} />
         
         <div className="buttons">
         <button style ={finishTextStyle} className='finish' onClick={()=>{
                toggleFinishButtonState();
                console.log('task is clicked');
                handleToggleTask();
                console.log('task style became',taskStyle);
                
              
                
            } }>{finishButtonText}</button>

          
            <button className="edit" onClick={()=>{
                toggleReadOnly();
                toggleButtonState();
            
            }}>{buttonText}</button>

            <button className="delete" onClick={handleDeleteTask}>Delete</button>

            </div>

             </div>

           



            </div>



    );
}

export default Task;