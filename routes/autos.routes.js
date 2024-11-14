import { Router } from "express";
import { getAuto, getAutos, agregarAuto, deleteAuto, actualizarAuto } from "../controller/autos.controller.js";

const router = Router();

router.get('/autos', getAutos);
router.get('/autos/:id', getAuto);
router.post('/autos', agregarAuto);
router.delete('/autos/:id', deleteAuto);
router.put('/autos/:id', actualizarAuto);

export default router;