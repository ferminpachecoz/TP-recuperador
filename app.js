// ************ Requires ************
const express = require('express');
const path = require('path');
const session = require('express-session')

// ************ Routes declare ************
const canciones = require('./routes/canciones.js');

const port = process.env.PORT || 3000;
const app = express();

//************ Listen port ************
app.listen(port, ()=>{
    console.log('Servidor corriendo en http://localhost:3000/');
});

// ************ View engine setup ************
//app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); 
app.set('views', 'views'); 


//************ Defaut dir set ************
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({
    secret: "esto es un secreto",
    resave: false,
    saveUninitialized: false
}))

// ************ Routes manager ************
app.use('/canciones', canciones);