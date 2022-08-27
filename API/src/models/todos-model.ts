import client from "../db-connection";
import {Todo} from '../types/todo'
import updateForTodo from "../types/updatesForTodo";

 

class Todos{

   public async read():Promise<Todo[]>{

        try{

            const connection=await client.connect();
           

            const sqlQuery='SELECT * FROM todos ';

            const result =await connection.query(sqlQuery);



            connection.release();

            return result.rows;

        }catch(err)
        {


            throw new Error(`error happened :${err}`);
        }


        



    }




    public async show(id:number):Promise<Todo>{

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


    public async add(todo:Todo):Promise<Todo>{
        try{
            

            const connection=await client.connect();
     
            const sqlQuery=`insert into todos(id,name,completed) values($1,$2,$3) returning * `
            const {id,name,completed}=todo
            const result=await connection.query(sqlQuery,[id,name,completed]);

            connection.release();

            console.log(result.rows[0])
            return result.rows[0];



        }catch(err){
            throw err;





        }





    }





    //update

    async update(id:number,todo:updateForTodo):Promise<Todo>{
  

        try{

            const connection=await client.connect();

             const sqlQuery=`UPDATE todos SET  name=$1, completed=$2  WHERE id=$3 returning *`;

             const {name=todo.name,completed=todo.completed}=todo;

             let result=await connection.query(sqlQuery,[name,completed,id]);

              connection.release();

          
       return result.rows[0]


        }catch(err){


            throw err;
        }





    }

 





    //delete

    async delete(id:number):Promise<Todo>{

        try{

            const connection=await client.connect();

            const sqlQuery=`DELETE FROM todos WHERE id=$1 returning *`;
            const result=await connection.query(sqlQuery,[id]);
            connection.release();
            return result.rows[0];

        }catch(err){



            throw err;

        }



    }


}

export default Todos;