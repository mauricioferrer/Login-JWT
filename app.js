require('dotenv').config();; //método para buscar o arquivo dotenv
const express = require('express');
const app = express();
const userRouter = require('./routes/userRouter')
const adminRouter = require("./routes/adminRouter")
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_CONNECTION_URL, 
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true
    },
    (error) => {
        if (error)
            console.log(error) //Dará um erro se colocar outra linha abaixo desse console.log para ser executado
        else
            console.log("Mongo Connected")
    })

app.use('/user', express.json(), userRouter); //express.json vai pegar dados da requisição e jogar no body

app.use('/admin', express.json(), adminRouter)

app.listen(process.env.PORT, () => { console.log("Server Running")})