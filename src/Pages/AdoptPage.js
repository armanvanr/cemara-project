import React from "react";
import './AdoptPage.css';
import Navibar from "../Components/NavigationBar/Navibar";

const AdoptPage = () =>{
    return(
        <div className="AdoptPage">
            <Navibar />
            <div className="AdoptMain">
                <div className="AdoptHeader">
                    <div className="AdoptHeader-topnav">
                        <div className="topnav-filter">
                            <div className="filter-search">
                                <div className="filter-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                                <div className="filter-text">Search Animal</div>
                            </div>
                            <div className="filter-country">
                                <div className="filter-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <div className="filter-text">Indonesia</div>
                            </div>
                            <div className="filter-sort"><div style={{ paddingleft: "15px" }}></div>
                                Urutkan
                                <div className="filter-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="topnav-line"></div>
                        <div className="topnav-button">
                            <div className="topnav-button-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
                                </svg>
                            </div>
                            <span className="topnav-button-text">Buat Adopsi</span>
                        </div>
                    </div>
                    <div className="AdoptHeader-category">
                        <div className="category-button"><div className="category-button-text">Kucing</div></div>
                        <div className="category-button"><div className="category-button-text">Anjing</div></div>
                        <div className="category-button"><div className="category-button-text">Burung</div></div>
                        <div className="category-button"><div className="category-button-text">Reptil</div></div>
                        <div className="category-button"><div className="category-button-text">Ikan</div></div>
                        <div className="category-button"><div className="category-button-text">Amfibi</div></div>
                        <div className="category-button"><div className="category-button-text">Lainnya</div></div>
                    </div>
                </div>
                <div className="AdoptBody"></div>
                <div className="AdoptFooter"></div>
            </div>
        </div>
    )
}

export default AdoptPage;