import React from "react";
import './HomePage.css';
import laporImg from '../Assets/Images/lapor.png';
import sloganImg from '../Assets/Images/slogan.png'
import Navibar from "../Components/Navibar";
import { NavLink } from "react-router-dom";

const HomePage = () => {
    return (
        <div className="AppHome">
            <div className="AppContainer">
                <Navibar />
                <div className="AppHome">
                    <div className="LeftSide">
                        <div className="Menu" style={{ alignItems: 'flex-end', order: '0' }}>
                            <div className="MenuGroup">
                                <img src={laporImg} className="MenuPic" alt="" />
                                <NavLink to="/report" style={{textDecoration: "none"}}>
                                    <div className="MenuIsi" style={{ background: '#E92F2F' }}>
                                        <span className="judul">Lapor!</span>
                                        <span className="ket">lorem ipsum</span>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                        <div className="Menu" style={{ alignItems: 'center', order: '1' }}>
                            <div className="MenuGroup">
                                <img src={laporImg} className="MenuPic" alt="" />
                                <NavLink to="/donate" style={{textDecoration: "none"}}>
                                    <div className="MenuIsi" style={{ background: '#2E9C33' }}>
                                        <span className="judul">Donasi</span>
                                        <span className="ket">lorem ipsum</span>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                        <div className="Menu" style={{ alignItems: 'flex-start', order: '2' }}>
                            <div className="MenuGroup">
                                <img src={laporImg} className="MenuPic" alt="" />
                                <NavLink to="/adopt" style={{textDecoration: "none"}}>
                                    <div className="MenuIsi" style={{ background: '#DCB736' }}>
                                        <span className="judul">Adopsi</span>
                                        <span className="ket">lorem ipsum</span>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="RightSide">
                        <div className="up">
                            <img src={sloganImg} alt="" />
                            <div className="upTitle">We Care We Share</div>
                            <div className="upIsi">
                                Ciptakan hari esok yang lebih baik untuk satwa liar yang rentan dan peliharaan terlantar di sekitarmu. Jadilah pahlawan bagi bumi kita yang indah.
                            </div>
                        </div>
                        <div className="bottom">
                            <div className="bottomCard">
                                <img src={laporImg} className="bottomPic" alt="" />
                                <div className="bottomContent">
                                    <div className="contentCard1">
                                        <span className="contentTitle">Pakan Harimau Ragunan</span>
                                    </div>
                                    <div className="contentCard2">
                                        <div className="contentButton">
                                            <span className="contentButtonText">Donasi Sekarang</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;
