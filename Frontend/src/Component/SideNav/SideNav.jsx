import "./SideNav.css";
import NavElems from "./NavElems/NavElems";
import { useNavigate } from "react-router-dom";

function SideNav({ navigationElements }) {
    const navigate = useNavigate();

    return (
        <nav className="navContainer">
            <div className="NavLogoContainer" onClick={() => navigate("/")}>
                <div className="businessName"> S.S </div>
            </div>
            {navigationElements.map((element, index) => {
                return <NavElems key={index} {...element} />;
            })}
        </nav>
    );
}

export default SideNav;
