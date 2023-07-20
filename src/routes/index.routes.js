import { Router } from "express";

import { getIndex } from "../controllers/index.controller.js";

const router = Router();

router.get('/ping', getIndex)
 

export default router;