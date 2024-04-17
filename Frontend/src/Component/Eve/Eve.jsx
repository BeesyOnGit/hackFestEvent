import "./Eve.css";
import One from "../../Pages/Images/One.jpg";
import Two from "../../Pages/Images/Two.jpg";
import th from "../../Pages/Images/Three.jpg";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Eve() {
    return (
        <div className="pageEve">
            <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
                <FontAwesomeIcon icon={faCalendarDays} style={{ marginRight: "10px" }} />
                Actualités et événements{" "}
            </h2>
            <div className="AllEve">
                <div className="OneEve">
                    <div>
                        <img src={One} alt="" style={{ width: "100px", height: "100px", borderRadius: "20%" }} />
                    </div>
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem
                            ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                        <button className="Bun">Lire</button>
                    </div>
                </div>

                <div className="ThreeEve">
                    <div>
                        <img src={Two} alt="" style={{ width: "100px", height: "100px", borderRadius: "20%" }} />
                    </div>
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem
                            ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                        <button className="Bun">Lire</button>
                    </div>
                </div>

                <div className="TwoEve">
                    <div>
                        <img src={th} alt="" style={{ width: "100px", height: "100px", borderRadius: "20%" }} />
                    </div>
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem
                            ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                        <button className="Bun">Lire</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
