import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "../../Component/SideNav/SideNav";

function Prof(props) {
    const navElems = [
        { icon: "ii", name: "notes", link: "/prof/notes" },
        { icon: "ii", name: "nouvelles", link: "/prof/feed" },
        { icon: "ii", name: "reservation", link: "/prof/reservation-lab" },
    ];
    return (
        <div style={{ width: "100%", height: "100vh", display: "flex" }}>
            <SideNav navigationElements={navElems} />
            <Outlet />
        </div>
    );
}

export default Prof;
