import { Response, Request } from "express";
import dotenv from "dotenv";
import JustifModel from "../Models/Justif";
dotenv.config();

export const addJustif = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        const createJustif = await JustifModel.create(body);

        if (!createJustif) {
            return res.json({ code: "011" });
        }

        return res.json({ code: "51" });
    } catch (error) {
        console.log("🚀 ~ file: Justification.ts:18 ~ addJustif ~ error:", error);
    }
};

export const getAllJustifs = async (req: Request, res: Response) => {
    try {
        const Justifs = await JustifModel.find();

        if (!Justifs || Justifs.length == 0) {
            return res.json({ code: "021" });
        }

        return res.json({ code: "52", data: Justifs });
    } catch (error) {
        console.log("🚀 ~ file: JustifsControllers.ts:39 ~ getJustifs ~ error:", error);
    }
};
