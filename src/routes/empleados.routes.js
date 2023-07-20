import { Router } from "express";
import { getEmpleados, postEmpleados, putEmpleados, deleteEmpleados, getEmpleado } from "../controllers/empleados.controllers.js";

const router = Router();

router.get('/empleados', getEmpleados)

router.get('/empleados/:id', getEmpleado)

router.post('/empleados', postEmpleados)

router.patch('/empleados/:id', putEmpleados)

router.delete('/empleados/:id', deleteEmpleados)

export default router;