import React from "react";
import './HomePage.css';
import laporImg from '../Assets/Images/lapor.png';
import reportImg from '../Assets/Images/ReportImage.png';
import donateImg from '../Assets/Images/DonateImage.png';
// import adoptImg from '../Assets/Images/AdoptImage.png';
import adoptImg from '../Assets/Images/AdoptImage.png';
import sloganImg from '../Assets/Images/slogan.png';
import Navibar from "../Components/NavigationBar/Navibar";
import { NavLink } from "react-router-dom";
import PageFooter from "../Components/PageFooter/PageFooter";
import Footer from "../Components/Footer/Footer";

const HomePage = () => {
    return (
        <div className="HomePage">
            <Navibar />
            <div className="HomeMain">
                <div className="HomeLeftSide">
                    <div className="LaporSection">
                        <NavLink className="RibbonGroup" to="/report" style={{ textDecoration: "none" }}>
                            <img src={reportImg} alt="" />
                            <div className="Ribbon" style={{ backgroundColor: "#E92F2F" }}>
                                <span className="RibbonName">Lapor!</span>
                                <span className="RibbonDesc">Laporkan hewan berbahaya</span>
                            </div>
                        </NavLink>
                    </div>
                    <div className="DonasiSection">
                        <NavLink className="RibbonGroup" to="/donate" style={{ textDecoration: "none" }}>
                            <img src={donateImg} alt="" />
                            <div className="Ribbon" style={{ backgroundColor: "#2E9C33" }}>
                                <span className="RibbonName">Donasi</span>
                                <span className="RibbonDesc">Bantuanmu sangat berarti</span>
                            </div>
                        </NavLink>
                    </div>
                    <div className="AdopsiSection">
                        <NavLink className="RibbonGroup" to="/adopt" style={{ textDecoration: "none" }}>
                            <img src={adoptImg} alt="" />
                            <div className="Ribbon" style={{ backgroundColor: "#DCB736" }}>
                                <span className="RibbonName">Adopsi</span>
                                <span className="RibbonDesc">Pelihara mereka, sayangi mereka</span>
                            </div>
                        </NavLink>
                    </div>
                </div>
                <div className="HomeRightSide">
                    <div className="SloganGroup">
                        <img src={sloganImg} alt="" className="SloganImage" />
                        <span className="SloganText">We Care We Share!</span>
                        <span className="SloganDesc">Ciptakan hari esok yang lebih baik untuk satwa liar yang rentan dan peliharaan terlantar di sekitarmu. <strong>Jadilah pahlawan bagi bumi kita yang indah.</strong></span>
                    </div>
                    <div className="CampaignSlide">
                        <div className="CampaignCard">
                            <img src={laporImg} className="CampaignImage" alt="" />
                            <div className="CampaignDesc">
                                <div className="CampaignCardTitle">
                                    <span >Pakan Harimau Ragunan</span>
                                    <div className="CampaignProgressGroup">

                                    </div>
                                </div>
                                <div className="CampaignButtonLayout">
                                    <button className="CampaignButton">
                                        <span >Donasi Sekarang</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <PageFooter />
            <Footer />
        </div>
    )
}

export default HomePage;
