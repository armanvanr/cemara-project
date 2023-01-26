import React from "react";
import './ActionPage.css';
import Navibar from "../Components/NavigationBar/Navibar";
import Footer from "../Components/Footer/Footer";
import pic1 from '../Assets/Images/trappedcat.jpg';
import pic2 from '../Assets/Images/kobra.jpg';
import { Link, NavLink } from "react-router-dom";

const ActionPage = () => {

    return (
        <div className="actionPage">
            <Navibar />
            <div className="actionPage-container">
                <div className="action-title">Aksi diselesaikan</div>
                <div className="action-content">
                    {/* Card */}
                    <div className="action-card">
                        <div className="action-card-left">
                            <img src={pic1} alt="" className="action-card-left-img" />
                            <div className="action-card-left-content">
                                <div className="action-content-up">
                                    <div className="ap-content-card-title">
                                        <div className="ap-content-title">Hewan butuh pertolongan</div>
                                        <div className="ap-content-button" style={{ background: "#649EF5" }}>
                                            <span className="app-content-button-text">Hewan piaraan</span>
                                        </div>
                                    </div>
                                    <div className="ap-content-middle-text">Kucing Terjebak</div>
                                </div>
                                <div className="action-content-down">
                                    Jl. Lato-lato 46, Surabaya, Jawa Timur &bull; <div style={{ color: "#DCB736" }}>10.4 km</div>
                                </div>
                            </div>
                        </div>
                        <div className="action-card-right">
                            <span className="action-card-right-text">16.45</span>
                        </div>
                    </div>
                    {/* Card */}
                    <div className="action-card">
                        <div className="action-card-left">
                            <img src={pic2} alt="" className="action-card-left-img" />
                            <div className="action-card-left-content">
                                <div className="action-content-up">
                                    <div className="ap-content-card-title">
                                        <div className="ap-content-title">Invasi Hewan Berbahaya</div>
                                        <div className="ap-content-button" style={{ background: "#E92F2F" }}>
                                            <span className="app-content-button-text">Hewan Berbisa</span>
                                        </div>
                                    </div>
                                    <div className="ap-content-middle-text">Ular kobra</div>
                                </div>
                                <div className="action-content-down">
                                    Jl. Ngagel 46, Surabaya, Jawa Timur &bull; <div style={{ color: "#2E9C33" }}>4.6 km</div>
                                </div>
                            </div>
                        </div>
                        <div className="action-card-right">
                            <span className="action-card-right-text">16.45</span>
                        </div>
                    </div>
                </div>
                <div className="action-button-more">
                    <NavLink className="action-button-more-text" to="">
                        Lebih Banyak
                    </NavLink>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ActionPage;