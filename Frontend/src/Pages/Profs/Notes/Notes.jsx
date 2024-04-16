import React, { useState } from "react";
import { addNote } from "../../../MiddelWear/ApiMiddleWear.js";

function Notes() {
    const [note, setNote] = useState({});

    const onChange = (e) => {
        const tmp = { ...note, [e.target.name]: e.target.value };
        setNote(tmp);
    };

    const submitForm = async () => {
        try {
            if (!note) {
                return alert("remplissez d'abord le formulaire");
            }
            const res = await addNote(note);

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
            <h1>Attribuer une note</h1>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "20px" }}>
                <input className="input" type="text" name="target" placeholder="N° étudiant" onChange={onChange} />
                <input className="input" type="text" name="module" placeholder="Module" onChange={onChange} />
                <input className="input" type="number" name="note" placeholder="Note" onChange={onChange} />
                <button className="button" onClick={submitForm}>
                    soumettre
                </button>
            </div>
        </div>
    );
}

export default Notes;
