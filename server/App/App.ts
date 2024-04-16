import bodyParser from "body-parser";
import express, { Request, Response, NextFunction } from "express";
import http from "http";
import dotenv from "dotenv";
import compression from "compression";
import cors from "cors";
import { DbConnection } from "./DBConnection";
import AuthRoutes from "./Routes/AuthRoutes";
import UserRoutes from "./Routes/UsersRoutes";
import NotesRoutes from "./Routes/NotesRoutes";
import SchedulRoutes from "./Routes/SchedulRoutes";
import JustifRoutes from "./Routes/JustifRoutes";
import FeedRoutes from "./Routes/FeedRoutes";

dotenv.config();

//Constatnts definition
const app: any = express();
const PORT = process.env.PORT;
http.createServer(app);

//Variable deffinition

//Db connection//

DbConnection("telemcenInfoDepDB", "mongodb://127.0.0.1:27017");
//Midelware
app.use((req: Request, res: Response, next: NextFunction) => {
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});
app.use(
    compression({
        level: 6,
    })
);

//App upload limite upgrade
app.use(bodyParser.json({ limit: "20mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

//Comment me Befor deployment

app.use(bodyParser.json());
app.use(cors({ origin: "*" }));
// app.use(cors({ origin: ["https://arabatii.com/"] }));

// uncomment ME  befor deployment
// import helmet from'helmet'
// app.use(helmet())

// os.networkInterfaces()

//************************************ # API CODE # ****************************************//

//************************************ # API ROUTES # ****************************************//
app.use("/auth", AuthRoutes);
app.use("/user", UserRoutes);
app.use("/note", NotesRoutes);
app.use("/schedul", SchedulRoutes);
app.use("/justif", JustifRoutes);
app.use("/feed", FeedRoutes);

//************************************ # SERVER PORT SET # ****************************************//

app.listen(PORT, () => {
    console.log(`Server live on port ${PORT}`);
});
