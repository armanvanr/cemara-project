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

                    <Link to="/donationList">Daftar Donasi</Link>
                    <Link to="/reportList">Laporan</Link>
                    <Link to="/aboutUs">Tentang Kami</Link>
                    <Link to="/action">Aksi</Link>
                    <Link to="/articles">Artikel</Link>
                </div>
                <button className="login-button">
                    <Link to="/login">Login</Link>
                </button>
            </div>
        </div>
    )
}

export default Navibar;