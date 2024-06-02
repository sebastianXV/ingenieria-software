const { Schema, model } = require('mongoose');

const ClienteSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true,
        unique: true
    },
    direccion: {
        type: String,
        required: true,
        unique: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now
    },
    fechaActualizacion: {
        type: Date,
        default: new Date()
    }
});

module.exports = model('Cliente', ClienteSchema);
