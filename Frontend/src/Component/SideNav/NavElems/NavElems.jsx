import React from "react";
import "./NavElems.css";
import { useLocation, useNavigate } from "react-router-dom";
// import { urlPath } from "../../../MiddleWear/ClientFunctions";

function NavElems({ icon, name, link }) {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const isSelected = {
        [pathname]: " ",
        [link]: "navSelected",
    };

    return (
        <div className={"navElemContainer " + isSelected[pathname]} onClick={() => navigate(link)}>
            <i className={icon}> </i>
            <div> {name} </div>
        </div>
    );
}

export default NavElems;
