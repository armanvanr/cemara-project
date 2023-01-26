import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import brand from '../../Assets/Images/brand.jpg'
import './Navibar.css';
import { Helmet } from 'react-helmet';
import { toast, ToastContainer } from "react-toastify";

const Navibar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
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
                        <div className="navbar-item" onClick={comingSoon}>
                            <span to="/donationList" >Daftar Donasi</span>
                        </div>
                        <div className="navbar-item" onClick={comingSoon}>
                            <span to="/reportList">Laporan</span>
                        </div>
                        <NavLink className="navbar-item" to="/about">
                            <span>Tentang Kami</span>
                        </NavLink>
                        <NavLink className="navbar-item" to="/action">
                            <span>Aksi</span>
                        </NavLink>
                        <NavLink className="navbar-item" to="/articles">
                            <span>Artikel</span>
                        </NavLink>
                    </div>
                    {/* <button className="login-button">
                    <Link to="/login">Login
                </button> */}
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default Navibar;