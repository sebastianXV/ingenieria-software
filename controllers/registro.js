const Registro = require('../models/registro');
const { request, response } = require('express');

const createRegistro = async (req = request, res = response) => {
    const { placa, celda } = req.body;
    try {
        const registro = new Registro({
            placa,
            celda
        });
        await registro.save();
        return res.status(200).json(registro);
    } catch (error) {
        console.error('Error al crear el registro:', error);
        return res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
};

const getRegistros = async (req = request, res = response) => {
    try {
        const registros = await Registro.find();
        return res.status(200).json(registros);
    } catch (error) {
        console.error('Error al obtener los registros:', error);
        return res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
};

const getRegistroById = async (req = request, res = response) => {
    const { id } = req.params;

    try {
        const registro = await Registro.findById(id);
        if (!registro) {
            return res.status(404).json({ mensaje: 'Registro no encontrado' });
        }
        return res.status(200).json(registro);
    } catch (error) {
        console.error('Error al obtener el registro:', error);
        return res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
};

const updateRegistro = async (req = request, res = response) => {
    const { id } = req.params;
    const { placa, celda } = req.body;

    try {
        const registro = await Registro.findByIdAndUpdate(
            id,
            { placa, celda },
            { new: true }
        );

        if (!registro) {
            return res.status(404).json({ mensaje: 'Registro no encontrado' });
        }

        return res.status(200).json(registro);
    } catch (error) {
        console.error('Error al actualizar el registro:', error);
        return res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
};

const deleteRegistro = async (req = request, res = response) => {
    const { id } = req.params;

    try {
        const registro = await Registro.findByIdAndDelete(id);

        if (!registro) {
            return res.status(404).json({ mensaje: 'Registro no encontrado' });
        }

        return res.status(204).json();
    } catch (error) {
        console.error('Error al eliminar el registro:', error);
        return res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
};

module.exports = {
    createRegistro,
    getRegistros,
    getRegistroById,
    updateRegistro,
    deleteRegistro
};
