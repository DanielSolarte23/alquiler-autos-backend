import Auto from "../models/autos.model.js";

export const getAutos = async (req, res) => {
  try {
    const Autos = await Auto.find();
    res.json(Autos);
  } catch (error) {
    return res
      .status(400)
      .json({ mensaje: "Error al obtener los autos", error: error.message });
    console.log(error);
  }
};

export const getAuto = async (req, res) => {
  try {
    const auto = await Auto.findById(req.params.id);
    if (!auto) return res.status(404).json({ mensaje: "Ruta no encontrada" });
    res.json(auto);
  } catch (error) {
    return res.status(500).json({ mensaje: "Error al obtener el auto" });
    console.log(error);
  }
};

export const agregarAuto = async (req, res) => {
  try {
    const { marca, modelo, año, disponibilidad } = req.body;

    const nuevoAuto = new Auto({
      marca,
      modelo,
      año,
      disponibilidad,
    });
    const guardarAuto = await nuevoAuto.save();
    
  } catch (error) {
    return res
      .status(500)
      .json({ mensaje: "Error al ingresar el auto", error });
    console.log(error);
  }
};

export const actualizarAuto = async (req, res) => {
  try {
    const auto = await Auto.findByIdAndUpdate(req.params.id.req.body, { new: true });
    if (!auto) return res.status(404).json({ mensaje: "Ruta no encontrada" });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ mensaje: "Error al actualizar el auto" });
    console.log(error);
  }
}

export const deleteAuto = async (req, res) => {
  try {
    const auto = await Auto.findByIdAndDelete(req.params.id);
    if (!auto) return res.status(404).json({ mensaje: "Ruta no encontrada" });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ mensaje: "Error al eliminar el auto" });
    console.log(error);
  }
}