import '../css/AddTaskBar.css'
import {useState} from 'react'
import addTodo from '../dispatchers/addTodo'

const AddTaskBar = ({store})=>{

    const [inputText,setInputText]=useState('');
   


    const generateId=()=>{
        
 return Math.floor(Date.now()/10000000) 
    }


    const handleOnChange=(event)=>{
        
    
        event.preventDefault();
        console.log(Date.now())
        
        const text=event.target.value;
        console.log(event.target.value)
        setInputText(text);
        event.target.value=inputText;

    }


    const handleOnSubmit=(event)=>{

        store.subscribe(()=>console.log('state:',store.getState()))
        addTodo(store,{id:generateId(),name:inputText,completed:false});
        event.preventDefault();
        setInputText('');
    };
        

    return(
        <div className="heading">

    
        <h1 className='app-heading'>Task List {(new Date).getFullYear()}</h1>
        <form onSubmit={handleOnSubmit}>
        <input id="task-input" type="text" placeholder="What do you have planned?" value={inputText} onChange={handleOnChange} />
        <input  id="task-submit" type="submit" value="Add task" />
        </form>
        </div>


    );









}


export default AddTaskBar;
