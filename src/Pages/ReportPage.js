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
import PageFooter from "../Components/PageFooter/PageFooter";
import ExclamationIcon from "../Components/Icons/ExclamationSolid";
import UploadIcon from "../Components/Icons/UploadSolid";
import MapIcon from "../Components/Icons/MapSolid";
import Dropdown from "../Components/Dropdown/Dropdown";
import DropBox from "../Components/Dropdown/DropBox";

const ReportPage = () => {
    const location = useGeoLocation();

    //INVASION REPORT
    //initial state of INVASION REPORT
    const [dangerReport, setDangerReport] = useState({
        reportType: "invasionReport",
        phoneNumber: "",
        imageUrl: null,
        animalCategory: "venomous",
        location: { address: "", city: "", province: "" },
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
    const dropdownData = {
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
    const reportTypeHandler = (e) => {
        const selectedType = e.target.value;
        setReportType(selectedType);
        setDangerReport({
            ...dangerReport,
            reportType: reportType
        });
    };

    const numberInputHandler = (e) => {
        const inputNumber = e.target.value;
        setDangerReport({
            ...dangerReport,
            phoneNumber: inputNumber
        });
    };

    // Get an image file for dangerous animal report
    const [imageUpload, setImageUpload] = useState(null);

    // const imageUploadHandler = () => {
    //     if (imageUpload == null) return;
    //     // rename to `images/${user.id}_${Date.now()}`        
    //     // const imageRef = ref(storage, `images/${imageUpload.name}_${Date.now()}`);
    //     const imageRef = ref(storage, `images/img_${Date.now()}`);
    //     uploadBytes(imageRef, imageUpload).then(() => {
    //         getDownloadURL(imageRef).then((url) => {
    //             appendImage(url);
    //         })
    //     })
    // };

    // const appendImage = (url) => {
    //     setDangerReport({
    //         ...dangerReport,
    //         imageUrl: url
    //     })
    // };

    useEffect(() => {
        const getImage = async () => {
            const url = await getDownloadURL(ref(storage, `images/${imageUpload.name}_${Date.now()}`));
            setDangerReport({
                ...dangerReport,
                imageUrl: url
            });
        };
        getImage()
    }, [imageUpload]);

    const imageUploadHandler = () => {
        if (imageUpload == null) return;
        const storageRef = ref(storage, `images/${imageUpload.name}_${Date.now()}`);
        uploadBytes(storageRef, imageUpload).then((snapshot) => {
            console.log("Uploaded image");
        });
    }

    //select community invasion report
    const communitySelectHandler = (e) => {
        const selectedCommunity = e.target.value;
        if (selectedCommunity === "allComms") {
            setDangerReport({
                ...dangerReport,
                community: selectedCommunity
            });
        } else {
            setDangerReport({
                ...dangerReport,
                community: selectedCommunity
            });
        }
    };

    const [selectedComm, setSelectedComm] = useState(null);
    const dropdownData5 = {
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

    const itemList = {
        data:
            ["Garda Satwa Indonesia", "Pejaten Shelter", "ASPERA", "Garda Satwa Indonesia", "Pejaten Shelter", "ASPERA", "Garda Satwa Indonesia", "Pejaten Shelter", "ASPERA"]
    };
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
        };
        setDangerReport({
            ...dangerReport,
            animalCategory: selectedType
        });
    };

    //get and assign address into dangerReport
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
    console.log(locData);

    const reverseUrl = "https://nominatim.openstreetmap.org/reverse?";
    const getAddress = () => {
        axios.get(`${reverseUrl}lat=${locData.latitude}&lon=${locData.longitude}&format=json&accept-language=id-ID`)
            .then((result) => {
                console.log(result);
                setDangerReport({
                    ...dangerReport,
                    location: {
                        address: result.data.display_name,
                        province: result.data.address.state,
                        city: result.data.address.city ? (result.data.address.city) : (result.data.address.town)
                    }
                });
            });
    };

    useEffect(() => {
        if (locData) {
            getAddress();
        }
    }, [locData]);

    //submit dangerous animal Report
    const invasionReportSubmitHandler = async () => {
        imageUploadHandler()
        await axios.post("http://localhost:3030/report", dangerReport);

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
    const dropdownData2 = {
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
    const [animalGroup, setAnimalGroup] = useState("");
    const animalGroupHandler = (e) => {
        const selectedGroup = e.target.value;
        setArReport({
            ...arReport,
            animalGroup: selectedGroup
        });
    };

    const handleFieldChange = (e) => {
        const { name, value } = e.target;
        setArReport({
            ...arReport, [name]: value
        })
        console.log(arReport.animalName)
    };

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
    const dropdownData3 = {
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
    const dropdownData4 = {
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

    //select community invasion report
    const communitySelectHandler2 = (e) => {
        const selectedCommunity = e.target.value;
        if (selectedCommunity === "allComms") {
            setArReport({
                ...arReport,
                community: selectedCommunity
            });
        } else {
            setArReport({
                ...dangerReport,
                community: selectedCommunity
            });
        };
    };
    const [checkedItems2, setCheckedItems2] = useState({});

    const handleChange2 = (e) => {
        setCheckedItems2({
            ...checkedItems2,
            [e.target.name]: e.target.checked
        });
    };

    const rescueReportSubmitHandler = () => {
        // imageUploadHandler();
        console.log(arReport);

        //axios.post("apiAddress", rescueReport);
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
                        <Dropdown dropdownContent={dropdownData} onChange={setReportType} buttonStyle={{ width: "392px" }} contentStyle={{ width: "392px" }} className="dropdown-btn" />
                        {(reportType === "invasionReport") ? (
                            <div className="number-input-group">
                                <input type="text" placeholder="Masukkan nomor telepon" className="number-input" onChange={numberInputHandler}></input>
                                <div className="required-warning">
                                    <ExclamationIcon className="req-warn-icon" />
                                    <p>Wajib diisi</p>
                                </div>
                            </div>
                        ) : (
                            <Dropdown dropdownContent={dropdownData2} onChange={setAnimalGroup} buttonStyle={{ width: "392px" }} contentStyle={{ width: "392px" }} className="dropdown-btn" />
                        )}

                        {(reportType === "invasionReport") ?
                            (null) : (
                                <input type="text" name="animalName" value={arReport.animalName} onChange={handleFieldChange} placeholder="Jenis hewan" className="animal-name-input"></input>
                            )}

                        <button className="image-upload-button" style={{ borderColor: imageUpload ? "#2E9C33" : "#97CD99" }} onClick={() => { document.querySelector(".input-field").click() }} >
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
                                <DropBox dropdownContent={dropdownData5} onChange={setSelectedComm} buttonStyle={{ width: "320px" }} contentStyle={{ bottom: "60px", width: "320px" }} className="community-select" />
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
                                    <Dropdown dropdownContent={dropdownData3} onChange={setSelectedIdProv} buttonStyle={{ width: "302px" }} contentStyle={{ wwidth: "auto", height: "320px", overflowY: "scroll", bottom: "60px" }} className="dropdown-btn" />
                                    <Dropdown dropdownContent={dropdownData4} onChange={setSelectedIdKota} buttonStyle={{ width: "302px" }} contentStyle={{ wwidth: "auto", height: "320px", overflowY: "scroll", bottom: "60px" }} className="dropdown-btn" />
                                </div>
                            </div>
                            <div className="ar-buttons-group">
                                <DropBox dropdownContent={dropdownData5} onChange={setSelectedComm} buttonStyle={{ width: "320px" }} contentStyle={{ bottom: "60px", width: "320px" }} className="community-select" />
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