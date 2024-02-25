import { Router } from "express";

import {
    createPenguin,
    deletePenguin,
    updatePenguin,
    getAllUsers,
    getUserByName
} from "../controller/penguinFn"

const penguinRoutes = Router();

penguinRoutes.post("/", createPenguin);

penguinRoutes.post("/", getAllUsers);

penguinRoutes.post("/:id", deletePenguin);

penguinRoutes.post("/:id", updatePenguin);

penguinRoutes.post("/:id", getUserByName);

export default penguinRoutes;
