import React from "react";
import './Navbar.css';
import brand from '../Assets/Images/brand.jpg'

const Navbar = () => {
    return (
        <div className="AppNav">
            <img src={brand} className="AppLogo" alt="" />
            <div className="AppNavButton">
                <div className="AppNavItem">
                    <span className="AppNavFont" style={{ width: '118px' }}>Daftar Donasi</span>
                    <span className="AppNavFont" style={{ width: '72px' }}>Laporan</span>
                    <span className="AppNavFont" style={{ width: '121px' }}>Tentang Kami</span>
                    <span className="AppNavFont" style={{ width: '37px' }}>Aksi</span>
                    <span className="AppNavFont" style={{ width: '56px' }}>Artikel</span>
                </div>
                <div className="LoginButton">
                    <span className="LoginText">Login</span>
                </div>
            </div>
        </div>
    )
};

export default Navbar;