import {useState,createContext } from 'react';
import {BrowserRouter,Route,Link,Routes} from 'react-router-dom';
import TodosPage from './components/TodosPage';
import SignUpForm from './components/SignUpForm';



function App({store}) {


  const [userData,setUserData]=useState({})



   const getUserData=(data)=>{
     setUserData(window.localStorage.getItem(userData))
  }



   
  return(

    <BrowserRouter>
    <Routes>
  

      
      <Route exact path={'/'}
            element={<SignUpForm />} />
 
   
     
       <Route exact path={'/register'}
            element={<SignUpForm />} />
 
    <Route exact path='/todos'
      element={<TodosPage store={store}  userData={userData}/> } />
  
    
  
    </Routes>
    </BrowserRouter>
  )


  


  }
export default App;
