import { useState } from "react";

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
import Side from "../../Component/Side/Side";
import { ar } from "../Salle";
export default function Resv() {
    let [done, setDone] = useState(false);

    return (
        <div className="m">
            <div style={{ widows: "80%", position: "absolute", left: "40%", top: "10px" }}>
                <h2 style={{ margin: "40px", textAlign: "center" }}>les Pc Liber</h2>
                <div
                    style={{
                        display: "flex",
                        padding: "10px",
                        borderRadius: "5px",
                        color: " white",
                        backgroundColor: "#7622D7",
                        gap: "150px",
                        justifyContent: "space-between",
                        width: "100%",
                    }}
                >
                    <div>Salle</div>
                    <div>pc</div>
                    <div>status</div>
                    <div>action</div>
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                        width: "100%",
                        backgroundColor: "  #7622d74a",
                        padding: "8px",
                        borderRadius: "10px",
                        marginTop: "5px",
                    }}
                >
                    {ar.map((e, i) => {
                        return (
                            <div key={i} className="OneAr" style={{ marginTop: "5px", display: "flex", justifyContent: "space-between" }}>
                                <div>{e.salle}</div>
                                <div>{e.pc}</div>
                                <div>{e.stauts}</div>
                                <button
                                    className="Bun"
                                    style={{ width: "10%" }}
                                    onClick={() => {
                                        {
                                            document.querySelector(".m").classList.add("P");
                                            setDone(true);
                                        }
                                    }}
                                >
                                    reserve
                                </button>
                            </div>
                        );
                    })}
                </div>
                {done && (
                    <div className="BoxWhite2">
                        <div
                            style={{ position: "absolute", right: "10px", top: "10px", cursor: "pointer", color: "black" }}
                            onClick={() => {
                                {
                                    document.querySelector(".m").classList.remove("P");
                                    setDone(false);
                                }
                            }}
                        >
                            {" "}
                            <FontAwesomeIcon icon={faXmark} />
                        </div>
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

                                        document.querySelector(".m").classList.remove("P");
                                    }
                                }}
                            >
                                Ok
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
