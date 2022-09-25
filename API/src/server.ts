import express from "express";
import routes from "./routes/todos"
import bodyParser from "body-parser";
import cors from 'cors';
import usersRoutes from "./routes/users";

const app=express();

app.use(cors({

    origin:"*",
    methods:['GET','POST','DELETE','PATCH']
 

}))
// parse application/json
app.use(bodyParser.json())

app.use(routes);
app.use(usersRoutes);




const port:number =3000; //important
app.get('/',(req,res)=>{
    res.send("to access todos go to /todos");



})

app.listen(port,()=>{
    console.log(`listening on port:${port}`);
   
 


})

