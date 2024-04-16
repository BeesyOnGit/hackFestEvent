import axios from "axios";

const url = "";
const tok = window.localStorage.token;
export const autUserVerif = async () => {
    try {
        const res = await axios.get(`${url}/auth`, { headers: { authauthorizationtoken: tok } });

        if (!res) {
            return console.log("no response received");
        }
        return res.data;
    } catch (error) {
        console.log("🚀 ~ file: apiMiddleWear.js:5 ~ autUserVerif ~ error:", error);
    }
};
export const addNote = async (body) => {
    try {
        const res = await axios.post(`${url}/note`, body, { headers: { authauthorizationtoken: tok } });

        if (!res) {
            return console.log("no response received");
        }
        return res.data;
    } catch (error) {
        console.log("🚀 ~ file: apiMiddleWear.js:26 ~ addNote ~ error:", error);
    }
};
export const getNote = async (body) => {
    try {
        const res = await axios.get(`${url}/note`, { headers: { authauthorizationtoken: tok } });

        if (!res) {
            return console.log("no response received");
        }
        return res.data;
    } catch (error) {
        console.log("🚀 ~ file: apiMiddleWear.js:26 ~ addNote ~ error:", error);
    }
};
