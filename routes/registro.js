const { Router } = require('express');
const {
    createRegistro,
    getRegistros,
    getRegistroById,
    updateRegistro,
    deleteRegistro
} = require('../controllers/registro');

const router = Router();

router.post('/', createRegistro);
router.get('/', getRegistros);
router.get('/:id', getRegistroById);
router.put('/:id', updateRegistro);
router.delete('/:id', deleteRegistro);

module.exports = router;
