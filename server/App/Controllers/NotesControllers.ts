import { Response, Request } from "express";
import dotenv from "dotenv";
import NotesModel from "../Models/Notes";
dotenv.config();

export const addNote = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        const createNote = await NotesModel.create(body);

        if (!createNote) {
            return res.json({ code: "09" });
        }

        return res.json({ code: "34" });
    } catch (error) {
        console.log("🚀 ~ file: AuthControllers.ts:20 ~ register ~ error:", error);
    }
};

export const getAllNotes = async (req: Request, res: Response) => {
    try {
        const Notes = await NotesModel.find();

        if (!Notes || Notes.length == 0) {
            return res.json({ code: "019" });
        }

        return res.json({ code: "33", data: Notes });
    } catch (error) {
        console.log("🚀 ~ file: NotesControllers.ts:39 ~ getNotes ~ error:", error);
    }
};
