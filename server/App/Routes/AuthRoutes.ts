import express from "express";
import { login, register, userAuth } from "../Controllers/AuthControllers";
const AuthRoutes = express.Router();

AuthRoutes.post("/login/", login);
AuthRoutes.post("/register/", register);
AuthRoutes.get("/tokenValidation/", userAuth);

export default AuthRoutes;
