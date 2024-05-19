const { Schema, model } = require('mongoose');

const RegistroSchema = Schema({
    placa: {
        type: String,
        required: true,
        unique: true
    },
    fechaInicio: {
        type: Date,
        default: Date.now()
    },
    celda: {
        type: Schema.Types.ObjectId,
        ref: 'Celda',
        required: true
    }
});

module.exports = model('Registro', RegistroSchema);
