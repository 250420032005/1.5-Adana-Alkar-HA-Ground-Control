import React from "react";
import './styles/side_parts.css';

export default function Camera() {
    return (
        <div className="part-camera">
            <div className="camera-options">
                <button><ion-icon name="close-outline"></ion-icon></button>
            </div>
            <div className="camera-input">
            <img
  src=""
  alt="Jetson Camera Feed"
  width="720"
  height="440"
/>
            </div>
        </div>
    );
}
