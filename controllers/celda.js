const Celda = require('../models/celda');
const { request, response } = require('express');

const createCelda = async (req = request, res = response) => {
    const { fechaPago, cliente, seccion, tipo, disponibilidad } = req.body;
    try {
        const celda = new Celda({
            fechaPago,
            cliente,
            seccion,
            tipo,
            disponibilidad
        });
        await celda.save();
        return res.status(200).json(celda);
    } catch (error) {
        console.error('Error al crear la celda:', error);
        return res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
};

const getCeldas = async (req = request, res = response) => {
    try {
        const celdas = await Celda.find();
        return res.status(200).json(celdas);
    } catch (error) {
        console.error('Error al obtener las celdas:', error);
        return res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
};

const getCeldaById = async (req = request, res = response) => {
    const { id } = req.params;

    try {
        const celda = await Celda.findById(id);
        if (!celda) {
            return res.status(404).json({ mensaje: 'Celda no encontrada' });
        }
        return res.status(200).json(celda);
    } catch (error) {
        console.error('Error al obtener la celda:', error);
        return res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
};

const updateCelda = async (req = request, res = response) => {
    const { id } = req.params;
    const { fechaPago, cliente, seccion, tipo, disponibilidad } = req.body;

    try {
        const celda = await Celda.findByIdAndUpdate(
            id,
            { fechaPago, cliente, seccion, tipo, disponibilidad },
            { new: true }
        );

        if (!celda) {
            return res.status(404).json({ mensaje: 'Celda no encontrada' });
        }

        return res.status(200).json(celda);
    } catch (error) {
        console.error('Error al actualizar la celda:', error);
        return res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
};

const deleteCelda = async (req = request, res = response) => {
    const { id } = req.params;

    try {
        const celda = await Celda.findByIdAndDelete(id);

        if (!celda) {
            return res.status(404).json({ mensaje: 'Celda no encontrada' });
        }

        return res.status(204).json();
    } catch (error) {
        console.error('Error al eliminar la celda:', error);
        return res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
};

module.exports = {
    createCelda,
    getCeldas,
    getCeldaById,
    updateCelda,
    deleteCelda
};
