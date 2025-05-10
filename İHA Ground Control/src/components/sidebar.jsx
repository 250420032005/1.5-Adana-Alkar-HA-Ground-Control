import React, { useState } from "react";
import './styles/sidebar.css'

export default function Aerial_Vehicle_Information_Bar() {
  function handleClick() {
    console.log("Clicked")
  }

    return(
      <div className="aerial-vehicle-sidebar">
        <ul>
          <li><button><img src="/src/assets/telemetry.png" alt="Telemetry" /></button></li>
          <li><button><img src="/src/assets/controller.png" alt="Command Control" /></button></li>
          <li><button><img src="/src/assets/qr.png" alt="QR" /></button></li>
        </ul>
      </div>
    );
}