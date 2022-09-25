

import AddTaskBar from './AddTaskBar';
import '../App.css';
import TaskList from "./TaskList";
import { useEffect, useState,useContext } from 'react';
import receiveTodos from'../dispatchers/receiveTodos';

import {Link, useNavigate}from'react-router-dom';



function TodosPage({store}) {

    const navigate=useNavigate();

    const [loading,setLoading]=useState(true);
    const token =window.localStorage.getItem('token');
    const [userData,setUserData]=useState(JSON.parse(window.localStorage.getItem('userData')));
    let isAuthorized=window.localStorage.getItem('isAuthorized');
 
      useEffect(()=>{


        try{

            if(!isAuthorized){
              navigate('/register');
            }


         console.log(userData);
         console.log('window token',token)
        
         console.log('id',userData.id)
        receiveTodos(store,`http://localhost:3000/todos${userData.id}`,token);
        
        }catch(err){
    
          console.log('catched err',err);
    
    
    
        }
     
    
        
      });
    
    
    
      store.subscribe(()=>{
    
        console.log('the new state:',store.getState());
    
    
        const {loading}= store.getState(); 
        setLoading(loading);
        
    
    
    
      })
    
    
      
    
     
        return (
          <div >

            <div className='user-pannel'>
            <h3>{userData.email}</h3>
            <button className='logout'><Link to="/register">Log out</Link></button>
            </div>



          { loading===false && <div className='app'>
            <AddTaskBar store={store} userData={userData}/>
            <TaskList store={store} userData={userData}/>
             </div>
          }
          { loading===true && <h1>Loading...</h1>
    
    
    
          }
    
         </div>
      );
    
        }
    export default TodosPage;
    