const { Router } = require('express');
const {
    createVehiculo,
    getVehiculo,
    getVehiculoById,
    updateVehiculo,
    deleteVehiculo,
} = require('../controllers/vehiculo');

const router = Router();

router.post('/', createVehiculo);
router.get('/', getVehiculo);
router.get('/:id', getVehiculoById);
router.put('/:id', updateVehiculo);
router.delete('/:id', deleteVehiculo);

module.exports = router;
