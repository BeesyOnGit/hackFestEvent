import express from "express";
import { AuthVerification } from "../MiddleWear/ServerFunctions";
import { addProject, deleteProject, editProject, getProjectDetail, getProjects } from "../Controllers/ProjectsControllers";
const ProjectRoutes = express.Router();

ProjectRoutes.post("/", AuthVerification, addProject);
ProjectRoutes.post("/edit/:id", AuthVerification, editProject);
ProjectRoutes.delete("/:id", AuthVerification, deleteProject);
ProjectRoutes.get("/", getProjects);
ProjectRoutes.get("/:id", getProjectDetail);

export default ProjectRoutes;
