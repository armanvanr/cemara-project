import React from "react";
import { Link, NavLink } from "react-router-dom";
import brand from '../../Assets/Images/brand.jpg'
import './Navibar.css';

const Navibar = () => {
    return (
        <div className="navbar">
            <NavLink to="/">
                <img src={brand} className="navbar-brand" alt="" style={{textDecoration: "none"}}/>
            </NavLink>

            <div className="navbar-buttons">
                <div className="navbar-items">
                    <span to="/donationList">Daftar Donasi</span>
                    <span to="/reportList">Laporan</span>
                    <span to="/aboutUs">Tentang Kami</span>
                    <span to="/action">Aksi</span>
                    <span to="/articles">Artikel</span>
                </div>
                <button className="login-button">
                    <Link to="/login">Login</Link>
                </button>
            </div>
        </div>
    )
}

export default Navibar;