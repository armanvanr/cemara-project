import React, { useState } from "react";
import './AdoptPage.css';
import adoptImg from '../Assets/Images/AdoptImage.png';
import Navibar from "../Components/NavigationBar/Navibar";
import Footer from "../Components/Footer/Footer";
import SearchIcon from "../Components/Icons/SearchSolid";
import LocMarkIcon from "../Components/Icons/LocMarkSolid";
import DropdownSort from "../Components/Dropdown/DropdownSort";

const AdoptPage = () => {

    const sortCategoryData = {
        placeholder: {
            val: true,
            text: "Urutkan"
        },
        data: [
            {
                nama: "Paling relevan",
                id: "relevance"
            },
            {
                nama: "Jenis kelamin",
                id: "gender"
            },
            {
                nama: "Umur tertua",
                id: "oldest"
            },
            {
                nama: "Umur termuda",
                id: "youngest"
            },
            {
                nama: "Jarak terdekat",
                id: "nearest"
            }
        ]
    };

    const [sortBy, setSortBy] = useState(null);

    return (
        <div className="AdoptPage">
            <Navibar />
            <div className="AdoptMain">
                <div className="AdoptHeader">
                    <div className="AdoptHeader-topnav">
                        <div className="topnav-filter">
                            <div className="filter-search">
                                <SearchIcon className="filter-icon" />
                                <input type="text" className="filter-search-text" placeholder="Cari Hewan"></input>
                            </div>
                            <div className="filter-country">
                                <LocMarkIcon className="filter-icon" />
                                <input text="text" className="filter-country-text" placeholder="Indonesia"></input>
                            </div>
                                <DropdownSort dropdownContent={sortCategoryData} onChange={setSortBy} placeholder={sortBy} buttonStyle={{ width: "200px", height: "50px" }} contentStyle={{ width: "200px" }} className="sort-btn" />
                            {/* <div className="filter-sort">
                                
                            </div> */}
                        </div>
                        <div className="topnav-line"></div>
                        <div className="topnav-button">
                            <div className="topnav-button-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <span className="topnav-button-text">Buat Adopsi</span>
                        </div>
                    </div>
                    <div className="AdoptHeader-category">
                        <div className="category-button">Kucing</div>
                        <div className="category-button">Anjing</div>
                        <div className="category-button">Burung</div>
                        <div className="category-button">Reptil</div>
                        <div className="category-button">Ikan</div>
                        <div className="category-button">Amfibi</div>
                        <div className="category-button">Lainnya</div>
                    </div>
                </div>
                <div className="AdoptBody">
                    <div className="AdoptBody-row">
                        <div className="AdoptBody-col12">
                            <div className="AdoptBody-col" style={{ order: '0' }}>
                                <div className="Adopt-card-container">
                                    <div className="Adopt-card-container">
                                        <img src={adoptImg} className="Adopt-card-img" alt="" />
                                        <div className="Adopt-card-content">
                                            <div className="Adopt-card-content-row">
                                                <div className="Adopt-card-title">Lato-lato (Husky)</div>
                                                <div className="Adopt-card-isi">Anjing | 5.5 tahun | Betina</div>
                                                <div className="Adopt-card-line"></div>
                                                <div className="Adopt-card-desc">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="AdoptBody-col" style={{ order: '1' }}>
                                <div className="Adopt-card-container">
                                    <div className="Adopt-card-container">
                                        <img src={adoptImg} className="Adopt-card-img" alt="" />
                                        <div className="Adopt-card-content">
                                            <div className="Adopt-card-content-row">
                                                <div className="Adopt-card-title">Lato-lato (Husky)</div>
                                                <div className="Adopt-card-isi">Anjing | 5.5 tahun | Betina</div>
                                                <div className="Adopt-card-line"></div>
                                                <div className="Adopt-card-desc">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="AdoptBody-col">
                                <div className="Adopt-card-container">
                                    <div className="Adopt-card-container">
                                        <img src={adoptImg} className="Adopt-card-img" alt="" />
                                        <div className="Adopt-card-content">
                                            <div className="Adopt-card-content-row">
                                                <div className="Adopt-card-title">Lato-lato (Husky)</div>
                                                <div className="Adopt-card-isi">Anjing | 5.5 tahun | Betina</div>
                                                <div className="Adopt-card-line"></div>
                                                <div className="Adopt-card-desc">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="AdoptBody-row">
                        <div className="AdoptBody-col12">
                            <div className="AdoptBody-col" style={{ order: '0' }}>
                                <div className="Adopt-card-container">
                                    <div className="Adopt-card-container">
                                        <img src={adoptImg} className="Adopt-card-img" alt="" />
                                        <div className="Adopt-card-content">
                                            <div className="Adopt-card-content-row">
                                                <div className="Adopt-card-title">Lato-lato (Husky)</div>
                                                <div className="Adopt-card-isi">Anjing | 5.5 tahun | Betina</div>
                                                <div className="Adopt-card-line"></div>
                                                <div className="Adopt-card-desc">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="AdoptBody-col" style={{ order: '1' }}>
                                <div className="Adopt-card-container">
                                    <div className="Adopt-card-container">
                                        <img src={adoptImg} className="Adopt-card-img" alt="" />
                                        <div className="Adopt-card-content">
                                            <div className="Adopt-card-content-row">
                                                <div className="Adopt-card-title">Lato-lato (Husky)</div>
                                                <div className="Adopt-card-isi">Anjing | 5.5 tahun | Betina</div>
                                                <div className="Adopt-card-line"></div>
                                                <div className="Adopt-card-desc">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="AdoptBody-col" style={{ order: '2' }}>
                                <div className="Adopt-card-container">
                                    <div className="Adopt-card-container">
                                        <img src={adoptImg} className="Adopt-card-img" alt="" />
                                        <div className="Adopt-card-content">
                                            <div className="Adopt-card-content-row">
                                                <div className="Adopt-card-title">Lato-lato (Husky)</div>
                                                <div className="Adopt-card-isi">Anjing | 5.5 tahun | Betina</div>
                                                <div className="Adopt-card-line"></div>
                                                <div className="Adopt-card-desc">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="AdoptBody-row">
                        <div className="AdoptBody-col12">
                            <div className="AdoptBody-col" style={{ order: '0' }}>
                                <div className="Adopt-card-container">
                                    <div className="Adopt-card-container">
                                        <img src={adoptImg} className="Adopt-card-img" alt="" />
                                        <div className="Adopt-card-content">
                                            <div className="Adopt-card-content-row">
                                                <div className="Adopt-card-title">Lato-lato (Husky)</div>
                                                <div className="Adopt-card-isi">Anjing | 5.5 tahun | Betina</div>
                                                <div className="Adopt-card-line"></div>
                                                <div className="Adopt-card-desc">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="AdoptBody-col" style={{ order: '1' }}>
                                <div className="Adopt-card-container">
                                    <div className="Adopt-card-container">
                                        <img src={adoptImg} className="Adopt-card-img" alt="" />
                                        <div className="Adopt-card-content">
                                            <div className="Adopt-card-content-row">
                                                <div className="Adopt-card-title">Lato-lato (Husky)</div>
                                                <div className="Adopt-card-isi">Anjing | 5.5 tahun | Betina</div>
                                                <div className="Adopt-card-line"></div>
                                                <div className="Adopt-card-desc">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="AdoptBody-col" style={{ order: '2' }}>
                                <div className="Adopt-card-container">
                                    <div className="Adopt-card-container">
                                        <img src={adoptImg} className="Adopt-card-img" alt="" />
                                        <div className="Adopt-card-content">
                                            <div className="Adopt-card-content-row">
                                                <div className="Adopt-card-title">Lato-lato (Husky)</div>
                                                <div className="Adopt-card-isi">Anjing | 5.5 tahun | Betina</div>
                                                <div className="Adopt-card-line"></div>
                                                <div className="Adopt-card-desc">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="AdoptBody-row">
                        <div className="AdoptBody-col12">
                            <div className="AdoptBody-col" style={{ order: '0' }}>
                                <div className="Adopt-card-container">
                                    <div className="Adopt-card-container">
                                        <img src={adoptImg} className="Adopt-card-img" alt="" />
                                        <div className="Adopt-card-content">
                                            <div className="Adopt-card-content-row">
                                                <div className="Adopt-card-title">Lato-lato (Husky)</div>
                                                <div className="Adopt-card-isi">Anjing | 5.5 tahun | Betina</div>
                                                <div className="Adopt-card-line"></div>
                                                <div className="Adopt-card-desc">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="AdoptBody-col" style={{ order: '1' }}>
                                <div className="Adopt-card-container">
                                    <div className="Adopt-card-container">
                                        <img src={adoptImg} className="Adopt-card-img" alt="" />
                                        <div className="Adopt-card-content">
                                            <div className="Adopt-card-content-row">
                                                <div className="Adopt-card-title">Lato-lato (Husky)</div>
                                                <div className="Adopt-card-isi">Anjing | 5.5 tahun | Betina</div>
                                                <div className="Adopt-card-line"></div>
                                                <div className="Adopt-card-desc">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="AdoptBody-col" style={{ order: '2' }}>
                                <div className="Adopt-card-container">
                                    <div className="Adopt-card-container">
                                        <img src={adoptImg} className="Adopt-card-img" alt="" />
                                        <div className="Adopt-card-content">
                                            <div className="Adopt-card-content-row">
                                                <div className="Adopt-card-title">Lato-lato (Husky)</div>
                                                <div className="Adopt-card-isi">Anjing | 5.5 tahun | Betina</div>
                                                <div className="Adopt-card-line"></div>
                                                <div className="Adopt-card-desc">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="AdoptPagination">
                    <div className="Adopt-footer-button">
                        <div className="Adopt-footer-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                            </svg>
                        </div>
                        Previous
                    </div>
                    <div className="Adopt-footer-page-active">
                        <span className="Adopt-footer-page-text-active">1</span>
                    </div>
                    <div className="Adopt-footer-page">
                        <span className="Adopt-footer-page-text">2</span>
                    </div>
                    <div className="Adopt-footer-page">
                        <span className="Adopt-footer-page-text">3</span>
                    </div>
                    <div className="Adopt-footer-page">
                        <span className="Adopt-footer-page-text">4</span>
                    </div>
                    <div className="Adopt-footer-page">
                        <span className="Adopt-footer-page-text">5</span>
                    </div>
                    <div className="Adopt-footer-page">
                        <span className="Adopt-footer-page-text">6</span>
                    </div>
                    <div className="Adopt-footer-page">
                        <span className="Adopt-footer-page-text">7</span>
                    </div>
                    <div className="Adopt-footer-page">
                        <span className="Adopt-footer-page-text">...</span>
                    </div>
                    <div className="Adopt-footer-page">
                        <span className="Adopt-footer-page-text">23</span>
                    </div>
                    <div className="Adopt-footer-button">
                        Next
                        <div className="Adopt-footer-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AdoptPage;