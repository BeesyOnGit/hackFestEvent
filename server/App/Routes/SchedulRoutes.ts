import express from "express";
import { AuthVerification } from "../MiddleWear/ServerFunctions";
import { addSchedul, getAllScheduls } from "../Controllers/SchedulControllers";
const SchedulRoutes = express.Router();

SchedulRoutes.post("/", AuthVerification, addSchedul);
SchedulRoutes.get("/", getAllScheduls);

export default SchedulRoutes;
