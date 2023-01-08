import React, { useEffect, useRef, useState } from "react";
import './ReportPage.css';
import venomousAnimals from '../Assets/Images/venomous.png'
import wildAnimals from '../Assets/Images/wild.png'
import poisonousAnimals from '../Assets/Images/poisonous.png'
import Navibar from "../Components/NavigationBar/Navibar";
import useGeoLocation from "../Hooks/useGeoLocation";
import { storage } from '../firebase'
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import axios from 'axios';
import PageFooter from "../Components/PageFooter/PageFooter";
import ArrowUpIcon from "../Components/Icons/ArrowUpSolid";
import ArrowDownIcon from "../Components/Icons/ArrowDownSolid";
import ExclamationIcon from "../Components/Icons/ExclamationSolid";
import UploadIcon from "../Components/Icons/UploadSolid";
import MapIcon from "../Components/Icons/MapSolid";

const ReportPage = () => {
    const location = useGeoLocation();
    const myRef = useRef();
    const outsideClick = e => {
        if (!myRef.current.contains(e.target)) {
            // setIsActive(false);
            // setIsActive2(false);
            // setIsActive3(false);
            // setIsActive4(false);
            // setIsActive5(false);
            // setIsActive6(false);
            // console.log('outside')
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", outsideClick);
        return () => document.removeEventListener("mousedown", outsideClick);
    });

    //INVASION REPORT
    //initial state of INVASION REPORT
    const [dangerReport, setDangerReport] = useState({
        reportType: "invasionReport",
        phoneNumber: "",
        imageUrl: null,
        animalCategory: "venomous",
        location: { latitude: "", longitude: "" },
        community: "allCommunities"
    })

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
    }

    //select type of invasion animal
    const [reportType, setReportType] = useState("invasionReport");
    const [isActive, setIsActive] = useState(false);
    const [selected, setIsSelected] = useState("Invasi hewan berbahaya");
    const reportTypeHandler = (e) => {
        const selectedType = e.target.value;
        setReportType(selectedType);
        setDangerReport({
            ...dangerReport,
            reportType: reportType
        });
        setIsSelected(e.target.textContent);
        setIsActive(!isActive);
    };

    const numberInputHandler = (e) => {
        const inputNumber = e.target.value;
        setDangerReport({
            ...dangerReport,
            phoneNumber: inputNumber
        })
    }


    // Get an image file for dangerous animal report
    const [imageUpload, setImageUpload] = useState(null);

    const imageUploadHandler = () => {
        if (imageUpload == null) return;
        // rename to `images/${user.id}_${Date.now()}`        
        const imageRef = ref(storage, `images/${imageUpload.name}_${Date.now()}`);
        uploadBytes(imageRef, imageUpload)
            .then(() => {
                console.log('uploaded')
                getDownloadURL(imageRef)
                    .then((url) => {
                        appendImage(url);
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const appendImage = (url) => {
        setDangerReport({
            ...dangerReport,
            imageUrl: url
        })
    }

    // const imageUploadHandler = async () => {
    //     if (imageUpload == null) return;
    //     // rename to `images/${user.id}_${Date.now()}`        
    //     const imageRef = ref(storage, `images/${imageUpload.name}_${Date.now()}`);
    //     await uploadBytes(imageRef, imageUpload);

    //     const imageUrl = await getDownloadURL(imageRef);
    //     appendImage(imageUrl);
    // }

    //select community invasion report
    const [isActive3, setIsActive3] = useState(false);
    const [isActive4, setIsActive4] = useState(false);
    const [selected3, setIsSelected3] = useState("Semua komunitas");
    const communitySelectHandler = (e) => {
        const selectedCommunity = e.target.value;
        if (selectedCommunity === "allComms") {
            setIsSelected3(e.target.textContent);
            setIsActive3(!isActive3);
            setIsActive4(false);
            setDangerReport({
                ...dangerReport,
                community: selectedCommunity
            });
        } else {
            setIsActive4(!isActive4);
            setIsSelected3(e.target.textContent);
            setDangerReport({
                ...dangerReport,
                community: selectedCommunity
            });
        }
    };
    const communityList = ["Garda Satwa Indonesia", "Pejaten Shelter", "ASPERA", "Garda Satwa Indonesia", "Pejaten Shelter", "ASPERA", "Garda Satwa Indonesia", "Pejaten Shelter", "ASPERA"];
    const [checkedItems, setCheckedItems] = useState({});

    const handleChange = (e) => {
        setCheckedItems({
            ...checkedItems,
            [e.target.name]: e.target.checked
        });
    };

    //To render images of dangerous animals
    const [animalType, setAnimalType] = useState(animalDesc.venomous);
    const animalTypeSelect = (e) => {
        const selectedType = e.target.value;
        switch (selectedType) {
            case ("venomous"):
                setAnimalType(animalDesc.venomous);
                break;
            case ("wild"):
                setAnimalType(animalDesc.wild);
                break;
            case ("poisonous"):
                setAnimalType(animalDesc.poisonous);
                break;
            default:
                setAnimalType(animalDesc.venomous);
                break;
        }
        setDangerReport({
            ...dangerReport,
            animalCategory: selectedType
        })
    };

    //submit dangerous animal Report
    const invasionReportSubmitHandler = () => {
        imageUploadHandler();
        //get and assign location into dangerReport
        if (location.loaded) {
            setDangerReport({
                ...dangerReport,
                location: location.coordinates
            })
            console.log('in if', location.coordinates)
        } else {
            console.log('location unavailable')
        }
        axios.post("http://localhost:3030/report", dangerReport);
        console.log('report :', dangerReport);
        console.log('in handler', location.coordinates)
    };

    //ANIMAL RESCUE REPORT
    const [arReport, setArReport] = useState({
        reportType: "rescueReport",
        animalGroup: "",
        animalName: "",
        imageUrl: null,
        addInfo: "",
        reporterName: "",
        reporterEmail: "",
        reporterPhone: "",
        reporterAddress: "",
        province: "",
        city: "",
        community: "allCommunities"
    });

    //select animal group to rescue
    const [isActive2, setIsActive2] = useState(false);
    const [selected2, setIsSelected2] = useState("Pilih kelompok hewan");
    const animalGroupHandler = (e) => {
        const selectedGroup = e.target.value;
        setArReport({
            ...arReport,
            animalGroup: selectedGroup
        });
        setIsSelected2(e.target.textContent);
        setIsActive2(!isActive2);
    }

    const handleFieldChange = (e) => {
        const { name, value } = e.target;
        setArReport({
            ...arReport, [name]: value
        })
        console.log(arReport.animalName)
    }

    const [dataProvinsi, setDataProvinsi] = useState([]);
    const [dataKota, setDataKota] = useState([]);
    const [idProv, setIdProv] = useState("");

    const dataIndoUrl = "https://ibnux.github.io/data-indonesia"
    const getProvinsi = () => {
        axios.get(`${dataIndoUrl}/provinsi.json`)
            .then((res) => {
                setDataProvinsi(res.data)
            })
    }

    const [isActive7, setIsActive7] = useState(false);
    const [selected7, setIsSelected7] = useState("Pilih provinsi");
    const provinceSelectHandler = (e) => {
        const id = e.target.value;
        setIdProv(id);
        setIsSelected7(e.target.textContent);
        setIsActive7(!isActive7);
        setIsSelected8("Pilih kota");
    };

    const getKota = () => {
        if (idProv) {
            axios.get(`${dataIndoUrl}/kabupaten/${idProv}.json`)
                .then((res) => {
                    setDataKota(res.data)
                })
        }

    }

    // const citySelectHandler = (e) => {
    //     const id = e.target.value;
    //     console.log('city id', id)
    // }

    const [isActive8, setIsActive8] = useState(false);
    const [selected8, setIsSelected8] = useState("Pilih kota");
    const citySelectHandler = (e) => {
        const id = e.target.value;
        setIsSelected8(e.target.textContent);
        setIsActive8(!isActive8);
    };

    useEffect(() => {
        getProvinsi();
    }, [])

    useEffect(() => {
        getKota();
    },)

    //select community invasion report
    const [isActive5, setIsActive5] = useState(false);
    const [isActive6, setIsActive6] = useState(false);
    const [selected5, setIsSelected5] = useState("Semua komunitas");
    const communitySelectHandler2 = (e) => {
        const selectedCommunity = e.target.value;
        if (selectedCommunity === "allComms") {
            setIsSelected5(e.target.textContent);
            setIsActive5(!isActive5);
            setIsActive6(false);
            setArReport({
                ...arReport,
                community: selectedCommunity
            });
        } else {
            setIsActive6(!isActive6);
            setIsSelected5(e.target.textContent);
            setArReport({
                ...dangerReport,
                community: selectedCommunity
            });
        }
    };
    const [checkedItems2, setCheckedItems2] = useState({});

    const handleChange2 = (e) => {
        setCheckedItems2({
            ...checkedItems2,
            [e.target.name]: e.target.checked
        });
    };

    const rescueReportSubmitHandler = () => {
        imageUploadHandler();
        console.log(arReport);

        //axios.post("apiAddress", rescueReport);
    }

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

                        <div className="dropdown">
                            <div onClick={() => { setIsActive(!isActive); }} className="dropdown-btn" style={{ width: "392px" }}>
                                <span className="selected-item">{selected}</span>
                                {isActive ? (
                                    <ArrowUpIcon className="dropdown-arrow" />
                                ) : (
                                    <ArrowDownIcon className="dropdown-arrow" />
                                )}
                            </div>
                            <div ref={myRef} className="dropdown-content" style={{ display: isActive ? "block" : "none", width: "392px" }}>
                                <option onClick={reportTypeHandler} value="invasionReport" className="item">Invasi hewan berbahaya</option>
                                <option onClick={reportTypeHandler} value="rescueReport" className="item">Hewan butuh pertolongan</option>
                            </div>
                        </div>

                        {(reportType === "invasionReport") ? (
                            <div className="number-input-group">
                                <input type="text" placeholder="Masukkan nomor telepon" className="number-input" onChange={numberInputHandler}></input>
                                <div className="required-warning">
                                    <ExclamationIcon className="req-warn-icon" />
                                    <p>Wajib diisi</p>
                                </div>
                            </div>
                        ) : (
                            <div className="dropdown">
                                <div ref={myRef} onClick={() => { setIsActive2(!isActive2); }} className="dropdown-btn" style={{ width: "392px" }}>
                                    <span className="selected-item">{selected2}</span>
                                    {isActive2 ? (
                                        <ArrowUpIcon className="dropdown-arrow" />
                                    ) : (
                                        <ArrowDownIcon className="dropdown-arrow" />
                                    )}
                                </div>
                                <div className="dropdown-content" style={{ display: isActive2 ? "block" : "none", width: "392px" }}>
                                    <option ref={myRef} onClick={animalGroupHandler} value="pets" className="item">Hewan piaraan</option>
                                    <option ref={myRef} onClick={animalGroupHandler} value="wilds" className="item">Hewan liar</option>
                                    <option ref={myRef} onClick={animalGroupHandler} value="livestocks" className="item">Hewan ternak</option>
                                </div>
                            </div>
                        )}

                        {(reportType === "invasionReport") ?
                            (null) : (
                                <input type="text" name="animalName" value={arReport.animalName} onChange={handleFieldChange} placeholder="Jenis hewan" className="animal-name-input"></input>
                            )}

                        <button className="image-upload-button" onClick={() => { document.querySelector(".input-field").click() }} >
                            <input type="file" onChange={(e) => { setImageUpload(e.target.files[0]) }} className="input-field" hidden />
                            <UploadIcon className="img-up-icon" />
                            <p>Unggah foto</p>
                        </button>

                        {(reportType === "invasionReport") ?
                            (null) : (
                                <div className="add-info-group">
                                    <span>Informasi tambahan</span>
                                    <input type="text" name="addInfo" value={arReport.addInfo} onChange={handleFieldChange} placeholder="Tulis di sini" className="add-info-input"></input>
                                </div>
                            )}
                    </div>

                    {(reportType === "invasionReport") ?
                        (
                            <div className="community-select-group">
                                <div className="dropdown">
                                    <div onClick={() => { setIsActive3(!isActive3); }} className="community-select" style={{ width: "392px" }}>
                                        <span className="selected-item">{selected3}</span>
                                        {isActive3 ? (
                                            <ArrowUpIcon className="dropdown-arrow" />
                                        ) : (
                                            <ArrowDownIcon className="dropdown-arrow" />
                                        )}
                                    </div>
                                    <div className="dropdown-content" style={{ display: isActive3 ? "block" : "none", bottom: "60px", width: "392px" }}>
                                        <option onClick={communitySelectHandler} value="allComms" className="item">Semua komunitas</option>
                                        <option onClick={communitySelectHandler} value="knownComms" className="item">Komunitas yang diketahui</option>
                                        <div className="checkbox-content" style={{ display: isActive4 ? "block" : "none" }}>
                                            <div className="checkbox-container">
                                                {communityList.map((item, index) => (
                                                    <label className="checkbox-item" key={index}>
                                                        <input type="checkbox" name={item} checked={checkedItems[index]} onChange={handleChange} />
                                                        <span className="checkbox-text">{item}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button className="report-button" onClick={invasionReportSubmitHandler}>
                                    <p>Laporkan!</p>
                                </button>
                            </div>
                        ) : (null)}
                </div>

                {(reportType === "invasionReport") ? (
                    <div className="da-select-section">
                        <div className="da-selector-group">
                            <p>Pilih kelompok hewan yang sesuai</p>
                            <div className="buttons-wrapper" onClick={animalTypeSelect}>
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
                                <img src={animalType.img} alt="images" className="animal-images" />
                                <div className="animal-names">
                                    {animalType.names.map((name, index) =>
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
                                <input type="text" name="reporterName" value={arReport.reporterName} onChange={handleFieldChange} className="reporter-input" placeholder="Nama lengkap" />
                                <input type="email" name="reporterEmail" value={arReport.reporterEmail} onChange={handleFieldChange} className="reporter-input" placeholder="Email" />
                                <input type="text" name="reporterPhone" value={arReport.reporterPhone} onChange={handleFieldChange} className="reporter-input" placeholder="Nomor telepon" />
                                <div className="address-group">
                                    <input type="text" name="reporterAddress" value={arReport.reporterAddress} onChange={handleFieldChange} className="reporter-address" placeholder="Alamat" />
                                    <button className="map-button">
                                        <MapIcon />
                                    </button>
                                </div>
                                <div className="province-city-group">

                                    <div className="dropdown">
                                        <div onClick={() => { setIsActive7(!isActive7); }} className="dropdown-btn" style={{ width: "302px" }}>
                                            <span className="selected-item">{selected7}</span>
                                            {isActive7 ? (
                                                <ArrowUpIcon className="dropdown-arrow" />
                                            ) : (
                                                <ArrowDownIcon className="dropdown-arrow" />
                                            )}
                                        </div>
                                        <div className="dropdown-content" style={{ display: isActive7 ? "block" : "none", width: "auto", height: "320px", overflowY: "scroll", bottom: "60px" }}>
                                            {dataProvinsi.map((prov, index) => {
                                                return <option onClick={provinceSelectHandler} key={index} value={prov.id} className="item">{prov.nama}</option>
                                            })}
                                        </div>
                                    </div>

                                    <div className="dropdown">
                                        <div onClick={() => { setIsActive8(!isActive8); }} className="dropdown-btn" style={{ width: "302px" }}>
                                            <span className="selected-item">{selected8}</span>
                                            {isActive8 ? (
                                                <ArrowUpIcon className="dropdown-arrow" />
                                            ) : (
                                                <ArrowDownIcon className="dropdown-arrow" />
                                            )}
                                        </div>
                                        <div className="dropdown-content" style={{ display: isActive8 ? "block" : "none", width: "auto", height: "320px", overflowY: "scroll", bottom: "60px" }}>
                                            {dataKota.map((kota, index) => {
                                                return <option onClick={citySelectHandler} key={index} value={kota.id} className="item">{kota.nama}</option>
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ar-buttons-group">
                                <div className="dropdown">
                                    <div onClick={() => { setIsActive5(!isActive5); }} className="community-select"  style={{ width: "300px" }}>
                                        <span className="selected-item">{selected5}</span>
                                        {isActive5 ? (
                                            <ArrowUpIcon className="dropdown-arrow" />
                                        ) : (
                                            <ArrowDownIcon className="dropdown-arrow" />
                                        )}
                                    </div>
                                    <div className="dropdown-content" style={{ display: isActive5 ? "block" : "none", bottom: "60px" }}>
                                        <option onClick={communitySelectHandler2} value="allComms" className="item">Semua komunitas</option>
                                        <option onClick={communitySelectHandler2} value="knownComms" className="item">Komunitas yang diketahui</option>
                                        <div className="checkbox-content" style={{ display: isActive6 ? "block" : "none" }}>
                                            <div className="checkbox-container">
                                                {communityList.map((item, index) => (
                                                    <label className="checkbox-item" key={index}>
                                                        <input type="checkbox" name={item} checked={checkedItems[index]} onChange={handleChange2} />
                                                        <span className="checkbox-text">{item}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button className="rescue-report-button" onClick={rescueReportSubmitHandler}>
                                    <p>Laporkan!</p>
                                </button>
                            </div>
                        </div>
                    </>
                )}

            </div>
            <PageFooter />
        </div>
    )
}

export default ReportPage;