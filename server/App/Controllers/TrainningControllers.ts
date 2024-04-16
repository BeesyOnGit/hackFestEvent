import { Response, Request } from "express";
import { AddToDailyActivity, editModelWithSave } from "../MiddleWear/ServerFunctions";
import dotenv from "dotenv";
import TrainingModel from "../Models/Training";
import { logsType } from "../Models/Logs";
dotenv.config();

export const addTraining = async (req: Request, res: Response) => {
    const { body, headers, path } = req;
    const IP = headers["x-real-ip"]!;
    try {
        const newTraining = await TrainingModel.create(body);

        if (!newTraining) {
            return res.json({ code: "011" });
        }
        const { _id } = newTraining;
        const logObject: logsType = {
            //@ts-ignore
            ip: IP,
            route: path,
            action: "xp-add",
            target: _id.toString(),
        };
        AddToDailyActivity(logObject);

        return res.json({ code: "21" });
    } catch (error) {
        console.log("🚀 ~ file: AddControllers.ts:28 ~ addTraining ~ error:", error);
    }
};

export const editTraining = async (req: Request, res: Response) => {
    const { body, params, path, headers } = req;
    const IP = headers["x-real-ip"]!;
    const { id } = params;
    const filter = { _id: id };
    try {
        const findTraining = await TrainingModel.findOne(filter);

        if (!findTraining) {
            return res.json({ code: "010" });
        }

        editModelWithSave(findTraining, body);

        const editedTraining = await findTraining.save();

        if (!editedTraining) {
            return res.json({ code: "014" });
        }

        const logObject: logsType = {
            //@ts-ignore
            ip: IP,
            route: path,
            action: "xp-edit",
            target: id,
        };
        AddToDailyActivity(logObject);

        return res.json({ code: "22" });
    } catch (error) {
        console.log("🚀 ~ file: AddControllers.ts:52 ~ editTraining ~ error:", error);
    }
};
export const deleteTraining = async (req: Request, res: Response) => {
    const { params, path, headers } = req;
    const IP = headers["x-real-ip"]!;
    const { id } = params;
    const filter = { _id: id };
    try {
        const findTraining = await TrainingModel.findOne(filter);

        if (!findTraining) {
            return res.json({ code: "010" });
        }

        const deletedTraining = await findTraining.delete();

        if (!deletedTraining) {
            return res.json({ code: "013" });
        }

        const logObject: logsType = {
            //@ts-ignore
            ip: IP,
            route: path,
            action: "xp-delete",
            target: id,
        };
        AddToDailyActivity(logObject);

        return res.json({ code: "24" });
    } catch (error) {
        console.log("🚀 ~ file: AddControllers.ts:93 ~ deleteTraining ~ error:", error);
    }
};

export const getTrainings = async (req: Request, res: Response) => {
    const { headers, path } = req;
    const IP = headers["x-real-ip"]!;
    try {
        const Trainings = await TrainingModel.find();

        if (!Trainings || Trainings.length == 0) {
            return res.json({ code: "012" });
        }
        const logObject: logsType = {
            //@ts-ignore
            ip: IP,
            route: path,
            action: "xp-visite",
        };
        AddToDailyActivity(logObject);
        for (const iter in Trainings) {
            const { to } = Trainings[iter];
            if (to == 0) {
                Trainings[iter].to = Date.now();
            }
        }

        return res.json({ code: "23", data: Trainings });
    } catch (error) {
        console.log("🚀 ~ file: AddControllers.ts:119 ~ getTrainings ~ error:", error);
    }
};
