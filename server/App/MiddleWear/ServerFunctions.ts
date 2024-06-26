import { NextFunction, Request, Response } from "express";
import { IncomingHttpHeaders } from "http";
import jwt from "jsonwebtoken";
import cryptoJs from "crypto-js";
import dotenv from "dotenv";
import { writeFile } from "fs";
import AdminModel from "../Models/Users";

dotenv.config();

dotenv.config();

const env = process.env.ENVIRONEMENT;
const SITE_URL = process.env.SITE_URL;
export type Headers = IncomingHttpHeaders & {
    isAdmin?: boolean;
    verifiedID?: string;
    userType?: number;
    userLocation?: string;
    userPass?: string;
    authorizationtoken?: string;
};

export const AuthVerification = async (req: Request, res: Response, next: NextFunction) => {
    const { headers }: any = req;
    const { originalUrl } = req;
    const { authorizationtoken } = headers;

    if (!authorizationtoken) {
        return res.json({ code: "01b" });
    }

    try {
        const clearToken: any = jwt.verify(authorizationtoken, process.env.TOKEN_ENCRIPTION_KEY!);

        const { id: _id } = clearToken;

        const GeneralFilter = { _id };

        const isUser = await AdminModel.findOne(GeneralFilter);

        if (!isUser) {
            return res.json({ code: "01" });
        }

        headers.verifiedID = isUser._id;

        return next();
    } catch (error) {
        console.log("🚀 ~ file: ServerFunctions.ts:64 ~ AuthVerification ~ error:", error);
    }
};

// export const verrifiySocket = async (socket: any, token: string, socketId: string) => {
//     const clearToken: any = TokenVerifier(token);

//     const { id: _id } = clearToken;

//     const GeneralFilter = { _id };

//     const isUser = await AdminModel.findOne(GeneralFilter);

//     if (!isUser) {
//         return;
//     }
//     const { , isAdmin } = isUser;

//     if (isAdmin) {
//         return { ...socket, [socketId]: "all" };
//     }

//     return { ...socket, [socketId]: location };
// };

export const TokenVerifier = (token: string) => {
    try {
        if (token == undefined) {
            return "no token";
        }
        return jwt.verify(token, process.env.TOKEN_ENCRIPTION_KEY!);
    } catch (error) {
        console.log("🚀 ~ file: ServerFunctions.ts:93 ~ TokenVerifier ~ error:", error);
    }
};

export const generateToken = (id: string) => {
    try {
        if (!id) {
            return "id and password are Mendatory";
        }
        return jwt.sign({ id }, process.env.TOKEN_ENCRIPTION_KEY!);
    } catch (error) {
        console.log("🚀 ~ file: ServerFunctions.ts:101 ~ generateToken ~ error:", error);
    }
};

export const urlWitoutParams = (url: string) => {
    const urlArr = url.split("/");
    if (urlArr.length <= 4) {
        return urlArr.join("/");
    }
    urlArr.pop();

    return urlArr.join("/");
};

export const editModelWithSave = (model: any, edit: any) => {
    for (const key in edit) {
        model[key] = edit[key];
    }
    return model;
};

export const EncriptedStringsCompare = (firstString: string, clearStr: string) => {
    const clearFirtStr = cryptoJs.AES.decrypt(firstString, process.env.PASSWORD_ENCRIPTION_KEY!).toString(cryptoJs.enc.Utf8);

    return clearFirtStr == clearStr;
};

export const doubleEncriptedStringsCompare = (encriptedString: string, encriptedString2: string) => {
    const clearFirtStr = cryptoJs.AES.decrypt(encriptedString, process.env.PASSWORD_ENCRIPTION_KEY!).toString(cryptoJs.enc.Utf8);
    const clearSecondStr = cryptoJs.AES.decrypt(encriptedString2, process.env.PASSWORD_ENCRIPTION_KEY!).toString(cryptoJs.enc.Utf8);

    return clearFirtStr == clearSecondStr;
};

export const urltoArrayBuffer = ({ url }: { url: string }) => {
    var data = url.replace(/^data:image\/\w+;base64,/, "");
    return Buffer.from(data, "base64");
};

export const FilesSavingAsync: Function = ({ dataArray, fileName, savePath }: { dataArray: Array<string>; fileName: string; savePath?: string }) => {
    let PhotoArray: Array<string> = [];
    console.log("🚀 ~ file: ServerFunctions.ts:10 ~ env:", env);

    const Path = env == "dev" ? "C:/Users/THINKBOOK/Desktop/RealAuto/Media" : "/home/RealAutoMedia";
    // const VPSPath = ;
    const Url = `${SITE_URL}/api/localinfos/realAutoMedia`;
    // const WebUrl = "http://165.232.71.118:3000/api/localinfos/realAutoMedia";

    return new Promise((resolve) => {
        dataArray.forEach(async (url: string, index: number) => {
            const finalName = `${fileName}-${index + 1}.jpeg`;
            const FInalUrl = `${Path}/${finalName}`;
            PhotoArray.push(`${Url}/${finalName}`);
            writeFile(FInalUrl, urltoArrayBuffer({ url: url }), () => {
                if (index + 1 == dataArray.length) {
                    return resolve(PhotoArray);
                }
            });
        });
    });
};

