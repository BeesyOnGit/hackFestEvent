import React from "react";

function ReservationLab() {
    const onChange = () => {
        alert("Demande envoyée, vous receverez une réponse apres traitement");
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
            <h1>Reserver Labo</h1>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "20px" }}>
                <input className="input" type="text" placeholder="Nom et Prénom" />
                <input className="input" type="text" placeholder="N° Labo" />
                <textarea required className="input" name="description" rows="6" placeholder="Raison/Explication" />
                <button className="button" onClick={onChange}>
                    Soumettre Demande
                </button>
            </div>
        </div>
    );
}

export default ReservationLab;
