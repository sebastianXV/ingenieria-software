const { Schema, model } = require('mongoose');

const VehiculoSchema = Schema({
    placa: {
        type: String,
        required: [true, 'La placa del vehículo es requerida']
    },
    modelo: {
        type: String,
        required: [true, 'El modelo del vehículo es requerido']
    },
    color: {
        type: String,
        required: [true, 'El color del vehículo es requerido']
    },
    detalles: {
        type: String
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    },
    fechaActualizacion: {
        type: Date,
        default: Date.now()
    },
    cliente: {
        type: Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true
    },
    celda: {
        type: Schema.Types.ObjectId,
        ref: 'Celda',
        required: true
    }
});

module.exports = model('Vehiculo', VehiculoSchema);
