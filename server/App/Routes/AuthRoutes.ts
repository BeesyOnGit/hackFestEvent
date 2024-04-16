import express from "express";
import { login, userAuth } from "../Controllers/AuthControllers";
const AuthRoutes = express.Router();

AuthRoutes.post("/login/", login);
AuthRoutes.get("/tokenValidation/", userAuth);

export default AuthRoutes;
