import express from "express";
import routes from "./routes/todos"
import bodyParser from "body-parser";
import cors from 'cors';

const app=express();

app.use(cors({

    origin:" http://localhost:3001"



}))
// parse application/json
app.use(bodyParser.json())

app.use(routes);



const port:number =3000; //important
app.get('/',(req,res)=>{
    res.send("to access todos go to /todos");



})

app.listen(port,()=>{
    console.log(`listening on port:${port}`);
   
 


})

