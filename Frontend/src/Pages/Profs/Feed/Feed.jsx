import React, { useState } from "react";
import { addFeed } from "../../../MiddelWear/ApiMiddleWear.js";

function Feed() {
    const [feed, setFeed] = useState({});

    const onChange = (e) => {
        const tmp = { ...feed, [e.target.name]: e.target.name == "notif" ? JSON.parse(e.target.value) : e.target.value };
        setFeed(tmp);
    };

    const submitForm = async () => {
        try {
            if (!feed) {
                return alert("remplissez d'abord le formulaire");
            }
            const res = await addFeed(feed);

            if (!res) {
                return alert("probléme avec le serveur");
            }
            const { data } = res;
            const { code } = data;
            if (code != "34") {
                return alert(code);
            }
            alert();
        } catch (error) {
            console.log("🚀 ~ file: Notes.jsx:15 ~ submitForm ~ error:", error);
        }
    };

    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: "20px",
            }}
        >
            <h1>Ajouter Actualité/Info </h1>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "20px" }}>
                <input required className="input" type="text" name="title" placeholder="Titre" onChange={onChange} />
                <input className="input" type="date" name="time" placeholder="Ajouter Date" onChange={onChange} />
                <textarea required className="input" name="description" rows="5" placeholder="Description" onChange={onChange} />
                <select className="input" name="notif" onChange={onChange}>
                    <option value="">Es-ce une notification</option>
                    <option value={true}>Oui</option>
                    <option value={false}>Non</option>
                </select>
                <button className="button" onClick={submitForm}>
                    Soumettre
                </button>
            </div>
        </div>
    );
}

export default Feed;
