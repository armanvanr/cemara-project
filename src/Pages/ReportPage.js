import React, { useState } from "react";
import './ReportPage.css';
import brand from '../Assets/Images/brand.jpg'
import { ExclamationTriangleIcon, ArrowUpTrayIcon } from '@heroicons/react/24/solid'
import venomAnimal from '../Assets/Images/venomous.jpg'
import wildAnimal from '../Assets/Images/wild.jpg'
import poisonAnimal from '../Assets/Images/poisonous.jpg'
// import 'bootstrap/dist/css/bootstrap.min.css';


const ReportPage = () => {
    const imageHandler = (e) => {
        const img = e.target.value;
        console.log('1', img)
    }

    return (
        <div className="report-page">
            <div className="navbar">
                <img src={brand} className="navbar-brand" alt="" />
                <div className="navbar-buttons">
                    <div className="navbar-items">
                        <a>Daftar Donasi</a>
                        <a>Laporan</a>
                        <a>Tentang Kami</a>
                        <a>Aksi</a>
                        <a>Artikel</a>
                    </div>
                    <button className="login-button">
                        <p>Login</p>
                    </button>
                </div>
            </div>
            <div className="report-main">
                <div className="form-group">
                    <div className="form-card">
                        <div className="form-floating ">
                            <select className="report-type" id="floatingSelect" aria-label="Floating label select example">
                                <option defaultValue="dangerReport">Invasi hewan berbahaya</option>
                                <option value="rescueReport">Hewan butuh pertolongan</option>
                            </select>
                        </div>
                        <div className="input-field-group">
                            <input type="text" placeholder="Masukkan nomor telepon"></input>
                            <div className="required-warning">
                                <ExclamationTriangleIcon className="req-warn-icon" />
                                <p>Wajib diisi</p>
                            </div>

                        </div>

                        <button className="image-upload-button" type="button" >
                            {/* <ArrowUpTrayIcon className="img-up-icon"/> */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="img-up-icon" viewBox="0 0 20 20" fill="currentColor" >
                                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                            <p>Unggah foto</p>
                        </button>
                    </div>
                    <div className="com-btn-group">
                        <div className="form-floating">
                            <select className="community-select" id="floatingSelect" aria-label="Floating label select example" onChange={imageHandler}>
                                <option value="allComms" >Semua komunitas</option>
                                <option value="certainComms">Komunitas yang diketahui</option>
                            </select>
                        </div>
                        <button className="report-button">
                            <p>Laporkan!</p>
                        </button>
                    </div>
                </div>
                <div className="da-select-section">
                    <div className="da-selector-group">
                        <p>Pilih kelompok hewan yang sesuai</p>
                        <div className="da-buttons">
                            <button className="venomous">Hewan berbisa</button>
                            <button className="wild">Hewan buas</button>
                            <button className="poisonous">Hewan beracun</button>
                        </div>
                    </div>
                    <div className="da-selected-group">
                        <img src="" alt="" />
                        <div className="animals-name">
                            <p>Ular berbisa</p>
                            <p>Kalajengking</p>
                            <p>Kadal berbisa</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReportPage;