var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
var pool = require('./modelos/db');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
//aca
/* pool.query('select * from alumnos').then(function (resultados) {
    console.log(resultados)
})
var obj = {
    nombre: 'juan',
    apellido: 'lopez',
    trabajo: 'docente',
    edad: 38,
    salario: 1500,
    mail: 'juan@gmail.com'
}
pool.query('insert into alumnos set?', [obj]).then(function (resultados) {
    console.log(resultados)
})

var id = 2;
var objeto = {
    nombre: 'pablo',
    apellido: 'gomez'
}
pool.query('update alumnoss set ? where id_emp_?', [obj, id]).then(function (resultados) {
    console.log(resultados)
}) */

module.exports = app;
