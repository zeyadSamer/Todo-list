import client from "../db-connection";
import User from "../types/user";

import * as  bcrypt from 'bcrypt';

export class Users{
 

async add(user:User):Promise<User | null > {
    try{
        const {email,password}=user; 

        const connection=await client.connect();
        
        console.log(process.env.SALT_ROUNDS); 
        const salt=(process.env.SALT_ROUNDS as unknown)as string;
        
        const hashedPassword=bcrypt.hashSync(password,parseInt(salt));


        console.log('hashed:',hashedPassword);
 

        const query=`INSERT INTO users(email,password) VALUES($1,$2) returning *`;
    
        const result =await connection.query(query,[email,hashedPassword]);
        connection.release();
        return result.rows[0];
    
      }catch(err){
        //throw err;
        return null;
    
       

        




    }

   
}





async show(user:User):Promise< User | null >{


    try{
        const {email,password}=user;
        const connection=await client.connect();
        const query=`SELECT * FROM users WHERE email=$1`; 

        const result=await connection.query(query,[email]);
       
        connection.release();
       
        //check if user exist
        if(result.rows.length){
        const savedUser=result.rows[0];

         //check password   
         if(bcrypt.compareSync(password,savedUser.password)){

            //return userdata
            return result.rows[0];

         }

        }

        return null;

    
    }catch(err){
        return null;
        throw err;

    }
    

}






}

/*


eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE4IiwiZW1haWwiOiJoYXplbSIsInBhc3N3b3JkIjoiJDJiJDEyJG9OZ0xPRDh2bkxNNEYuM2RvNWhVVHU0VnFCSi5DQld3Z0ZMLkVHWm9ZbHBMWjdleUNvaUU2IiwiaWF0IjoxNjYzNzE0NzUyfQ.O0R4x21ZZG-L7-MVB38lWV2838PNP2WJZf9-GpwfvQM
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIxIiwiZW1haWwiOiJqYXlhbiIsInBhc3N3b3JkIjoiJDJiJDEyJEkycFVQVEV6c25xdmNOWTN2SzV6UXUvY0Q1OWJHcUVsRlB0WXZDQWFybFZoQnVBdVYuT0dDIiwiaWF0IjoxNjYzNzE1Mjk1fQ.2jv4PXmdsAi8IBxGjkk6vLE-OS6UYsFDAH-xgmjAIkg

*/

