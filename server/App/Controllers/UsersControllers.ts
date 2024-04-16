import { Response, Request } from "express";
import dotenv from "dotenv";
import UsersModel, { UsersType } from "../Models/Users";
dotenv.config();

export const deleteUser = async (req: Request, res: Response) => {
    const { params } = req;
    const { id } = params;
    const filter = { _id: id };
    try {
        const findUser = await UsersModel.findOne(filter);

        if (!findUser) {
            return res.json({ code: "018" });
        }

        const deletedUser = await findUser.delete();

        if (!deletedUser) {
            return res.json({ code: "022" });
        }

        return res.json({ code: "22" });
    } catch (error) {
        console.log("🚀 ~ file: UsersControllers.ts:25 ~ deleteUser ~ error:", error);
    }
};

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const Users = await UsersModel.find();

        if (!Users || Users.length == 0) {
            return res.json({ code: "018" });
        }

        return res.json({ code: "23", data: Users });
    } catch (error) {
        console.log("🚀 ~ file: UsersControllers.ts:39 ~ getUsers ~ error:", error);
    }
};
export const getUserDetail = async (req: Request, res: Response) => {
    const { params } = req;
    const { id } = params;
    try {
        const Users = await UsersModel.findOne({ _id: id });

        if (!Users) {
            return res.json({ code: "018" });
        }

        return res.json({ code: "23", data: Users });
    } catch (error) {
        console.log("🚀 ~ file: UsersControllers.ts:39 ~ getUsers ~ error:", error);
    }
};
