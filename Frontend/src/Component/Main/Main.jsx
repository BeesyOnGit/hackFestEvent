import "../Main/Main.css";
import ima from "../../Pages/Images/AA.jpg";
export default function Main() {
    return (
        <div className="MAIN" style={{ background: `url(${ima})` }}>
            <div style={{ width: "40%", zIndex: "30", marginTop: "-40Px", textAlign: "center" }}>
                <h1 style={{ marginBottom: "15px", fontSize: "30px", color: "white" }}>BIENVENU DANS NOTER DEPARTEMANT</h1>
                <p style={{ color: "blueviolet", fontWeight: "bold", fontSize: "20px" }}>
                    <b>Departement Computer Science</b>
                </p>
                <button className="animated-button" style={{ marginTop: "46px", opacity: "1" }}>
                    <span>Contect Us</span>
                    <span />
                </button>
            </div>
        </div>
    );
}
