import { Request, Response } from "express";
import axios from "axios";
import LogsModel, { logsType } from "../Models/Logs";
import dotenv from "dotenv";
import { AddToDailyActivity } from "../MiddleWear/ServerFunctions";
import TechnologiesModel, { technologiesType } from "../Models/Technologis";
dotenv.config();
export const visiteCount = async (req: Request, res: Response) => {
    const IpApiKey = process.env.IP_API_KEY;
    const { headers } = req;
    //@ts-ignore
    const ip: any = headers["x-real-ip"];
    const currentTime = Date.now();

    const filter = { doer: ip, action: "visite" };
    try {
        const visit = await LogsModel.find(filter);

        if (visit.length > 0) {
            const { createdAt } = visit[visit.length - 1];

            if (currentTime - createdAt! < 600000) {
                return;
            }
        }

        const ipInf = await axios.get(`https://api.apilayer.com/ip_to_location/${ip}`, {
            headers: { apikey: IpApiKey },
        });

        if (!ipInf) {
            return console.log("🚀 ~ file: Utils.ts:30 ~ visiteCount ~ ipInf:", "NO REPONSE FROM API");
        }

        const { data } = ipInf || {};
        const { country_name, region_name, city, country_code, flag } = data || {};

        const log: logsType = {
            ip,
            action: "visite",
            route: "/",
            adInfo: {
                country_name,
                region_name,
                city,
                country_code,
                flag,
            },
        };

        AddToDailyActivity(log);
    } catch (error) {
        console.log("🚀 ~ file: WilayaCommuneControllers.ts:7 ~ getCommunes ~ error:", error);
    }
};

export const AddTechno = async (req: Request, res: Response) => {
    const { body }: { body: technologiesType } = req;
    try {
        const createTechno = await TechnologiesModel.create(body);

        if (!createTechno) {
            return res.json({ code: "023" });
        }

        return res.json({ code: "41" });
    } catch (error) {
        console.log("🚀 ~ file: Utils.ts:91 ~ AddTechno ~ error:", error);
    }
};

export const deleteTechnologie = async (req: Request, res: Response) => {
    const { params } = req;
    const { id } = params;
    const filter = { _id: id };
    try {
        const findTechnologie = await TechnologiesModel.findOne(filter);

        if (!findTechnologie) {
            return res.json({ code: "018" });
        }

        const deletedTechnologie = await findTechnologie.delete();

        if (!deletedTechnologie) {
            return res.json({ code: "022" });
        }

        return res.json({ code: "43" });
    } catch (error) {
        console.log("🚀 ~ file: Utils.ts:114 ~ deleteTechnologie ~ error:", error);
    }
};

export const getTechnologies = async (req: Request, res: Response) => {
    try {
        const Technologies = await TechnologiesModel.find();

        if (!Technologies || Technologies.length == 0) {
            return res.json({ code: "018" });
        }

        return res.json({ code: "42", data: Technologies });
    } catch (error) {
        console.log("🚀 ~ file: Utils.ts:128 ~ getTechnologies ~ error:", error);
    }
};
