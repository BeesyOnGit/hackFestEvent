import React from "react";
import { useNavigate } from "react-router-dom";

function Sidebar({ navElems }) {
    const navigate = useNavigate();

    return (
        <div>
            {navElems &&
                navElems.map((el, i) => {
                    const { path, name } = el;
                    return (
                        <div
                            key={i}
                            onClick={() => {
                                navigate(path);
                            }}
                        >
                            {name}
                        </div>
                    );
                })}
        </div>
    );
}

export default Sidebar;
