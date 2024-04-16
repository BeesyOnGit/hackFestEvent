import express from "express";
import { AuthVerification } from "../MiddleWear/ServerFunctions";
import { addTraining, deleteTraining, editTraining, getTrainings } from "../Controllers/TrainningControllers";
const TrainingRoutes = express.Router();

TrainingRoutes.post("/", AuthVerification, addTraining);
TrainingRoutes.post("/edit/:id", AuthVerification, editTraining);
TrainingRoutes.delete("/:id", AuthVerification, deleteTraining);
TrainingRoutes.get("/", getTrainings);

export default TrainingRoutes;
