const { Schema, model } = require('mongoose');

const CeldaSchema = Schema({
    seccion: {
        type: String,
        required: [true, 'Sección de la celda requerida']
    },
    tipo: {
        type: String,
        required: [true, 'Tipo de celda requerido']
    },
    disponibilidad: {
        type: Boolean,
        default: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    },
    fechaActualizacion: {
        type: Date,
        default: Date.now()
    }
});

module.exports = model('Celda', CeldaSchema);
