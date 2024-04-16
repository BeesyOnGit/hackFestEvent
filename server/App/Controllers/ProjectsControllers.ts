import { Response, Request } from "express";
import { AddToDailyActivity, editModelWithSave } from "../MiddleWear/ServerFunctions";
import dotenv from "dotenv";
import { logsType } from "../Models/Logs";
import ProjectModel from "../Models/Projects";
dotenv.config();

export const addProject = async (req: Request, res: Response) => {
    const { body, headers, path } = req;
    const IP = headers["x-real-ip"]!;
    try {
        const newProject = await ProjectModel.create(body);

        if (!newProject) {
            return res.json({ code: "015" });
        }
        const { _id } = newProject;
        const logObject: logsType = {
            //@ts-ignore
            ip: IP,
            route: path,
            action: "portfolio-add",
            target: _id.toString(),
        };
        AddToDailyActivity(logObject);

        return res.json({ code: "31" });
    } catch (error) {
        console.log("🚀 ~ file: ProjectsControllers.ts:29 ~ addProject ~ error:", error);
    }
};

export const editProject = async (req: Request, res: Response) => {
    const { body, params, path, headers } = req;
    const IP = headers["x-real-ip"]!;
    const { id } = params;
    const filter = { _id: id };
    try {
        const findProject = await ProjectModel.findOne(filter);

        if (!findProject) {
            return res.json({ code: "016" });
        }

        editModelWithSave(findProject, body);

        const editedProject = await findProject.save();

        if (!editedProject) {
            return res.json({ code: "017" });
        }

        const logObject: logsType = {
            //@ts-ignore
            ip: IP,
            route: path,
            action: "portfolio-edit",
            target: id,
        };
        AddToDailyActivity(logObject);

        return res.json({ code: "32" });
    } catch (error) {
        console.log("🚀 ~ file: ProjectsControllers.ts:64 ~ editProject ~ error:", error);
    }
};

export const deleteProject = async (req: Request, res: Response) => {
    const { params, path, headers } = req;
    const IP = headers["x-real-ip"]!;
    const { id } = params;
    const filter = { _id: id };
    try {
        const findProject = await ProjectModel.findOne(filter);

        if (!findProject) {
            return res.json({ code: "016" });
        }

        const deletedProject = await findProject.delete();

        if (!deletedProject) {
            return res.json({ code: "019" });
        }

        const logObject: logsType = {
            //@ts-ignore
            ip: IP,
            route: path,
            action: "portfolio-delete",
            target: id,
        };
        AddToDailyActivity(logObject);

        return res.json({ code: "33" });
    } catch (error) {
        console.log("🚀 ~ file: ProjectsControllers.ts:96 ~ deleteProject ~ error:", error);
    }
};

export const getProjects = async (req: Request, res: Response) => {
    const { headers, path } = req;
    const IP = headers["x-real-ip"]!;
    try {
        const Projects = await ProjectModel.find()
            .populate({
                path: "technologies",
                select: "icon name",
                model: "Technologies",
            })
            .select("-description -skills -role -createdAt");

        if (!Projects || Projects.length == 0) {
            return res.json({ code: "016" });
        }
        const logObject: logsType = {
            //@ts-ignore
            ip: IP,
            route: path,
            action: "portfolio-visite",
        };
        AddToDailyActivity(logObject);

        return res.json({ code: "34", data: Projects });
    } catch (error) {
        console.log("🚀 ~ file: ProjectsControllers.ts:119 ~ getProjects ~ error:", error);
    }
};

export const getProjectDetail = async (req: Request, res: Response) => {
    const { headers, path, params } = req;
    const { id } = params;
    const IP = headers["x-real-ip"]!;
    try {
        const Project = await ProjectModel.findOne({ _id: id })
            .populate({
                path: "technologies",
                select: "icon name",
                model: "Technologies",
            })
            .populate({
                path: "skills",
                select: "name",
                model: "Technologies",
            });

        if (!Project) {
            return res.json({ code: "016" });
        }
        const logObject: logsType = {
            //@ts-ignore
            ip: IP,
            route: path,
            target: id,
            action: "portfolio-visite",
        };
        AddToDailyActivity(logObject);

        return res.json({ code: "34", data: Project });
    } catch (error) {
        console.log("🚀 ~ file: ProjectsControllers.ts:163 ~ getProjectDetail ~ error:", error);
    }
};
