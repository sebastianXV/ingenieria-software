const { Schema, model } = require('mongoose');

const PagoSchema = Schema({
    fechaPago: {
        type: Date,
        required: [true, 'Fecha de pago requerida']
    },
    cliente: {
        type: Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true
    }
});

module.exports = model('Pago', PagoSchema);
