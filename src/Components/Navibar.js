import React from "react";
import brand from '../Assets/Images/brand.jpg'
import './Navibar.css';

const Navibar = () => {
    return (
        <div className="navbar">
            <img src={brand} className="navbar-brand" alt="" />
            <div className="navbar-buttons">
                <div className="navbar-items">
                    <a href="/donationList">Daftar Donasi</a>
                    <a href="/reportList">Laporan</a>
                    <a href="/aboutUs">Tentang Kami</a>
                    <a href="/action">Aksi</a>
                    <a href="/articles">Artikel</a>
                </div>
                <button className="login-button">
                    <a href="/login">Login</a>
                </button>
            </div>
        </div>
    )
}

export default Navibar;