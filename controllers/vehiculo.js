const Vehiculo = require('../models/vehiculo');
const { request, response } = require('express');

const createVehiculo = async (req = request, res = response) => {
    const { placa, modelo, color, detalles, cliente, celda } = req.body;
    try {
        const vehiculo = new Vehiculo({
            placa,
            modelo,
            color,
            detalles,
            cliente,
            celda
        });
        await vehiculo.save();
        return res.status(200).json(vehiculo);
    } catch (error) {
        console.error('Error al crear el vehículo:', error);
        return res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
}

const getVehiculo = async (req = request, res = response) => {
    try {
        const vehiculos = await Vehiculo.find();
        return res.status(200).json(vehiculos);
    } catch (error) {
        console.error('Error al obtener los vehículos:', error);
        return res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
};

const getVehiculoById = async (req = request, res = response) => {
    const { id } = req.params;
    try {
        const vehiculo = await Vehiculo.findById(id);
        if (!vehiculo) {
            return res.status(404).json({ mensaje: 'Vehículo no encontrado' });
        }
        return res.status(200).json(vehiculo);
    } catch (error) {
        console.error('Error al obtener el vehículo:', error);
        return res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
};

const updateVehiculo = async (req = request, res = response) => {
    const { id } = req.params;
    const updateData = req.body;

    try {
        const vehiculo = await Vehiculo.findByIdAndUpdate(id, updateData, { new: true });

        if (!vehiculo) {
            return res.status(404).json({ mensaje: 'Vehículo no encontrado' });
        }

        return res.status(200).json(vehiculo);
    } catch (error) {
        console.error('Error al actualizar el vehículo:', error);
        return res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
};

const deleteVehiculo = async (req = request, res = response) => {
    const { id } = req.params;

    try {
        const vehiculo = await Vehiculo.findByIdAndDelete(id);

        if (!vehiculo) {
            return res.status(404).json({ mensaje: 'Vehículo no encontrado' });
        }

        return res.status(204).json();
    } catch (error) {
        console.error('Error al eliminar el vehículo:', error);
        return res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
};

module.exports = {
    createVehiculo,
    getVehiculo,
    getVehiculoById,
    updateVehiculo,
    deleteVehiculo,
};
