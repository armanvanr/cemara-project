import React from "react";
import './HomePage.css';
import laporImg from '../Assets/Images/lapor.png';
import reportImg from '../Assets/Images/ReportImage.png';
import donateImg from '../Assets/Images/DonateImage.png';
import adoptImg from '../Assets/Images/AdoptImage.png';
import sloganImg from '../Assets/Images/slogan.png';
import Navibar from "../Components/NavigationBar/Navibar";
import { NavLink } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import ProgressBar from "../Components/ProgressBar/ProgressBar";

const HomePage = () => {

    const slideData = [
        {
            src: "https://www.mongabay.co.id/wp-content/uploads/2017/10/Delilah3.jpg",
            title: "Pakan Bayi Badak",
            done: "25",
            collected: "Rp17,5 juta",
            total: "Rp70 juta"
        },
        {
            src: "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2021/11/30085956/Penyebab-Kucing-Lesu-dan-Cara-Menanganinya.jpg",
            title: "Operasi Kaki Choki",
            done: "65",
            collected: "Rp2,6 juta",
            total: "Rp4 juta"

        },
        {
            src: "https://asset.kompas.com/crops/IKz9bU0x2dcmgGeErPuuio2qN9M=/0x238:1080x958/750x500/data/photo/2021/11/22/619b65158ec88.jpeg",
            title: "Pakan Puluhan Ekor Kucing",
            done: "57",
            collected: "Rp8,5 juta",
            total: "Rp15 juta"
        },
        {
            src: "https://www.southwiltonvet.com/files/AdobeStock244060759-1.jpeg",
            title: "Bantu Archie Sembuh",
            done: "72",
            collected: "Rp5,7 juta",
            total: "Rp8 juta"
        },
    ]

    const options2 = {
        type: 'loop',
        gap: '20px',
        autoplay: true,
        pauseOnHover: false,
        resetProgress: false,
        height: '180px',
        width: '630px',
        speed: 1500,
        setInterval: 100,
        overflow: 'hidden',
        classes: {
            pagination: 'splide__pagination custom_pagination',
            page: 'splide__pagination__page custom_pagination_page',
            arrow: 'splide__arrow custom_arrow',

        }
    };
    return (
        <div className="HomePage">
            <Navibar />
            <div className="HomeMain">
                <div className="HomeLeftSide">
                    <div className="LaporSection">
                        <NavLink className="RibbonGroup" to="/report" style={{ textDecoration: "none" }}>
                            <img src={reportImg} alt="" />
                            <div className="Ribbon" id="ReportRibbon">
                                <span className="RibbonName">Lapor!</span>
                                <span className="RibbonDesc">Laporkan hewan berbahaya</span>
                            </div>
                        </NavLink>
                    </div>
                    <div className="DonasiSection">
                        <NavLink className="RibbonGroup" to="/donate" style={{ textDecoration: "none" }}>
                            <img src={donateImg} alt="" />
                            <div className="Ribbon" id="DonateRibbon">
                                <span className="RibbonName">Donasi</span>
                                <span className="RibbonDesc">Bantuanmu sangat berarti</span>
                            </div>
                        </NavLink>
                    </div>
                    <div className="AdopsiSection">
                        <NavLink className="RibbonGroup" to="/adopt" style={{ textDecoration: "none" }}>
                            <img src={adoptImg} alt="" />
                            <div className="Ribbon" id="AdoptRibbon">
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
                        <Splide
                            options={options2}
                            aria-labelledby="autoplay-example-heading"
                            hasTrack={false}
                        >
                            <div style={{ position: 'relative' }}>
                                <SplideTrack>
                                    {slideData.map((slide, index) => (
                                        <SplideSlide key={index} className="slidecontainer">
                                            <div className="CampaignCard" >
                                                <img src={slide.src} className="CampaignImage" alt="" />
                                                <div className="CampaignDesc">
                                                    <div className="CampaignCardTitle">
                                                        <span>{slide.title}</span>
                                                        <div className="CampaignProgressGroup">
                                                            <div className="ProgressBarGroup">
                                                                <ProgressBar done={slide.done} />
                                                            </div>
                                                            <span><strong>{slide.collected}</strong> terkumpul dari <strong>{slide.total}</strong></span>
                                                        </div>
                                                    </div>
                                                    <div className="CampaignButtonLayout">
                                                        <button className="CampaignButton">
                                                            <span >Donasi Sekarang</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </SplideSlide>
                                    ))}
                                </SplideTrack>
                            </div>

                            {/* <div className="splide__progress">
                                <div className="splide__progress__bar" />
                            </div>

                            <button className="splide__toggle">
                                <span className="splide__toggle__play">Play</span>
                                <span className="splide__toggle__pause">Pause</span>
                            </button> */}
                        </Splide>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default HomePage;