export const urlToFile = ({ url, name }: { url: any; name?: String }) => {
    const arr = url.split(",");
    // console.log(arr)
    const mime = arr[0].match(/:(.*?);/)[1];
    const data = arr[1];

    const dataStr = atob(data);
    let n = dataStr.length;
    let dataArr = new Uint8Array(n);
    return dataArr;
    // while (n--) {
    //     dataArr[n] = dataStr.charCodeAt(n);
    // }

    // let file = new File([dataArr], `${name}.jpg`, { type: mime });

    // return file;
};

export function filterEditedObject(befor: any, edited: Object) {
    let keysedited = [];

    for (const key in edited) {
        keysedited.push(key);
    }

    let beforEditAbstract: any = {};

    for (const key of keysedited) {
        beforEditAbstract = { ...beforEditAbstract, [key]: befor[key] || "newly added" };
    }

    // for (const key in befor) {
    //     if (keysedited.includes(key)) {
    //         beforEditAbstract = { ...beforEditAbstract, [key]: befor[key] };
    //     }
    // }
    return beforEditAbstract;
}

export const compareObjects = (original: any, edited: any) => {
    let originalFields: any = {};
    let editedFields: any = {};

    for (const key in edited) {
        if (typeof edited[key] != "object" && original[key] && original[key] != edited[key]) {
            originalFields = { ...originalFields, [key]: original[key] };
            editedFields = { ...editedFields, [key]: edited[key] };
        }

        if (typeof edited[key] != "object" && !original[key]) {
            originalFields = { ...originalFields, [key]: "did not exist" };
            editedFields = { ...editedFields, [key]: edited[key] };
        }

        if (edited[key].length && !original[key]) {
            originalFields = { ...originalFields, [key]: "did not exist" };
            editedFields = { ...editedFields, [key]: edited[key] };
        }

        if (edited[key].length && original[key]) {
            originalFields = { ...originalFields, [key]: original[key] };
            editedFields = { ...editedFields, [key]: edited[key] };
        }

        if (typeof edited[key] == "object" && original[key] && original[key] != edited[key] && !edited[key].length) {
            const { originalFields: ofResult, editedFields: efResult } = compareObjects(original[key], edited[key]) as any;
            originalFields = { ...originalFields, [key]: ofResult };
            editedFields = { ...editedFields, [key]: efResult };
        }
        if (typeof edited[key] == "object" && !original[key] && original[key] != edited[key] && !edited[key].length) {
            const { originalFields: ofResult, editedFields: efResult } = compareObjects(original[key], edited[key]) as any;
            originalFields = { ...originalFields, [key]: "did not exist" };
            editedFields = { ...editedFields, [key]: efResult };
        }
    }

    return { originalFields, editedFields };
};

export const editObjectWithSimilarObject = (original: any, edited: any) => {
    let newObject = {};

    for (const key in edited) {
        if (!original[key]) {
            original = { ...original, [key]: edited[key] };
        }
    }

    for (const key in original) {
        if (original[key].length && edited[key] && edited[key].length) {
            newObject = { ...newObject, [key]: edited[key] };
        }

        if (original[key].length && (!edited[key] || !edited[key].length)) {
            newObject = { ...newObject, [key]: original[key] };
        }

        if (typeof original[key] != "object" && edited[key]) {
            newObject = { ...newObject, [key]: edited[key] };
        }

        if (typeof original[key] != "object" && !edited[key]) {
            newObject = { ...newObject, [key]: original[key] };
        }

        if (typeof original[key] == "object" && edited[key] && !original[key].length) {
            newObject = { ...newObject, [key]: editObjectWithSimilarObject(original[key], edited[key]) };
        }

        if (typeof original[key] == "object" && !edited[key] && !original[key].length) {
            newObject = { ...newObject, [key]: original[key] };
        }
    }
    return newObject;
};

export const editObjectWithFields = (original: any, edited: any) => {
    let newObject = {};

    for (const key in original) {
        if (typeof original[key] != "object" && edited[key]) {
            newObject = { ...newObject, [key]: edited[key] };
        }
        if (typeof original[key] != "object" && !edited[key]) {
            newObject = { ...newObject, [key]: original[key] };
        }
        if (typeof original[key] == "object") {
            newObject = { ...newObject, [key]: editObjectWithFields(original[key], edited) };
        }
    }

    return newObject;
};

export const spreadObjectToItskeys = (object: any) => {
    let spreadedObject = {};
    for (const key in object) {
        if (object[key][0]) {
            spreadedObject = { ...spreadedObject, [key]: [...object[key]] };
        }

        if (typeof object[key] == "object" && !object[key][0]) {
            const objectSpreaded: any = spreadObjectToItskeys(object[key]);
            spreadedObject = { ...spreadedObject, ...objectSpreaded };
        }
        if (typeof object[key] != "object") {
            spreadedObject = { ...spreadedObject, [key]: object[key] };
        }
    }
    return spreadedObject;
};

export const cleanPhoneNumber = (number: any) => {
    const numTab = number.split("");

    for (let i = 0; i < 4; i++) {
        numTab.shift();
    }
    // console.log(numTab);
    let finalNum = "0";

    numTab.forEach((e: any) => {
        finalNum += e;
    });

    return finalNum;
};

export const randomIdGenerator = (length: number) => {
    let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
    let id = "";
    for (let i = 0; i < length; i++) {
        id += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return id;
};
