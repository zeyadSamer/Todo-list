import client from "../db-connection";
import {Todo} from '../types/todo'
import updateForTodo from "../types/updatesForTodo";
import { authenticateJWT } from "../middleware/authenticateJWT";
 

class Todos{

   public async read(userId:number):Promise<Todo[]>{

        try{

            const connection=await client.connect();
           

            const sqlQuery='SELECT * FROM todos where user_id=$1 ';

            const result =await connection.query(sqlQuery,[userId]);



            connection.release();

            return result.rows;

        }catch(err)
        {


            throw new Error(`error happened :${err}`);
        }


        



    }




    public async show(id:string):Promise<Todo>{

        try{

            const connection=await client.connect();
            
            const sqlQuery=`SELECT * FROM todos WHERE id=$1`;
            const result= await connection.query(sqlQuery,[id]);
            connection.release();

            

        return result.rows[0]; 

        }catch(err)
        {

            throw new Error(`error:${err}`);





        }




    }


    public async add(todo:Todo,userId:number):Promise<Todo>{
        try{
             
 
            const connection=await client.connect();
     
            const sqlQuery=`insert into todos(id,name,completed,user_id) values($1,$2,$3,$4) returning * `
            const {id,name,completed}=todo
            const result=await connection.query(sqlQuery,[id,name,completed,userId]);

            connection.release();

            console.log(result.rows[0])
            return result.rows[0];



        }catch(err){
            throw err; 





        }





    }





    //update

    async update(id:string,todo:updateForTodo,userId:number):Promise<Todo>{
  

        try{

            const connection=await client.connect();

             const sqlQuery=`UPDATE todos SET  name=$1, completed=$2  WHERE id=$3 AND user_id=$4 returning *`;

             const {name=todo.name,completed=todo.completed}=todo;

             let result=await connection.query(sqlQuery,[name,completed,id,userId]);

              connection.release();

          
       return result.rows[0]


        }catch(err){


            throw err;
        }





    }

 





    //delete

    async delete(id:string,userId:number):Promise<Todo>{

        try{

            const connection=await client.connect();
            const sqlQuery=`DELETE FROM todos WHERE id=$1 AND user_id=$2  returning *`;
            const result=await connection.query(sqlQuery,[id,userId]);
            connection.release();
            return result.rows[0];

        }catch(err){



            throw err;

        }



    }


}

export default Todos;