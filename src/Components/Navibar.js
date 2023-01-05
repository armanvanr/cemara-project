import React from "react";
import { Link, NavLink } from "react-router-dom";
import brand from '../Assets/Images/brand.jpg'
import './Navibar.css';

const Navibar = () => {
    return (
        <div className="navbar">
            <NavLink to="/">
                <img src={brand} className="navbar-brand" alt="" />
            </NavLink>

            <div className="navbar-buttons">
                <div className="navbar-items">
                    <a to="/donationList">Daftar Donasi</a>
                    <a to="/reportList">Laporan</a>
                    <a to="/aboutUs">Tentang Kami</a>
                    <a to="/action">Aksi</a>
                    <a to="/articles">Artikel</a>
                </div>
                <button className="login-button">
                    <Link to="/login">Login</Link>
                </button>
            </div>
        </div>
    )
}

export default Navibar;