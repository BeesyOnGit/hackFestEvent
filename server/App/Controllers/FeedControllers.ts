import { Response, Request } from "express";
import dotenv from "dotenv";
import FeedModel from "../Models/Feed";
dotenv.config();

export const addFeed = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        const createFeed = await FeedModel.create(body);

        if (!createFeed) {
            return res.json({ code: "014" });
        }

        return res.json({ code: "61" });
    } catch (error) {
        console.log("🚀 ~ file: Feedication.ts:18 ~ addFeed ~ error:", error);
    }
};

export const getAllFeeds = async (req: Request, res: Response) => {
    try {
        const Feeds = await FeedModel.find();

        if (!Feeds || Feeds.length == 0) {
            return res.json({ code: "022" });
        }

        return res.json({ code: "62", data: Feeds });
    } catch (error) {
        console.log("🚀 ~ file: FeedsControllers.ts:39 ~ getFeeds ~ error:", error);
    }
};
