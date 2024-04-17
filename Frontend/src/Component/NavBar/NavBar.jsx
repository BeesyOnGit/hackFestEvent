import "../NavBar/NavBar.css";
import { Link } from "react-router-dom";
import logo from "../../Pages/Images/logoClub.png";
export default function NavBar() {
    return (
        <div>
            <header style={{ display: "flex", justifyContent: "space-between", borderRadius: "0px 0px 10px 10px" }}>
                <div style={{ display: "flex", gap: "10px", marginTop: "10px", padding: "5px" }}>
                    <div>
                        <img src={logo} alt="" style={{ width: "60px", height: "60px", borderRadius: "50%", marginLeft: "13px" }} />
                    </div>
                    <div>
                        <h2>Informatique</h2>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>

                <Link to={"/login"}>
                    <button className="button">
                        <span className="button-content">Connexion </span>
                    </button>
                </Link>
            </header>
        </div>
    );
}
