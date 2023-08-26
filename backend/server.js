const express=require('express');
const mongoose=require('mongoose');
const path=require('path');
const bodyParser=require('body-parser');
const app=express();
const cors=require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(cookieParser());

const dbURI=process.env.MONGODB_URI;
const db_Name=process.env.DB_NAME;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, dbName: db_Name })
.then((res)=>console.log("Connected to MongoDB database"))
.catch((err)=>console.log("Error in connection to MongoDB"))


const port=process.env.PORT;
app.get('/',(req,res)=>{
    res.send('Hello World');
})

const server = app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})