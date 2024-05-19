const Pago = require("../models/pago");
const { request, response } = require("express");

const createPago = async (req = request, res = response) => {
  const { fechaPago, cliente } = req.body;
  try {
    const pago = new Pago({
      fechaPago,
      cliente,
    });
    await pago.save();
    return res.status(200).json(pago);
  } catch (error) {
    console.error("Error al crear el pago:", error);
    return res.status(500).json({ mensaje: "Error interno del servidor" });
  }
};

const getPagos = async (req = request, res = response) => {
  try {
    const pagos = await Pago.find();
    return res.status(200).json(pagos);
  } catch (error) {
    console.error("Error al obtener los pagos:", error);
    return res.status(500).json({ mensaje: "Error interno del servidor" });
  }
};

const getPagoById = async (req = request, res = response) => {
  const { id } = req.params;
  try {
    const pago = await Pago.findById(id);
    if (!pago) {
      return res.status(404).json({ mensaje: "Pago no encontrado" });
    }
    return res.status(200).json(pago);
  } catch (error) {
    console.error("Error al obtener el pago:", error);
    return res.status(500).json({ mensaje: "Error interno del servidor" });
  }
};

const updatePago = async (req = request, res = response) => {
  const { id } = req.params;
  const { fechaPago, cliente } = req.body;
  try {
    const pago = await Pago.findByIdAndUpdate(
      id,
      { fechaPago, cliente },
      { new: true }
    );
    if (!pago) {
      return res.status(404).json({ mensaje: "Pago no encontrado" });
    }
    return res.status(200).json(pago);
  } catch (error) {
    console.error("Error al actualizar el pago:", error);
    return res.status(500).json({ mensaje: "Error interno del servidor" });
  }
};

const deletePago = async (req = request, res = response) => {
  const { id } = req.params;
  try {
    const pago = await Pago.findByIdAndDelete(id);
    if (!pago) {
      return res.status(404).json({ mensaje: "Pago no encontrado" });
    }
    return res.status(204).json();
  } catch (error) {
    console.error("Error al eliminar el pago:", error);
    return res.status(500).json({ mensaje: "Error interno del servidor" });
  }
};

module.exports = {
  createPago,
  getPagos,
  getPagoById,
  updatePago,
  deletePago,
};
