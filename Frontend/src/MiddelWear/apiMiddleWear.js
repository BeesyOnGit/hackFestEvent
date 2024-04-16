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
