import React from "react";
import './styles/side_parts.css';

export default function Command_Control() {
    return(
        <div className="part-command-control">
            <button className="button-style-2">Kamikaze Görevi</button>
            <button className="button-style-2">Savaşan İHA Görevi</button>
            <button className="button-style-3">Acil Yüksel</button>
            <button className="button-style-3">Acil Alçal</button>
            <button className="button-style">Kaçma Manevrası</button>
            <button className="button-style">Otonom Kontrol</button>
            <button className="button-style">Otonom Kalkış</button>
            <button className="button-style">Otonom İniş</button>
            <button className="button-style-1">Manuel Kontrol</button>
        </div>
    );
}