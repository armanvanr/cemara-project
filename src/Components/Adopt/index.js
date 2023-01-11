import React from "react";
import './style.css'
import '../../Components/Card.css'
import pic from '../../Assets/Images/pic-dashboard.png';

const Report = () => {
    return (
        <div className="container-adopt">
            <div className="adopt-button">
                <div className="adopt-container-button">
                    <div className="adopt-container-button-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <span className="adopt-container-button-text">Tambah Hewan</span>
                </div>
            </div>
            <div className="adopt-list-content">
                <div className="card-dashboard">
                    <img src={pic} className="card-dashboard-image" alt="" />
                    <div className="adopt-card">
                        <div className="adopt-card-title">
                            <div className="adopt-card-title-text">Lato-lato (Husky)</div>
                            <div className="adopt-card-title-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                </svg>
                            </div>
                        </div>
                        <span className="adopt-card-isi1">
                            Anjing<i className="adopt-bullet"></i>5.5 tahun<i className="adopt-bullet"></i>Betina
                        </span>
                        <div className="adopt-line"></div>
                        <div className="adopt-card-isi2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </div>
                    </div>
                </div>
                <div className="card-dashboard">
                    <img src={pic} className="card-dashboard-image" alt="" />
                    <div className="adopt-card">
                        <div className="adopt-card-title">
                            <div className="adopt-card-title-text">Lato-lato (Husky)</div>
                            <div className="adopt-card-title-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                </svg>
                            </div>
                        </div>
                        <span className="adopt-card-isi1">
                            Anjing<i className="adopt-bullet"></i>5.5 tahun<i className="adopt-bullet"></i>Betina
                        </span>
                        <div className="adopt-line"></div>
                        <div className="adopt-card-isi2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Report