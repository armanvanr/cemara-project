import React, { useEffect, useState } from "react";
import './ReportPage.css';
import venomousAnimals from '../Assets/Images/venomous.png'
import wildAnimals from '../Assets/Images/wild.png'
import poisonousAnimals from '../Assets/Images/poisonous.png'
import Navibar from "../Components/NavigationBar/Navibar";
import useGeoLocation from "../Hooks/useGeoLocation";
import { storage } from '../firebase'
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import axios from 'axios';
import ExclamationIcon from "../Components/Icons/ExclamationSolid";
import UploadIcon from "../Components/Icons/UploadSolid";
import MapIcon from "../Components/Icons/MapSolid";
import Dropdown from "../Components/Dropdown/Dropdown";
import DropBox from "../Components/Dropdown/DropBox";
import { useDispatch, useSelector } from "react-redux";
import { daAnimalCategory, daImageUrl, daLocation, daPhoneNumberInput } from "../redux/actions/daReport";
import { SET_AR_ADDRESS, SET_AR_ADD_INFO, SET_AR_ANIMAL_NAME, SET_AR_ANIMAL_TYPE, SET_AR_CITY, SET_AR_EMAIL, SET_AR_NAME, SET_AR_PHONE_NUMBER, SET_AR_PROVINCE } from "../redux/actions/types";
import { arImageUrl } from "../redux/actions/arReport";
import reportService from "../Service/report";
import Footer from "../Components/Footer/Footer";

