// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import mongoose from "mongoose";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({path: './.env'})
const PORT = process.env.PORT

connectDB()
.then(() => {
    app.on("error" ,(error) => {
        console.log("error listening event, express app unable to talk", error);
        throw(error)
    } )
    app.listen(PORT || 3000, () => {
        console.log(`Server is running at port http://localhost:${PORT}`)
    })
})
.catch((error) => {
    console.log("db connection error: ", error);
})














// CONNECTING DB IN index.js 

// import { DB_NAME  } from "./constants";
// import express from "express";
// const app = express();
// ; (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", (error) => {
//             console.log("ERRR: ", error);
//             throw (error)
//         })
//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening on port: ${process.env.PORT}`)
//         })

//     } catch (error) {
//         console.error("Error: ", error);
//         throw error
//     }
// })()
