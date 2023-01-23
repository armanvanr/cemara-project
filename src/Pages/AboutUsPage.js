import React from "react";
import './AboutUsPage.css';
import Navibar from "../Components/NavigationBar/Navibar";
import Footer from "../Components/Footer/Footer";
import image1 from '../Assets/Images/image-1.jpg';
import image2 from '../Assets/Images/image-2.jpg';
import image3 from '../Assets/Images/image-3.jpg';
import image4 from '../Assets/Images/image-4.jpg';
import { useEffect } from "react";

const AboutUsPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


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
                        <p className="aboutUs-card-body">
                            Kami, ZoaCare menunjukkan keberanian melalui tindakan dan aksi nyata.
                            Kami bekerja untuk perubahan-perubahan yang diperlukan.
                            Antusiasme dan semangat yang selalu kita kobarkan dalam diri kami untuk
                            mengupayakan keberlanjutan alam dan manusia, akan selaras dengan kemampuan
                            adaptasi kami dalam menghadapi berbagai macam rintangan dan kondisi.
                            Kami mendorong, mengajak, serta menginspirasi sekitar untuk melakukan yang
                            terbaik kepada alam dan masa depan planet ini, yang merupakan rumah kita.
                        </p>
                    </div>
                    <img src={image1} alt="" className="aboutUs-image" />
                </div>
                <div className="aboutUs-content">
                    <img src={image2} alt="" className="aboutUs-image" />
                    <div className="aboutUs-card">
                        <span className="aboutUs-card-title">Integritas</span>
                        <p className="aboutUs-card-body">
                            Sebagai organisasi nirlaba yang diamanahkan kepercayaan luhur dari berbagai pihak,
                            kita memastikan setiap langkah kita sesuai dengan prinsip.
                            Kita menjalankan prinsip yang kita dorong dan upayakan, ‘’Walk the talk’’.
                            ZoaCare bertindak dengan integritas, akuntabilitas, dan transparansi.
                            Dengan mengandalkan pengetahuan lokal dan ilmu pengetahuan ilmiah
                            yang membimbing setiap langkah Yayasan WWF Indonesia,
                            serta memastikan kita untuk terus belajar dan berkembang.
                        </p>
                    </div>
                </div>
                <div className="aboutUs-content">
                    <div className="aboutUs-card">
                        <span className="aboutUs-card-title">Kolaborasi</span>
                        <p className="aboutUs-card-body">
                            Kami bekerja untuk memberikan dampak yang signifikan.
                            Dengan tantangan yang begitu dinamis, kami hadapi melalui kekuatan aksi kolektif dan inovasi.
                            Memiliki semangat berbagi sumber daya dan
                            pengetahuan serta terbuka dalam menerima masukan dan kritik dari pihak lain.
                            Dan selalu membangun proses yang partisipatif dalam setiap aksi dan upaya konservasi
                        </p>
                    </div>
                    <img src={image3} alt="" className="aboutUs-image" />
                </div>
                <div className="aboutUs-content">
                    <img src={image4} alt="" className="aboutUs-image" />
                    <div className="aboutUs-card">
                        <span className="aboutUs-card-title">Saling Menghormati</span>
                        <p className="aboutUs-card-body">
                            Kami menghormati suara serta hak alam dan manusia.
                            Kami bekerja untuk melindungi/memastikan masa depan yang berkelanjutan.
                            Memastikan dalam prosesnya setiap suara serta hak merasa didengar dan dihargai.
                            Selalu mempertimbangkan adanya kebaragaman serta saling menghargai dalam
                            mengupayakan keselarasan dan keharmonisan bagi alam dan manusia.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AboutUsPage;