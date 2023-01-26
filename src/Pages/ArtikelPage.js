import React from "react";
import './ArtikelPage.css';
import Navibar from "../Components/NavigationBar/Navibar";
import Footer from "../Components/Footer/Footer";
import image1 from '../Assets/Images/image-1.jpg';
import { Link, NavLink } from "react-router-dom";

const ArtikelPage = () => {

    return (
        <div className="article">
            <Navibar />
            <div className="article-hero">
                <div className="article-hero-bg">
                    <div className="article-hero-title">
                        Artikel
                    </div>
                    <div className="article-hero-button">
                        <span className="article-hero-button-text">Tulis Artikel</span>
                    </div>
                </div>
            </div>
            <div className="article-container">
                <div className="article-content">
                    <img src={image1} alt="" className="article-content-img" />
                    <div className="article-content-card">
                        <div className="article-content-card-title">Rekomendasi Nama Anjing Betina Lucu</div>
                        <div className="article-content-card-isi">
                            Mencari rekomendasi nama anjing merupakan salah satu hal yang menyenangkan saat baru mendapatkan anjing sebagai anggota keluarga baru.
                        </div>
                    </div>
                </div>
                <div className="article-content">
                    <img src={image1} alt="" className="article-content-img" />
                    <div className="article-content-card">
                        <div className="article-content-card-title">Mata Kucing Berair: Penyebab & Cara Mengatasinya</div>
                        <div className="article-content-card-isi">
                            Air mata adalah salah satu cara kucing untuk melindungi matanya. Cairan tersebut berguna untuk menyingkirkan debu, serpihan dan juga menjaga bola mata agar tetap lembap.
                        </div>
                    </div>
                </div>
                <div className="article-content">
                    <img src={image1} alt="" className="article-content-img" />
                    <div className="article-content-card">
                        <div className="article-content-card-title">Cara Merawat Anakan Kucing yang Baru Lahir</div>
                        <div className="article-content-card-isi">
                            Merawat anak kucing bukanlah hal yang mudah. Sama seperti bayi yang baru lahir, anak kucing membutuhkan perhatian, kasih sayang dan juga perawatan yang maksimal.
                        </div>
                    </div>
                </div>
                <div className="article-content">
                    <img src={image1} alt="" className="article-content-img" />
                    <div className="article-content-card">
                        <div className="article-content-card-title">Tips & Cara Adopsi Kucing</div>
                        <div className="article-content-card-isi">
                            Berniat untuk memelihara kucing di rumah? Adopsi kucing adalah salah satu cara yang tepat, karena di luar sana, ada banyak sekali kucing yang terlantar, tidak memiliki rumah dan kesulitan mencari makan.
                        </div>
                    </div>
                </div>
                <div className="article-button-more">
                    <NavLink className="article-button-more-text" to="">
                        Lebih Banyak
                    </NavLink>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ArtikelPage;