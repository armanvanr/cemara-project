import React from "react";
import './Footer.css';

const Footer = () => {
    return (
        <div className="Footer">
            <div className="Footer-container">
                <div className="Footer-content-up">
                    <div className="Footer-bullets"></div>
                    <span className="Footer-address">Bojong Gede, Bogor, Jawa Barat, Indonesia</span>
                    <span className="Footer-status">- &nbsp;Dari Perangkat anda</span>
                </div>
                <div className="Footer-content-bottom">
                    <span to="/report" className="Footer-bar">Lapor &nbsp;&bull;</span>
                    <span to="/donate" className="Footer-bar">Donasi  &nbsp;&bull;</span>
                    <span to="/adopt" className="Footer-bar">Adopsi  &nbsp;&bull;</span>
                    <span to="/donationList" className="Footer-bar">Daftar Donasi  &nbsp;&bull;</span>
                    <span to="/reportList" className="Footer-bar">Laporan Donasi  &nbsp;&bull;</span>
                    <span to="/aboutUs" className="Footer-bar">Tentang Kami  &nbsp;&bull;</span>
                    <span to="/action" className="Footer-bar">Aksi  &nbsp;&bull;</span>
                    <span to="/articles" className="Footer-bar">Artikel  &nbsp;&bull;</span>
                    <span to="" className="Footer-bar">Login Admin</span>
                </div>
            </div>
        </div>
    )
}

export default Footer;