import Side from "../../Component/Side/Side";
import fem from "../../Pages/Images/Femme.jpg";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Profile/Profile.css";
export default function Profile() {
    return (
        <div>
            <div style={{ width: "80%", position: "absolute", left: "20%", top: "0" }}>
                <div className="pr">
                    <FontAwesomeIcon icon={faAddressCard} style={{ marginRight: "10px" }} />
                    Profile
                </div>

                <div style={{ display: "flex", gap: "85px", marginLeft: "100px", padding: "20px", marginTop: "20px", justifyContent: "center" }}>
                    <div style={{ width: "15%" }}>
                        <img src={fem} alt="" style={{ width: "170Px", height: "130px", borderRadius: "20%" }} />
                    </div>
                    <div style={{ width: "85%", marginLeft: "30px" }} className="lo">
                        <h2
                            style={{
                                color: "blueviolet",
                                margin: "10px",
                            }}
                        >
                            Information Perssonnel
                        </h2>
                        <div>
                            <b>Nom : </b> Ali
                        </div>
                        <div>
                            <b>Matrucule : </b> 243454545574
                        </div>
                        <div>
                            <b>Date de naissance</b>26/06/2001
                        </div>
                        <div>
                            <b>Anne universitaire</b>2023/2024
                        </div>
                        <div>
                            <b>Niveau : </b> master 1
                        </div>
                        <div>
                            <b>specialite :</b> informatique
                        </div>
                        <div>
                            <b>section : </b>A
                        </div>
                        <div>
                            <b>groupe : </b>2
                        </div>

                        <div style={{ width: "85%" }} className="lo">
                            <h2
                                style={{
                                    color: "blueviolet",
                                    margin: "10px",
                                }}
                            >
                                Premier Semester
                            </h2>
                            <div>
                                <b>Cours Abscente :</b>6
                            </div>
                            <div>
                                {" "}
                                <b>Td Abscente : </b>2
                            </div>
                            <div>
                                <b>Cours assiste:</b>10
                            </div>
                            <div>
                                <b>Td Assiste :</b>40{" "}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
