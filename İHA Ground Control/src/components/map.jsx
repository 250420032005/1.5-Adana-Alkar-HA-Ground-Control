import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import Telemetry from "./side parts/telemetry";
import Command_Control from "./side parts/command_control";
import Camera from "./side parts/camera";
import './styles/map.css';

export default function GroundControlMap() {
    return (
        <div className="map-container">
            <div className="map-position">
                <MapContainer center={[48.8566, 2.3522]} zoom={13} zoomControl={false}>
                    <TileLayer 
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                </MapContainer>
            </div>
            <div className="telemetry-position">
                <Telemetry />
            </div>
            <div className="command-control-position">
                <Command_Control />
            </div>
            <div className="camera-position">
                <Camera />
            </div>
        </div>
    );
}
