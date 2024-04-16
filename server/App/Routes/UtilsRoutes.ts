import express from "express";
import { AuthVerification } from "../MiddleWear/ServerFunctions";
import { AddTechno, deleteTechnologie, getTechnologies, visiteCount } from "../Controllers/Utils";
const UtilsRoutes = express.Router();

UtilsRoutes.post("/visite/", visiteCount);
UtilsRoutes.post("/techno/", AuthVerification, AddTechno);
UtilsRoutes.delete("/techno/:id", AuthVerification, deleteTechnologie);
UtilsRoutes.get("/techno/", getTechnologies);

export default UtilsRoutes;
