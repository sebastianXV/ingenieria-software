const { Router } = require('express');
const {
    createPago,
    getPagos,
    getPagoById,
    updatePago,
    deletePago,
} = require('../controllers/pago');

const router = Router();

router.post('/', createPago);
router.get('/', getPagos);
router.get('/:id', getPagoById);
router.put('/:id', updatePago);
router.delete('/:id', deletePago);

module.exports = router;
