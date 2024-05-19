const { Router } = require('express');
const {
    createCelda,
    getCeldas,
    getCeldaById,
    updateCelda,
    deleteCelda
} = require('../controllers/celda');

const router = Router();

router.post('/', createCelda);

router.get('/', getCeldas);

router.get('/:id', getCeldaById);

router.put('/:id', updateCelda);

router.delete('/:id', deleteCelda);

module.exports = router;
