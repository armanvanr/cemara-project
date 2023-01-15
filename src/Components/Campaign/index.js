import React from "react";
import './style.css'
import '../../Components/Card.css'
import pic from '../../Assets/Images/pic-dashboard.png';

const Report = () => {
    return (
        <div className="container-campaign">
            <div className="campaign-button">
                <div className="container-button">
                    <div className="container-button-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <span className="container-button-text">Buat Baru</span>
                </div>
            </div>
            <div className="campaign-list-content">
                <div className="card-dashboard">
                    <img src={pic} className="card-dashboard-image" alt="" />
                    <div className="campaign-card">
                        <div className="campaign-card-up">
                            <div className="campaign-card-up-title">
                                <div className="campaign-card-up-title-text">Donasi pakan harimau Kebun Binatang Lato-Lato</div>
                                <div className="campaign-card-up-title-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="campaign-card-bottom">
                            <b>Rp5.456.641</b> terkumpul dari <b>Rp12.500.000</b>
                        </div>
                    </div>
                </div>
                <div className="card-dashboard">
                    <img src={pic} className="card-dashboard-image" alt="" />
                    <div className="campaign-card">
                        <div className="campaign-card-up">
                            <div className="campaign-card-up-title">
                                <div className="campaign-card-up-title-text">Donasi pakan harimau Kebun Binatang Lato-Lato</div>
                                <div className="campaign-card-up-title-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="campaign-card-bottom">
                            <b>Rp5.456.641</b> terkumpul dari <b>Rp12.500.000</b>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Report