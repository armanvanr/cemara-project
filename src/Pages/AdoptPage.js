import React, { useEffect, useState } from "react";
import './AdoptPage.css';
import adoptImg from '../Assets/Images/AdoptImage.png';
import Navibar from "../Components/NavigationBar/Navibar";
import Footer from "../Components/Footer/Footer";
import SearchIcon from "../Components/Icons/SearchSolid";
import LocMarkIcon from "../Components/Icons/LocMarkSolid";
import DropdownSort from "../Components/Dropdown/DropdownSort";
import PlusIcon from "../Components/Icons/PlusSolid";
import { NavLink } from "react-router-dom";

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

    const animalsData = [
        {
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/15/White_Persian_Cat.jpg",
            name: "Biskuit",
            race: "Persia",
            species: "Kucing",
            age: "1 tahun",
            gender: "Jantan",
            desc: "Suka bantal",
            ownerName: "Forger",
            ownerNumber: "089812345678"
        },
        {
            imageUrl: "https://3.bp.blogspot.com/-yvqnr4r24qM/XHJiE3LMMmI/AAAAAAAAHeg/tHfxaonXI_ALWs2l75vK4olzBjnuDXdTwCLcBGAs/s1600/hamster-campbell-1-1080x707.jpg",
            name: "Cimol",
            race: "Campbell",
            species: "Hamster",
            age: "4 bulan",
            gender: "Betina",
            desc: "Suka ngumpet",
            ownerName: "Forger",
            ownerNumber: "089812345678"
        },
        {
            imageUrl: "https://media-be.chewy.com/wp-content/uploads/2021/04/20144004/Chihuahua_Feature-Image-1024x615.jpg",
            name: "Cookie",
            race: "Chihuahua",
            species: "Anjing",
            age: "6 bulan",
            gender: "Jantan",
            desc: "Suka lompat",
            ownerName: "Forger",
            ownerNumber: "089812345678"
        },
        {
            imageUrl: "https://images.tokopedia.net/img/cache/900/VqbcmM/2021/4/20/f54f8dab-1788-447d-8242-040da5f5706e.jpg",
            name: "Cheetos",
            race: "Domestik",
            species: "Tupai terbang",
            age: "2 bulan",
            gender: "Betina",
            desc: "Suka terbang",
            ownerName: "Forger",
            ownerNumber: "089812345678"
        },
        {
            imageUrl: "https://cdn.pixabay.com/photo/2013/10/29/15/37/sleeping-chameleon-202417_960_720.jpg",
            name: "Lemonia",
            race: "Yaman",
            species: "Bunglon",
            age: "1 tahun",
            gender: "Betina",
            desc: "Suka tidur",
            ownerName: "Forger",
            ownerNumber: "089812345678"
        },
        {
            imageUrl: "https://cdnwpseller.gramedia.net/wp-content/uploads/2021/10/20125250/Jenis-Burung-Hantu-Serak-Jawa.png",
            name: "Vanilla",
            race: "Serak Jawa",
            species: "Burung hantu",
            age: "11 bulan",
            gender: "Jantan",
            desc: "Suka hinggap",
            ownerName: "Forger",
            ownerNumber: "089812345678"
        },

    ];

    const [searchInput, setSearchInput] = useState("");
    const searchItems = (e) => {
        const searchValue = e.target.value;
        setSearchInput(searchValue);
    };
    const [sortBy, setSortBy] = useState(null);
    const searchCategory = (e) => {
        const searchValue = e.target.value;
        console.log(searchValue);
        // setSearchInput(searchValue);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="AdoptPage">
            <Navibar />
            <div className="AdoptMain">
                <div className="AdoptHeader">
                    <div className="AdoptHeader-topnav">
                        <div className="topnav-filter">
                            <div className="filter-search">
                                <SearchIcon className="filter-icon" />
                                <input type="text" className="filter-search-text" placeholder="Cari Hewan" onChange={searchItems}></input>
                            </div>
                            <div className="filter-country">
                                <LocMarkIcon className="filter-icon" />
                                <input text="text" className="filter-country-text" placeholder="Indonesia"></input>
                            </div>
                            <DropdownSort dropdownContent={sortCategoryData} onChange={setSortBy} placeholder={sortBy} buttonStyle={{ width: "200px", height: "50px" }} contentStyle={{ width: "200px" }} className="sort-btn" />
                        </div>
                        <div className="topnav-line"></div>
                        <NavLink to="/createadopt" className="topnav-button" style={{ textDecoration: "none" }}>
                            <div className="topnav-button-icon">
                                <PlusIcon />
                            </div>
                            <span className="topnav-button-text">Buat Adopsi</span>
                        </NavLink>
                    </div>
                    <div className="AdoptHeader-category" onChange={searchCategory}>
                        <div className="category-button" value="kucing">Kucing</div>
                        <div className="category-button" value="anjing">Anjing</div>
                        <div className="category-button" value="burung">Burung</div>
                        <div className="category-button" value="reptil">Reptil</div>
                        <div className="category-button" value="ikan">Ikan</div>
                        <div className="category-button" value="amfibi">Amfibi</div>
                        <div className="category-button" value="lainnya">Lainnya</div>
                    </div>
                </div>
                <div className="AdoptBody">
                    {animalsData
                        .filter((data) => {
                            if (searchInput == "") {
                                return data;
                            } else if (data.species.toLowerCase().includes(searchInput.toLowerCase())) {
                                return data;
                            };
                        })
                        .map((animal, index) => {
                            return (
                                <div className="Adopt-card-container" key={index}>
                                    <img src={animal.imageUrl} className="Adopt-card-img" alt="" />
                                    <div className="Adopt-card-content">
                                        <div className="Adopt-card-content-row">
                                            <div className="Adopt-card-title">{animal.name}{" "}{`(${animal.race})`}</div>
                                            <div className="Adopt-card-isi">{animal.species}</div>
                                            <div className="Adopt-card-isi">{animal.age}{" "}&bull;{" "}{animal.gender}</div>
                                            <div className="Adopt-card-line"></div>
                                            <div className="Adopt-card-desc">
                                                {animal.desc}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
                <div className="AdoptFooter">
                    {/* <div className="AdoptPagination">
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
                    </div> */}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AdoptPage;