import { Response, Request } from "express";
import { AddToDailyActivity, EncriptedStringsCompare, Headers, TokenVerifier, generateToken } from "../MiddleWear/ServerFunctions";
import dotenv from "dotenv";
import AdminModel, { adminType } from "../Models/Users";
import { FilterQuery } from "mongoose";
dotenv.config();

export const login = async (req: Request, res: Response) => {
    const { body } = req;
    const { email, password } = body;
    const filter = { email };

    try {
        const isUser = await AdminModel.findOne(filter);

        if (!isUser) {
            return res.json({ code: "01" });
        }

        const { password: dbPass, _id } = isUser;

        if (!EncriptedStringsCompare(dbPass, password)) {
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
            return res.json({ code: "ET" });
        }

        const { id: _id } = verifiedToken;
        const filter: FilterQuery<adminType> = { _id };

        const findClient = await AdminModel.findOne(filter);
        if (findClient) {
            data.auth = true;
        }

        if (!findClient) {
            return res.json({ code: "E03" });
        }

        return res.json({ code: "S04", data });
    } catch (error: any) {
        console.log("🚀 ~ file: AuthControllers.ts:248 ~ userAuth ~ error:", error);
        return res.json({ code: "EO", error: error.message });
    }
};
