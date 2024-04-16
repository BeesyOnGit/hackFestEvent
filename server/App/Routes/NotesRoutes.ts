import express from "express";
import { AuthVerification } from "../MiddleWear/ServerFunctions";
import { addNote, getAllNotes } from "../Controllers/NotesControllers";
const NotesRoutes = express.Router();

NotesRoutes.post("/", AuthVerification, addNote);
NotesRoutes.get("/", getAllNotes);

export default NotesRoutes;
