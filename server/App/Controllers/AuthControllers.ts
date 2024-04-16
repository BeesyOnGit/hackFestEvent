import { Response, Request } from "express";
import { Headers, TokenVerifier, generateToken } from "../MiddleWear/ServerFunctions";
import dotenv from "dotenv";
import UserModel, { UsersType } from "../Models/Users";
import { FilterQuery } from "mongoose";
dotenv.config();

export const register = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        const createUser = await UserModel.create(body);

        if (!createUser) {
            return res.json({ code: "07" });
        }

        return res.json({ code: "12" });
    } catch (error) {
        console.log("🚀 ~ file: AuthControllers.ts:20 ~ register ~ error:", error);
    }
};
export const login = async (req: Request, res: Response) => {
    const { body } = req;
    const { id, ddn } = body;
    const filter = { _id: id };

    try {
        const isUser = await UserModel.findOne(filter);

        if (!isUser) {
            return res.json({ code: "01" });
        }

        const { ddn: dbDdn, _id } = isUser;

        if (ddn !== dbDdn) {
            return res.json({ code: "02" });
        }

        const token = generateToken(_id.toString());

        return res.json({ code: "11", data: token });
    } catch (error) {
        console.log("🚀 ~ file: AuthControllers.ts:16 ~ login ~ error:", error);
    }
};

export const userAuth = async (req: Request, res: Response) => {
    const { headers }: { headers: Headers } = req;
    const { authorizationtoken }: Headers = headers;
    try {
        let data = { auth: false };

        if (!authorizationtoken) {
            return res.json({ code: "01b" });
        }
        const verifiedToken: any = TokenVerifier(authorizationtoken);

        if (!verifiedToken) {
            return res.json({ code: "05" });
        }

        const { id: _id } = verifiedToken;
        const filter: FilterQuery<UsersType> = { _id };

        const findUser = await UserModel.findOne(filter);
        if (!findUser) {
            return res.json({ code: "01" });
        }

        data.auth = true;

        return res.json({ code: "13", data });
    } catch (error: any) {
        console.log("🚀 ~ file: AuthControllers.ts:248 ~ userAuth ~ error:", error);
        return res.json({ code: "EO", error: error.message });
    }
};
