// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDb from "./db/index.js";


dotenv.config({
    path: './env'
})


connectDb()
.then(() =>{
    app.listen(process.env.PORT || 8000, () => {
     console.log(`Server is running at port : ${process.env.PORT}`);
    })

    app.on("Error", (error)=>{
        console.log("Error: ",error);
        throw error
    })
})
.catch((err)=>{
    console.log("Mongo db connection failed !!!", err);
})









/*
import express from "express"
const app = express();

( async() =>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error", (error)=> {
            console.log("Error: ",error);
            throw error;
        })

        app.listen(process.env.PORT || 3000, ()=>{
            console.log(`App is lintening on port ${process.env.PORT}`);
        })
    }catch(error){
        console.error("ERROR: ",error);
        throw error;
    }
})()
*/
