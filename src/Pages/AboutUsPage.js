import React from "react";
import './AboutUsPage.css';
import Navibar from "../Components/NavigationBar/Navibar";
import Footer from "../Components/Footer/Footer";
import sloganImg from '../Assets/Images/slogan.png';

const AboutUsPage = () => {
    return (
        <div className="aboutUs">
            <Navibar />
            <div className="aboutUs-hero">
                <div className="aboutUs-hero-bg">
                    <div className="aboutUs-hero-title">
                        Bukan Hanya Tentang
                        Darimana Asal Kita,
                        Tapi Juga Kemana Tujuan Kita
                    </div>
                    <div className="aboutUs-hero-button">
                        <span className="aboutUs-hero-button-text">Hubungi Kami</span>
                    </div>
                </div>
            </div>
            <div className="aboutUs-container">
                <div className="aboutUs-content">
                    <div className="aboutUs-card">
                        <span className="aboutUs-card-title">Keberanian</span>
                        <div className="aboutUs-card-body">
                            Kami, ZoaCare menunjukkan keberanian melalui tindakan dan aksi nyata.
                            Kami bekerja untuk perubahan-perubahan yang diperlukan.
                            Antusiasme dan semangat yang selalu kita kobarkan dalam diri kami untuk 
                            mengupayakan keberlanjutan alam dan manusia, akan selaras dengan kemampuan 
                            adaptasi kami dalam menghadapi berbagai macam rintangan dan kondisi. 
                            Kami mendorong, mengajak, serta menginspirasi sekitar untuk melakukan yang 
                            terbaik kepada alam dan masa depan planet ini, yang merupakan rumah kita.
                        </div>
                    </div>
                    <img src={sloganImg} alt="" className="aboutUs-image" />
                </div>
                <div className="aboutUs-content">
                    <img src={sloganImg} alt="" className="aboutUs-image" />
                    <div className="aboutUs-card">
                        <span className="aboutUs-card-title">Keberanian</span>
                        <div className="aboutUs-card-body">
                            Kami, ZoaCare menunjukkan keberanian melalui tindakan dan aksi nyata.
                            Kami bekerja untuk perubahan-perubahan yang diperlukan.
                            Antusiasme dan semangat yang selalu kita kobarkan dalam diri kami untuk 
                            mengupayakan keberlanjutan alam dan manusia, akan selaras dengan kemampuan 
                            adaptasi kami dalam menghadapi berbagai macam rintangan dan kondisi. 
                            Kami mendorong, mengajak, serta menginspirasi sekitar untuk melakukan yang 
                            terbaik kepada alam dan masa depan planet ini, yang merupakan rumah kita.
                        </div>
                    </div>
                </div>
                <div className="aboutUs-content">
                    <div className="aboutUs-card">
                        <span className="aboutUs-card-title">Keberanian</span>
                        <div className="aboutUs-card-body">
                            Kami, ZoaCare menunjukkan keberanian melalui tindakan dan aksi nyata.
                            Kami bekerja untuk perubahan-perubahan yang diperlukan.
                            Antusiasme dan semangat yang selalu kita kobarkan dalam diri kami untuk 
                            mengupayakan keberlanjutan alam dan manusia, akan selaras dengan kemampuan 
                            adaptasi kami dalam menghadapi berbagai macam rintangan dan kondisi. 
                            Kami mendorong, mengajak, serta menginspirasi sekitar untuk melakukan yang 
                            terbaik kepada alam dan masa depan planet ini, yang merupakan rumah kita.
                        </div>
                    </div>
                    <img src={sloganImg} alt="" className="aboutUs-image" />
                </div>
                <div className="aboutUs-content">
                    <img src={sloganImg} alt="" className="aboutUs-image" />
                    <div className="aboutUs-card">
                        <span className="aboutUs-card-title">Keberanian</span>
                        <div className="aboutUs-card-body">
                            Kami, ZoaCare menunjukkan keberanian melalui tindakan dan aksi nyata.
                            Kami bekerja untuk perubahan-perubahan yang diperlukan.
                            Antusiasme dan semangat yang selalu kita kobarkan dalam diri kami untuk 
                            mengupayakan keberlanjutan alam dan manusia, akan selaras dengan kemampuan 
                            adaptasi kami dalam menghadapi berbagai macam rintangan dan kondisi. 
                            Kami mendorong, mengajak, serta menginspirasi sekitar untuk melakukan yang 
                            terbaik kepada alam dan masa depan planet ini, yang merupakan rumah kita.
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AboutUsPage;