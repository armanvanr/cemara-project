import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import useGeoLocation from "../../Hooks/useGeoLocation";
import './Footer.css';


const Footer = () => {
    const { address } = useSelector(state => state.daReport.location);
    const comingSoon = () => {
        toast.info('Coming soon!', {
            position: "top-center",
            autoClose: 200,
            hideProgressBar: true,
            closeOnClick: false,
            draggable: true,
            theme: "light",
        });
    };

    return (
        <div className="Footer">
            <div className="Footer-container">
                <div className="Footer-content-up">
                    <div style={{ color: address ? "#2E9C33" : "#9F9F9F" }}>&#x25cf;</div>
                    <span className="Footer-address">{(address) ? (address) : ("Lokasi tidak terdeteksi")}</span>
                    <span className="Footer-status">- &nbsp;Dari Perangkat anda</span>
                </div>
                <div className="Footer-content-bottom">
                    <NavLink to="/report" style={{ textDecoration: "none" }}>
                        <span className="Footer-bar">Lapor &nbsp;&bull;</span>
                    </NavLink>
                    <NavLink to="/donate" style={{ textDecoration: "none" }}>
                        <span className="Footer-bar">Donasi  &nbsp;&bull;</span>
                    </NavLink>
                    <NavLink to="/adopt" style={{ textDecoration: "none" }}>
                        <span className="Footer-bar">Adopsi  &nbsp;&bull;</span>
                    </NavLink>
                    <div style={{ textDecoration: "none" }} onClick={comingSoon}>
                        <span to="/donationList" className="Footer-bar">Daftar Donasi &nbsp;&bull;</span>
                    </div>
                    <div style={{ textDecoration: "none" }} onClick={comingSoon}>
                        <span to="/reportList" className="Footer-bar">Laporan &nbsp;&bull;</span>
                    </div>
                    <NavLink to="/about" style={{ textDecoration: "none" }}>
                        <span className="Footer-bar">Tentang Kami  &nbsp;&bull;</span>
                    </NavLink>
                    <NavLink style={{ textDecoration: "none" }}>
                        <span to="/action" className="Footer-bar">Aksi  &nbsp;&bull;</span>
                    </NavLink>
                    <NavLink style={{ textDecoration: "none" }}>
                        <span to="/articles" className="Footer-bar">Artikel  &nbsp;&bull;</span>
                    </NavLink>
                    <div style={{ textDecoration: "none" }} onClick={comingSoon}>
                        <span to="/termsconditions" className="Footer-bar">Kebijakan dan Privasi  &nbsp;&bull;</span>
                    </div>
                    <NavLink to="/login" style={{ textDecoration: "none" }}>
                        <span className="Footer-bar">Login Admin  &nbsp;&bull;</span>
                    </NavLink>
                    <div style={{ textDecoration: "none" }} onClick={comingSoon}>
                        <span to="/help" className="Footer-bar">Bantuan</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;