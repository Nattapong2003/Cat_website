const express = require('express');
const mysql = require('mysql');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');


const app = express()
app.use("/api/post", postRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/user", userRoutes)

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "MyDb"
});

app.get("/test", (req,res) =>{
    res.json("It work!")
})

app.listen(3600, ()=>{
    console.log("Connected!!!!")
})

db.connect( (error) => {
    if(error){ console.log(error);}
    else{ console.log("mysql Connected...");}
})