const ReportPage = () => {
    const location = useGeoLocation();
    const dispatch = useDispatch();
    const daReport = useSelector(state => state.daReport);
    const arReport = useSelector(state => state.arReport);

    //select type of report
    const [reportType, setReportType] = useState("invasionReport");
    const reportTypesData = {
        placeholder: {
            val: false,
            text: ""
        },
        data: [
            {
                nama: "Invasi hewan berbahaya",
                id: "invasionReport"
            },
            {
                nama: "Hewan butuh pertolongan",
                id: "rescueReport"
            }
        ]
    };

    //DANGEROUS ANIMAL (DA) REPORT
    //examples of dangerous animals
    const animalDesc = {
        venomous: {
            img: venomousAnimals,
            names: ["Ular berbisa", "Kalajengking", "Kadal berbisa"]
        },
        wild: {
            img: wildAnimals,
            names: ["Buaya", "Macan", "Ular Piton", "Beruang", "Biawak"]
        },
        poisonous: {
            img: poisonousAnimals,
            names: ["Katak beracun", "Tomcat", "Ubur-ubur"]
        }
    };

    //Phone Number Input
    const [isNumberEmpty, setIsNumberEmpty] = useState(false);
    const numberInputHandler = (e) => {
        const inputNumber = e.target.value;
        if (inputNumber === "") {
            setIsNumberEmpty(true);
        }
        dispatch(daPhoneNumberInput(inputNumber));
    };

    // Get an image file for dangerous animal report
    const [imageUpload, setImageUpload] = useState(null);
    const imageUploadHandler = async () => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/img_${Date.now()}`);
        await uploadBytes(imageRef, imageUpload);
        const url = await getDownloadURL(imageRef);
        dispatch(daImageUrl(url));
        dispatch(arImageUrl(url));
    };

    //Select community
    const communityData = {
        placeholder: {
            val: false,
            text: ""
        },
        data: [
            {
                id: "allComms",
                nama: "Semua komunitas"
            },
            {
                id: "knownComms",
                nama: "Komunitas yang diketahui"
            }
        ],
    };

    //Select animal category for daReport
    const [animalCategory, setAnimalCategory] = useState(animalDesc.venomous);
    const animalCategorySelect = (e) => {
        const selectedCategory = e.target.value;
        switch (selectedCategory) {
            case ("venomous"):
                setAnimalCategory(animalDesc.venomous);
                break;
            case ("wild"):
                setAnimalCategory(animalDesc.wild);
                break;
            case ("poisonous"):
                setAnimalCategory(animalDesc.poisonous);
                break;
        };
        dispatch(daAnimalCategory(selectedCategory));
    };

    //Get and assign address into daReport
    const [locData, setLocData] = useState({
        latitude: "",
        longitude: ""
    });

    useEffect(() => {
        if (location.coordinates) {
            setLocData({
                latitude: location.coordinates.latitude,
                longitude: location.coordinates.longitude
            })
        };
    }, [location.coordinates]);

    const reverseUrl = "https://nominatim.openstreetmap.org/reverse?";
    const getAddress = () => {
        axios.get(`${reverseUrl}lat=${locData.latitude}&lon=${locData.longitude}&format=json&accept-language=id-ID`)
            .then((result) => {
                dispatch(daLocation({
                    address: result.data.display_name,
                    province: result.data.address.state,
                    city: result.data.address.city ? (result.data.address.city) : (result.data.address.town)
                }));
            });
    };

    useEffect(() => {
        if (locData.latitude) {
            getAddress();
        }
    }, [locData.latitude]);

    const [reportStatus, setReportStatus] = useState(false);

    const sendDAReport = async () => {
        await reportService.daReportSend(daReport);
    }

    const sendARReport = async () => {
        await reportService.arReportSend(arReport);
    }

    useEffect(() => {
        if (reportStatus) {
            if (reportType === "invasionReport" && daReport.communityStatus) {
                sendDAReport();
            } else if (reportType === "rescueReport" && arReport.communityStatus) {
                sendARReport();
            }
        }

    }, [reportStatus]);

    //submit dangerous animal Report
    const daReportSubmitHandler = async () => {
        imageUploadHandler().then(() => {
            setReportStatus(true);
        });
    };

    //ANIMAL RESCUE (AR) REPORT

    //Select animal group to rescue
    const [animalType, setAnimalType] = useState("");
    const animalRescueData = {
        actionType: SET_AR_ANIMAL_TYPE,
        placeholder: {
            val: true,
            text: "Pilih kelompok hewan"
        },
        data: [
            {
                nama: "Hewan piaraan",
                id: "pets"
            },
            {
                nama: "Hewan liar",
                id: "wilds"
            },
            {
                nama: "Hewan ternak",
                id: "livestocks"
            }
        ]
    };

    //Input animal name, additional info, reporter identity (name, email, phone number, address)
    const handleFieldChange = (e) => {
        const { name, value } = e.target;
        dispatch({
            type: name,
            payload: value,
        });
    };

    //Select Province and City
    const [dataProvinsi, setDataProvinsi] = useState([]);
    const [dataKota, setDataKota] = useState([]);

    const dataIndoUrl = "https://ibnux.github.io/data-indonesia"
    const getProvinsi = () => {
        axios.get(`${dataIndoUrl}/provinsi.json`)
            .then((res) => {
                setDataProvinsi(res.data)
            });
    };

    const [selectedIdProv, setSelectedIdProv] = useState("");
    const provinceList = {
        actionType: SET_AR_PROVINCE,
        placeholder: {
            val: true,
            text: "Pilih provinsi"
        },
        data: dataProvinsi
    };

    const getKota = () => {
        if (selectedIdProv) {
            axios.get(`${dataIndoUrl}/kabupaten/${selectedIdProv}.json`)
                .then((res) => {
                    setDataKota(res.data)
                })
                .catch((err) => console.log(err))
        };
    };

    const [selectedIdKota, setSelectedIdKota] = useState("");
    const cityList = {
        actionType: SET_AR_CITY,
        placeholder: {
            val: true,
            text: "Pilih kota"
        },
        data: dataKota
    };

    useEffect(() => {
        getProvinsi();
    }, []);

    useEffect(() => {
        getKota();
    });


    const arReportSubmitHandler = async () => {
        imageUploadHandler().then(() => {
            setReportStatus(true);
        });
    };

    return (
        <div className="report-page">
            <Navibar />
            <div className="report-header">
                <p className="report-header-1">Butuh pertolongan untuk evakuasi?</p>
                <p className="report-header-2">Buat laporan ke komunitas sekitar anda jika butuh pertolongan untuk evakuasi hewan berbahaya dan hewan yang butuh pertolongan</p>
            </div>

            <div className="report-main">

                <div className="report-type-section">
                    <div className="report-form-card">
                        <Dropdown dropdownContent={reportTypesData} onChange={setReportType} buttonStyle={{ width: "392px" }} contentStyle={{ width: "392px" }} className="dropdown-btn" />
                        {(reportType === "invasionReport") ? (
                            <div className="number-input-group">
                                <input type="text" placeholder="Masukkan nomor telepon" className="number-input" onChange={numberInputHandler}></input>
                                <div className="required-warning" style={{ color: isNumberEmpty ? "#E92F2F" : "transparent" }}>
                                    <ExclamationIcon className="req-warn-icon" style={{ color: isNumberEmpty ? "#E92F2F" : "transparent" }} />
                                    <p className="req-warn-text">Wajib diisi</p>
                                </div>
                            </div>
                        ) : (
                            <Dropdown dropdownContent={animalRescueData} onChange={setAnimalType} buttonStyle={{ width: "392px" }} contentStyle={{ width: "392px" }} className="dropdown-btn" />
                        )}

                        {(reportType === "invasionReport") ?
                            (null) : (
                                <input type="text" name={SET_AR_ANIMAL_NAME} value={arReport.animalName} onChange={handleFieldChange} placeholder="Jenis hewan" className="animal-name-input"></input>
                            )}

                        <button className="image-upload-button" style={{ borderColor: imageUpload ? "#2E9C33" : "#97CD99" }}
                            onClick={() => { document.querySelector(".input-field").click() }} >
                            <input type="file" onChange={(e) => { setImageUpload(e.target.files[0]) }} className="input-field" hidden />
                            <UploadIcon className="img-up-icon" />
                            <p>Unggah foto</p>
                        </button>

                        {(reportType === "invasionReport") ?
                            (null) : (
                                <div className="add-info-group">
                                    <span>Informasi tambahan</span>
                                    <input type="text" name={SET_AR_ADD_INFO} value={arReport.addInfo} onChange={handleFieldChange} placeholder="Tulis di sini" className="add-info-input"></input>
                                </div>
                            )}
                    </div>

                    {(reportType === "invasionReport") ?
                        (
                            <div className="community-select-group">
                                <DropBox dropdownContent={communityData} buttonStyle={{ width: "320px" }} contentStyle={{ bottom: "60px", width: "320px" }} className="community-select" />
                                <button className="report-button" onClick={daReportSubmitHandler}>
                                    <p>Laporkan!</p>
                                </button>
                            </div>
                        ) : (null)}
                </div>

                {(reportType === "invasionReport") ? (
                    <div className="da-select-section">
                        <div className="da-selector-group">
                            <p>Pilih kelompok hewan yang sesuai</p>
                            <div className="buttons-wrapper" onClick={animalCategorySelect}>
                                <input type="radio" name="select" id="option-1" value="venomous" defaultChecked />
                                <input type="radio" name="select" id="option-2" value="wild" />
                                <input type="radio" name="select" id="option-3" value="poisonous" />
                                <label htmlFor="option-1" className="option option-1">
                                    <span>Hewan berbisa</span>
                                </label>
                                <label htmlFor="option-2" className="option option-2">
                                    <span>Hewan buas</span>
                                </label>
                                <label htmlFor="option-3" className="option option-3">
                                    <span>Hewan beracun</span>
                                </label>
                            </div>

                            <div className="animal-examples">
                                <img src={animalCategory.img} alt="images" className="animal-images" />
                                <div className="animal-names">
                                    {animalCategory.names.map((name, index) =>
                                        <div className="names-map" key={index}>
                                            {index > 0 ? <span>&bull;</span> : null}
                                            <p>{name}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="report-right-section">
                            <div className="report-card-wrapper">
                                <div className="form-title">
                                    <span>Pelapor</span>
                                </div>
                                <input type="text" name={SET_AR_NAME} value={arReport.name} onChange={handleFieldChange} className="reporter-input" placeholder="Nama lengkap" />
                                <input type="email" name={SET_AR_EMAIL} value={arReport.email} onChange={handleFieldChange} className="reporter-input" placeholder="Email" />
                                <input type="text" name={SET_AR_PHONE_NUMBER} value={arReport.phoneNumber} onChange={handleFieldChange} className="reporter-input" placeholder="Nomor telepon" />
                                <div className="address-group">
                                    <input type="text" name={SET_AR_ADDRESS} value={arReport.address} onChange={handleFieldChange} className="reporter-address" placeholder="Alamat"></input>
                                    <button className="map-button">
                                        <MapIcon />
                                    </button>
                                </div>
                                <div className="province-city-group">
                                    <Dropdown dropdownContent={provinceList} onChange={setSelectedIdProv} buttonStyle={{ width: "302px" }} contentStyle={{ wwidth: "auto", height: "320px", overflowY: "scroll", bottom: "60px" }} className="dropdown-btn" />
                                    <Dropdown dropdownContent={cityList} onChange={setSelectedIdKota} buttonStyle={{ width: "302px" }} contentStyle={{ wwidth: "auto", height: "320px", overflowY: "scroll", bottom: "60px" }} className="dropdown-btn" />
                                </div>
                            </div>
                            <div className="ar-buttons-group">
                                <DropBox dropdownContent={communityData} buttonStyle={{ width: "320px" }} contentStyle={{ bottom: "60px", width: "320px" }} className="community-select" />
                                <button className="rescue-report-button" onClick={arReportSubmitHandler}>
                                    <p>Laporkan!</p>
                                </button>
                            </div>
                        </div>
                    </>
                )}

            </div>
            <Footer />
        </div>
    )
}

export default ReportPage;