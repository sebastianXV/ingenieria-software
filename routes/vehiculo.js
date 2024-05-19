const { Router } = require('express');
const {
    createVehiculo,
} = require('../controllers/vehiculo');

const router = Router();

router.post('/', createVehiculo);

module.exports = router;
