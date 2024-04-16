import { Response, Request } from "express";
import dotenv from "dotenv";
import SchedulsModel from "../Models/Schedule";
dotenv.config();

export const addSchedul = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        const createSchedul = await SchedulsModel.create(body);

        if (!createSchedul) {
            return res.json({ code: "010" });
        }

        return res.json({ code: "41" });
    } catch (error) {
        console.log("🚀 ~ file: AuthControllers.ts:20 ~ register ~ error:", error);
    }
};

export const getAllScheduls = async (req: Request, res: Response) => {
    try {
        const Scheduls = await SchedulsModel.find();

        if (!Scheduls || Scheduls.length == 0) {
            return res.json({ code: "020" });
        }

        return res.json({ code: "41", data: Scheduls });
    } catch (error) {
        console.log("🚀 ~ file: SchedulsControllers.ts:39 ~ getScheduls ~ error:", error);
    }
};
