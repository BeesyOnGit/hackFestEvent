import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
// import { autUserVerif } from "../MiddleWear/ApiMiddleWear";
import { Contexts } from "../Contexts/Contexts";
import { autUserVerif } from "../MiddelWear/apiMiddleWear";

function RouteProtection({ children }) {
    const { refresh } = Contexts();
    const navigate = useNavigate();
    const [showProtected, setShowProtected] = useState(false);

    const { pathname } = useLocation();

    useEffect(() => {
        if (!window.localStorage.user_token) {
            return navigate("/");
        }
        (async () => {
            const res = await autUserVerif();
            const { code, data } = res;
            const { auth, isProf } = data || {};
            if (auth) {
                setShowProtected(true);
            }
            if (pathname.includes("prof") && !isProf) {
                return <Navigate to="/stud" />;
            }

            return <Navigate to="/prof" />;
            // return setShowProtected(authentified);
        })();
    }, []);

    useEffect(() => {
        if (!window.localStorage.user_token) {
            return navigate("/");
        }
        (async () => {
            const res = await autUserVerif();
            const { code, data } = res;
            const { auth } = data || {};

            if (auth) {
                setShowProtected(true);
            }

            return <Navigate to="/" />;
            // return setShowProtected(authentified);
        })();
    }, [refresh]);

    if (!window.localStorage.user_token) {
        <Navigate to="/" />;
        return;
    }

    if (showProtected == false) {
        <Navigate to="/" />;
        return;
    }
    if (showProtected) {
        return children;
    }
}

export default RouteProtection;
