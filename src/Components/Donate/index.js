import React from "react";
import './style.css'
import pic from '../../Assets/Images/pic-dashboard.png';

const Donate = () => {
    return (
        <div className="container-donate">
            <div className="donate-button">
                <div className="donate-container-button">
                    <div className="donate-container-button-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <span className="donate-container-button-text">Tambah Barang</span>
                </div>
            </div>
            <div className="donate-list-content">
                <div className="donate-main">
                    <div className="card-dashboard-donate">
                        <img src={pic} className="card-dashboard-donate-image" alt="" />
                        <div className="donate-card">
                            <div className="donate-card-up">
                                <div className="donate-card-up-title">
                                    <div className="donate-card-up-title-text">
                                        Kandang Anjing
                                    </div>
                                    <div className="donate-card-up-title-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="donate-card-up-isi">
                                    Perlengkapan Hewan
                                </div>
                            </div>
                            <div className="donate-card-bottom">
                                2 Unit
                            </div>
                        </div>
                    </div>
                    <div className="card-dashboard-donate">
                        <img src={pic} className="card-dashboard-donate-image" alt="" />
                        <div className="donate-card">
                            <div className="donate-card-up">
                                <div className="donate-card-up-title">
                                    <div className="donate-card-up-title-text">
                                        Kandang Anjing
                                    </div>
                                    <div className="donate-card-up-title-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="donate-card-up-isi">
                                    Perlengkapan Hewan
                                </div>
                            </div>
                            <div className="donate-card-bottom">
                                2 Unit
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="donate-main">
                    <div className="card-dashboard-donate">
                        <img src={pic} className="card-dashboard-donate-image" alt="" />
                        <div className="donate-card">
                            <div className="donate-card-up">
                                <div className="donate-card-up-title">
                                    <div className="donate-card-up-title-text">
                                        Kandang Anjing
                                    </div>
                                    <div className="donate-card-up-title-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="donate-card-up-isi">
                                    Perlengkapan Hewan
                                </div>
                            </div>
                            <div className="donate-card-bottom">
                                2 Unit
                            </div>
                        </div>
                    </div>
                    <div className="card-dashboard-donate">
                        <img src={pic} className="card-dashboard-donate-image" alt="" />
                        <div className="donate-card">
                            <div className="donate-card-up">
                                <div className="donate-card-up-title">
                                    <div className="donate-card-up-title-text">
                                        Kandang Anjing
                                    </div>
                                    <div className="donate-card-up-title-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="donate-card-up-isi">
                                    Perlengkapan Hewan
                                </div>
                            </div>
                            <div className="donate-card-bottom">
                                2 Unit
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Donate