import express from "express";
import { AuthVerification } from "../MiddleWear/ServerFunctions";
import { addJustif, getAllJustifs } from "../Controllers/JustificationControllers";
const JustifRoutes = express.Router();

JustifRoutes.post("/", AuthVerification, addJustif);
JustifRoutes.get("/", getAllJustifs);

export default JustifRoutes;
