
import Task from "./Task"
import {useEffect} from 'react'
import {useState} from 'react'
import '../css/TaskList.css'
import deleteTodo from '../dispatchers/deleteTodo'
import addTodo from '../dispatchers/addTodo'
import toggleTodo from "../dispatchers/toggleTodo"
const TaskList=({store,userData})=>{

    const [tasks,setTasks]=useState([]);


    useEffect(()=>{
    store.subscribe(()=>{

        setTasks(store.getState().todos);
    });
    } ,[tasks]);


    console.log('tasks',tasks);

    const completedTaskStyle={

        border:'4px solid green'
        
    }

    const uncompletedTaskStyle={
        border:'2px solid #111827'


    }





    const deleteTask=(todo)=>{

        deleteTodo(store,todo,userData);
        
        
      


    }


    const editTask=(todo,newTodo)=>{
        
         
        deleteTodo(store,todo,userData);

        addTodo(store,newTodo,userData);
     

    }


    const toggleTask=(oldtodo)=>{

       toggleTodo(store,oldtodo,userData);
      
    }



    return(
      
    <div className='Task-list'>
    <h3>Tasks</h3>
    {
        //mappping
        tasks.map((task)=>{

            return(

                <Task key={tasks.indexOf(task)}  task={task} deleteTask={deleteTask} editTask={editTask} toggleTask={toggleTask} 
                
                
                
                initialStyle={task.completed? completedTaskStyle:uncompletedTaskStyle}/>
            )



        })
        
    }
 

    </div>
    );

}
export default TaskList;