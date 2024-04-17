import "../Side/Side.css";
import {
    faRobot,
    faCheckToSlot,
    faCircleCheck,
    faTriangleExclamation,
    faXmark,
    faClipboardCheck,
    faPaste,
    faFile,
    faIdCardClip,
    faCalendar,
    faFileContract,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { NavLink } from "react-router-dom";
export default function Side() {
    let [showCheck, setShowCheck] = useState(false);
    let [code, setCode] = useState(false);
    let [done, setDone] = useState(false);
    let [showDoc, setShowDoc] = useState(false);
    let [dom, setDom] = useState(false);
    let [type, setType] = useState(false);
    let [addJust, setAddJus] = useState(false);
    let [date, setDate] = useState("");
    let [image, setImage] = useState("");
    let Ar = [
        { router: "/ponti", name: "ponter" },
        { router: "/justifier", name: "justifier une absence" },
        { router: "/doucement", name: "demende doucement" },
        { router: "/Profile", name: "demende doucement" },
        { router: "/resrve", name: "resrve" },
        { router: "/empo", name: "empo" },
    ];

    function Check() {
        if (code == "") {
            alert("Pls Enter Your Code");
            return;
        }
        setDone(true);
    }

    function CheckDemend() {
        if (dom == "" || type == "") {
            alert("Enter Your  your Motif or Type doucument");
            return;
        }
        setShowDoc(false);
        setShowCheck(true);
        setDone(true);
    }
    function CheckSendJu() {
        if (image == "") {
            alert("Enter Your Image");
            return;
        }
        setAddJus(false);
        setShowCheck(true);
        setDone(true);
    }
    return (
        <div className="SideBar" style={{ zIndex: "100" }}>
            <h1 style={{ fontSize: "30px", textAlign: "center", paddingTop: "8px" }}>
                <FontAwesomeIcon icon={faRobot} />
            </h1>
            <h2 style={{ textAlign: "center", paddingTop: "10px" }}>computer science</h2>

            <div className="AllNavLink">
                <NavLink to={"/stud/"} className="Yt">
                    {" "}
                    <FontAwesomeIcon icon={faIdCardClip} style={{ marginRight: "10px" }} />
                    Profile
                </NavLink>
            </div>

            <div className="AllNavLink">
                <div
                    onClick={() => {
                        {
                            document.querySelector(".SideBar").classList.add("P");
                            setShowCheck(true);
                        }
                    }}
                    className="Yt"
                >
                    {" "}
                    <FontAwesomeIcon icon={faClipboardCheck} style={{ marginRight: "10px" }} />
                    ponti
                </div>
            </div>

            {showCheck && (
                <div className="BoxWhite">
                    {!done ? (
                        <div>
                            <div
                                style={{ position: "absolute", right: "10px", top: "10px", cursor: "pointer", color: "black" }}
                                onClick={() => {
                                    {
                                        setShowCheck(false);
                                        document.querySelector(".SideBar").classList.remove("P");
                                        setCode("");
                                    }
                                }}
                            >
                                {" "}
                                <FontAwesomeIcon icon={faXmark} />
                            </div>
                            <div style={{ textAlign: "center", fontSize: "40px", paddingTop: "10px", color: "black" }}>
                                <FontAwesomeIcon icon={faCheckToSlot} />
                            </div>
                            <div className="ju">
                                <input type="text" placeholder="Enter Code" onChange={(e) => setCode(e.target.value)} />
                            </div>
                            <button className="Bun" onClick={Check} style={{ margin: "30px auto" }}>
                                Envoyer
                            </button>
                        </div>
                    ) : (
                        <div style={{ textAlign: "center" }}>
                            <div>
                                <FontAwesomeIcon
                                    icon={faCircleCheck}
                                    style={{ color: "green", paddingTop: "20px", fontSize: "40px", marginBottom: "20px", textAlign: "center" }}
                                />
                            </div>
                            <p style={{ color: "black" }}>Is Done !</p>
                            <button
                                className="Bun"
                                style={{ margin: "30px auto" }}
                                onClick={() => {
                                    {
                                        setDone(false);
                                        setShowCheck(false);
                                        document.querySelector(".SideBar").classList.remove("P");
                                        setCode("");
                                        setDom("");
                                        setType("");
                                        setImage("");
                                    }
                                }}
                            >
                                Ok
                            </button>
                        </div>
                    )}
                </div>
            )}

            <div
                className="AllNavLink"
                onClick={() => {
                    {
                        document.querySelector(".SideBar").classList.add("P");
                        setShowDoc(true);
                    }
                }}
            >
                <div className="Yt">
                    {" "}
                    <FontAwesomeIcon icon={faPaste} style={{ marginRight: "10px" }} />
                    demende doucement
                </div>
            </div>
            {showDoc && (
                <div className="BoxWhite" style={{ height: "250px" }}>
                    <div
                        style={{ position: "absolute", right: "10px", top: "10px", cursor: "pointer", color: "black" }}
                        onClick={() => {
                            {
                                setShowDoc(false);
                                document.querySelector(".SideBar").classList.remove("P");
                                setDom("");
                                setType("");
                            }
                        }}
                    >
                        {" "}
                        <FontAwesomeIcon icon={faXmark} />
                    </div>
                    <div style={{ width: "90%", textAlign: "center", color: "black", display: "flex", padding: "10px", marginBottom: "10px" }}>
                        <FontAwesomeIcon
                            icon={faTriangleExclamation}
                            style={{ marginLeft: "30px", color: "rgb(255, 213, 0)", marginRight: "10px", fontSize: "30px" }}
                        />
                        <p>Ici Vous Pouvez demander Une copie numerique du document scolaire </p>
                    </div>
                    <div className="ju">
                        <input type="text" placeholder="Enter le motif de la demande de doucment scolaire" onChange={(e) => setDom(e.target.value)} />
                    </div>
                    <div className="ju">
                        <input type="text" placeholder="Type de Doucment scolaire" onChange={(e) => setType(e.target.value)} />
                    </div>
                    <button className="Bun" onClick={CheckDemend} style={{ margin: "30px auto" }}>
                        Envoyer
                    </button>
                </div>
            )}

            <div
                className="AllNavLink"
                onClick={() => {
                    {
                        document.querySelector(".SideBar").classList.add("P");
                        setAddJus(true);
                    }
                }}
            >
                <div className="Yt">
                    <FontAwesomeIcon icon={faFile} style={{ marginRight: "10px" }} />
                    Justification
                </div>
            </div>
            {addJust && (
                <div className="BoxWhite" style={{ height: "250px" }}>
                    <div
                        style={{ position: "absolute", right: "10px", top: "10px", cursor: "pointer", color: "black" }}
                        onClick={() => {
                            {
                                setAddJus(false);
                                document.querySelector(".SideBar").classList.remove("P");
                                setImage("");
                            }
                        }}
                    >
                        {" "}
                        <FontAwesomeIcon icon={faXmark} />
                    </div>
                    <h3 style={{ color: "black", textAlign: "center", marginTop: "10px" }}>Ajouter justification Ici et la date Svp :</h3>
                    <input
                        type="file"
                        style={{
                            width: "80%",
                            background: " rgb(205, 205, 205) ",
                            margin: "0 auto",
                            borderRadius: "10px",
                            marginTop: "40px",
                            marginLeft: "50px",
                            padding: "13px",
                        }}
                        onChange={(e) => setImage(e.target.files[0])}
                    />
                    <div className="ju">
                        <input type="date" style={{ marginLeft: "50px", width: "80%" }} onChange={(e) => setDate(e.target.value)} />
                    </div>
                    <button className="Bun" onClick={CheckSendJu} style={{ margin: "30px auto" }}>
                        Envoyer
                    </button>
                </div>
            )}

            <div className="AllNavLink">
                <NavLink to={"/stud/reservation"} className="Yt">
                    <FontAwesomeIcon icon={faFileContract} style={{ marginRight: "10px" }} />
                    réservation
                </NavLink>
            </div>

            <div className="AllNavLink">
                <NavLink to={"/stud/emploi"} className="Yt">
                    <FontAwesomeIcon icon={faCalendar} style={{ marginRight: "10px" }} />
                    Programme
                </NavLink>
            </div>
        </div>
    );
}
// ponter , ju , demnde doucemnt , profile ,  eploi , res pc
