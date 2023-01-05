import React from "react";
import './style.css'
import '../../Components/Card.css'
import pic from '../../Assets/Images/pic-dashboard.png';

const Report = () => {
    return (
        <div className="list-container">
            <div className="list-process-container">
                <span className="text-title-list">Diproses</span>
                <div className="list-item-container">
                    <div className="card-dashboard">
                        <div className="card-dashboard-left">
                            <img src={pic} className="card-dashboard-image" alt="" />
                            <div className="card-dashboard-detail-container">
                                <div className="card-dashboard-detail-header-container">
                                    <div className="card-dashboard-detail-header-title">
                                        <div className="card-dashboard-detail-header-title-text">
                                            Invasi Hewan Berbahaya
                                        </div>
                                        <div className="card-dashboard-detail-header-title-type-container dangerous">
                                            <div className="card-dashboard-detail-header-title-type-text">
                                                Hewan Berbisa
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-dashboard-detail-location-container">
                                        <div className="card-dashboard-detail-location-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div className="card-dashboard-detail-location-text">
                                            Jl. Lato-lato, Surabaya, Jawa Timur
                                        </div>
                                    </div>
                                </div>
                                <div className="card-dashboard-detail-location-phone-container">
                                    <div className="card-dashboard-detail-location-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                        </svg>
                                    </div>
                                    <div className="card-dashboard-detail-location-phone-text">081234567812</div>
                                </div>
                            </div>
                        </div>
                        <div className="card-dashboard-action-container">
                            <div className="card-dashboard-action-time">
                                <div className="card-dashboard-action-time-text"> 16.45</div>
                            </div>
                            <div className="card-dashboard-action-button finish">
                                <div className="card-dashboard-action-button-text">
                                    Selesai
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card-dashboard">
                        <div className="card-dashboard-left">
                            <img src={pic} className="card-dashboard-image" alt="" />
                            <div className="card-dashboard-detail-container">
                                <div className="card-dashboard-detail-header-container">
                                    <div className="card-dashboard-detail-header-title">
                                        <div className="card-dashboard-detail-header-title-text">
                                            Hewan Butuh Pertolongan
                                        </div>
                                        <div className="card-dashboard-detail-header-title-type-container rescue">
                                            <div className="card-dashboard-detail-header-title-type-text">
                                                Hewan Liar
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-dashboard-detail-location-container">
                                        <div className="card-dashboard-detail-information-text">Trenggiling masuk sumur</div>
                                    </div>

                                </div>
                                <div className="card-dashboard-detail-location-container">
                                    <div className="card-dashboard-detail-location-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="card-dashboard-detail-location-text">
                                        Jl. Lato-lato, Surabaya, Jawa Timur
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-dashboard-action-container">
                            <div className="card-dashboard-action-time">
                                <div className="card-dashboard-action-time-text"> 16.45</div>
                            </div>
                            <div className="card-dashboard-action-button finish">
                                <div className="card-dashboard-action-button-text">
                                    Selesai
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="list-call-container">
                <span className="text-title-list">Daftar panggilan</span>
                <div className="card-dashboard">
                    <div className="card-dashboard-left">
                        <img src={pic} className="card-dashboard-image" alt="" />
                        <div className="card-dashboard-detail-container">
                            <div className="card-dashboard-detail-header-container">
                                <div className="card-dashboard-detail-header-title">
                                    <div className="card-dashboard-detail-header-title-text">
                                        Invasi Hewan Berbahaya
                                    </div>
                                    <div className="card-dashboard-detail-header-title-type-container dangerous">
                                        <div className="card-dashboard-detail-header-title-type-text">
                                            Hewan Berbisa
                                        </div>
                                    </div>
                                </div>
                                <div className="card-dashboard-detail-location-container">
                                    <div className="card-dashboard-detail-location-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="card-dashboard-detail-location-text">
                                        Jl. Lato-lato, Surabaya, Jawa Timur
                                    </div>
                                </div>
                            </div>
                            <div className="card-dashboard-detail-location-phone-container">
                                <div className="card-dashboard-detail-location-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                </div>
                                <div className="card-dashboard-detail-location-phone-text">081234567812</div>
                            </div>
                        </div>
                    </div>
                    <div className="card-dashboard-action-container">
                        <div className="card-dashboard-action-time">
                            <div className="card-dashboard-action-time-text"> 16.45</div>
                        </div>
                        <div className="card-dashboard-action-button accept">
                            <div className="card-dashboard-action-button-text">
                                Selesai
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card-dashboard">
                    <div className="card-dashboard-left">
                        <img src={pic} className="card-dashboard-image" alt="" />
                        <div className="card-dashboard-detail-container">
                            <div className="card-dashboard-detail-header-container">
                                <div className="card-dashboard-detail-header-title">
                                    <div className="card-dashboard-detail-header-title-text">
                                        Hewan Butuh Pertolongan
                                    </div>
                                    <div className="card-dashboard-detail-header-title-type-container rescue">
                                        <div className="card-dashboard-detail-header-title-type-text">
                                            Hewan Liar
                                        </div>
                                    </div>
                                </div>
                                <div className="card-dashboard-detail-location-container">
                                    <div className="card-dashboard-detail-information-text">Trenggiling masuk sumur</div>
                                </div>

                            </div>
                            <div className="card-dashboard-detail-location-container">
                                <div className="card-dashboard-detail-location-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="card-dashboard-detail-location-text">
                                    Jl. Lato-lato, Surabaya, Jawa Timur
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-dashboard-action-container">
                        <div className="card-dashboard-action-time">
                            <div className="card-dashboard-action-time-text"> 16.45</div>
                        </div>
                        <div className="card-dashboard-action-button accept">
                            <div className="card-dashboard-action-button-text">
                                Selesai
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Report