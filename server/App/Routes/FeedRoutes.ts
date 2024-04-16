import express from "express";
import { AuthVerification } from "../MiddleWear/ServerFunctions";
import { addFeed, getAllFeeds } from "../Controllers/FeedControllers";
const FeedRoutes = express.Router();

FeedRoutes.post("/", AuthVerification, addFeed);
FeedRoutes.get("/", getAllFeeds);

export default FeedRoutes;
