import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import brand from '../../Assets/Images/brand.jpg'
import './Navibar.css';
import { Helmet } from 'react-helmet';

const Navibar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
      </Helmet>
        <div className="navbar">
            <NavLink to="/">
                <img src={brand} className="navbar-brand" alt="" style={{ textDecoration: "none" }} />
            </NavLink>

            <div className="navbar-buttons">
                <div className={`navbar-items ${menuOpen ? 'menu-open' : ''}`}>
                    <NavLink className="navbar-item">
                        <span to="/donationList">Daftar Donasi</span>
                    </NavLink>
                    <NavLink className="navbar-item">
                        <span to="/reportList">Laporan</span>
                    </NavLink>
                    <NavLink className="navbar-item" to="/about">
                        <span>Tentang Kami</span>
                    </NavLink>
                    <NavLink className="navbar-item">
                        <span to="/action">Aksi</span>
                    </NavLink>
                    <NavLink className="navbar-item">
                        <span to="/articles">Artikel</span>
                    </NavLink>
                </div>
                {/* <button className="login-button">
                    <Link to="/login">Login
                </button> */}
            </div>
        </div>
        </>
    )
}

export default Navibar;