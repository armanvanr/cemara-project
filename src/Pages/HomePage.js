import React from "react";
import './HomePage.css';
import laporImg from '../Assets/Images/lapor.png';
import sloganImg from '../Assets/Images/slogan.png'

const HomePage = () => {
    return (
        <div className="App">
            {/* <div className="shape1"></div>
            <div className="shape2"></div>
            <div className="shape3"></div>
            <div className="shape4"></div>
            <div className="shape5"></div> */}

            <div className="AppContainer">
                <div className="AppNav">
                    <img src="{logo}" className="Applogo" alt=""/>
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
                <div className="AppHome">
                    <div className="LeftSide">
                        <div className="Menu" style={{ alignItems: 'flex-end', order: '0' }}>
                            <div className="MenuGroup">
                                <img src={laporImg} className="MenuPic" alt="" />
                                <div className="MenuIsi" style={{ background: '#E92F2F' }}>
                                    <span className="judul">Lapor!</span>
                                    <span className="ket">lorem ipsum</span>
                                </div>
                            </div>
                        </div>
                        <div className="Menu" style={{ alignItems: 'center', order: '1' }}>
                            <div className="MenuGroup">
                                <img src={laporImg} className="MenuPic" alt="" />
                                <div className="MenuIsi" style={{ background: '#2E9C33' }}>
                                    <span className="judul">Donasi</span>
                                    <span className="ket">lorem ipsum</span>
                                </div>
                            </div>
                        </div>
                        <div className="Menu" style={{ alignItems: 'flex-start', order: '2' }}>
                            <div className="MenuGroup">
                                <img src={laporImg} className="MenuPic" alt="" />
                                <div className="MenuIsi" style={{ background: '#DCB736' }}>
                                    <span className="judul">Adopsi</span>
                                    <span className="ket">lorem ipsum</span>
                                </div>
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
