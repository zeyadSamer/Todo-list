import '../css/register.css';
import {useState} from 'react';
import fetch from 'node-fetch';
import {useNavigate}from'react-router-dom';


const SignUpForm=()=>{



    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const [formFunction,setFormFunction]=useState('Sign Up');




    

    const navigate=useNavigate();
    const baseUrl='http://localhost:3000/user';

    const signUp=async()=>{
        
        try{
            
        const response =await fetch(baseUrl,
        {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                email,
                password
            })


        });

        const result= await response.json();
        console.log(result);
        return result;
        

    }catch(err){

        console.log(err);
        return false;
    }





        }

    const signIn=async()=>{


        try{
        //method get
        const response =await fetch(`${baseUrl}/authenticate`,
        {
        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
        
        body:JSON.stringify(
         {
            email,
            password

          }
          
          ),

        }
        );

        const result= await response.json();

        console.log(result);

        return result;



        }catch(err){


            console.log(err);
            return false;

        }

    }

const handleSignUp=async(event)=>{


    if(email!==undefined && password!==undefined){
        event.preventDefault();
                
        console.log('data to be sent:',email,password);
        const signedUpUser=await signUp();

        if(signedUpUser )

         setFormFunction('Sign In');
         setEmail('');
         setPassword('');
        }else{

            alert('failed to sign up');
            


        }
}

const handleSignIn=async(event)=>{
    if(email!='' && password!=''){
        event.preventDefault()   
        console.log('data to be sent:',email,password);

        const signedInUser=await signIn();


         //if sign in is successful
        if(signedInUser){

            window.localStorage.setItem('isAuthorized',true);
            window.localStorage.setItem('token',signedInUser.token);
          
            window.localStorage.setItem('userData',JSON.stringify({
                token:signedInUser.token,
                id:signedInUser.id,
                email:signedInUser.email,
            }))



          navigate('/todos',{
            replace:true
          });

        }else{

            alert('user not found');

            setEmail('');
            setPassword('');



        }
        
    }

}



    return (
        <div className='register'>
           
            <form >  

             <header>     
            <h2>{formFunction}</h2>
            </header>

            <div className='form-content'>
            <label >email</label>
            <br/>
            <input type="text" id="username" name="username" placeholder='Your username' value={email} required={true}
            onChange={
                (event)=>{
                    setEmail(event.target.value);
                    
                    console.log(email);
                    
    
                }
    
            }
            />
            <br/>
            <label>Password</label>
            <br/>
            <input type="password" id="password" name="password" placeholder='Your password' value={password} required={true}
            

            onChange={(event)=>{
                console.log(password);
                setPassword(event.target.value);
                

            }

              
            }
                     
            
            />
            </div> 

           
        <div className='buttons'>
       
              

              {

                (formFunction==='Sign Up') && <button className='function-change' onClick={ 
                async(event)=>{  
                    setFormFunction('Sign In');
                    setEmail('');
                    setPassword('');
                  }}>
                already have an account?
              </button>

              }


            <button className='sign-button' onClick={
            async(event)=>{
               
            
              if(formFunction==='Sign Up'){
                handleSignUp(event);
           


              }else if(formFunction==='Sign In'){

                handleSignIn(event);
              

              }


                } }>{formFunction}</button>
        </div>
                
            </form>
        
        
        </div>



    )


















}

export default SignUpForm;

