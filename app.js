const express = require('express');
const { mongoConn } = require('./databases/connection');
const dotenv = require('dotenv').config();
const cors = require('cors');

mongoConn();

const app = express();

// Middlewares
app.use(express.json());
app.use(cors({
    origin: '*'
}));

// Rutas
const cliente = require('./routes/cliente');
const vehiculo = require('./routes/vehiculo');
const pago = require('./routes/pago');
const celda = require('./routes/celda');
const registro = require('./routes/registro');


app.use('/api/v1/cliente', cliente);
app.use('/api/v1/vehiculo', vehiculo);
app.use('/api/v1/pago', pago);
app.use('/api/v1/celda', celda);
app.use('/api/v1/registro', registro);


module.exports = app;
