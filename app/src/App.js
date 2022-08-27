import logo from './logo.svg';
import AddTaskBar from './components/AddTaskBar';
import './App.css';
import TaskList from "./components/TaskList";
import { useEffect, useState } from 'react';
import receiveTodos from'./dispatchers/receiveTodos'




function App({store}) {

  
const [loading,setLoading]=useState(true);

  useEffect(()=>{


    try{
    receiveTodos(store,'http://localhost:3000/todos/');
    
    }catch(err){

      console.log('catched err',err);



    }
 

    
  },[]);



  store.subscribe(()=>{

    console.log('the new state:',store.getState());


    const {loading}= store.getState(); 
    setLoading(loading);
    



  })


  
  

 

 

 
    return (
      <div>
      { loading===false && <div className='app'>
        <AddTaskBar store={store}/>
        <TaskList store={store}/>
         </div>
      }
      { loading===true && <h1>Loading...</h1>



      }

     </div>
  );

    }
export default App;
