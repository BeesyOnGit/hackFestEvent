import express from "express";
import { AuthVerification } from "../MiddleWear/ServerFunctions";
import { deleteUser, getAllUsers, getUserDetail } from "../Controllers/UsersControllers";
const UserRoutes = express.Router();

UserRoutes.delete("/:id", AuthVerification, deleteUser);
UserRoutes.get("/", getAllUsers);
UserRoutes.get("/:id", getUserDetail);

export default UserRoutes;
