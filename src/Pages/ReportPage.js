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

const ReportPage = () => {
    const location = useGeoLocation();

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
    const reportTypeHandler = (e) => {
        const selectedType = e.target.value;
        setReportType(selectedType);
        setDangerReport({
            ...dangerReport,
            reportType: reportType
        })
    }

    const numberInputHandler = (e) => {
        const inputNumber = e.target.value;
        setDangerReport({
            ...dangerReport,
            phoneNumber: inputNumber
        })
    }

    const appendImage = (url) => {
        setDangerReport({
            ...dangerReport,
            imageUrl: url
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

    // const imageUploadHandler = async () => {
    //     if (imageUpload == null) return;
    //     // rename to `images/${user.id}_${Date.now()}`        
    //     const imageRef = ref(storage, `images/${imageUpload.name}_${Date.now()}`);
    //     await uploadBytes(imageRef, imageUpload);

    //     const imageUrl = await getDownloadURL(imageRef);
    //     appendImage(imageUrl);
    // }

    //select community
    const communitySelectHandler = (e) => {
        const selectedCommunity = e.target.value;
        setDangerReport({
            ...dangerReport,
            community: selectedCommunity
        })
        setArReport({
            ...arReport,
            community: selectedCommunity
        })
    }

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
            animalCategory: animalType
        })
    }

    //submit dangerous animal Report
    const invasionReportSubmitHandler = () => {
        imageUploadHandler();
        //get and assign location into dangerReport
        if (location.loaded) {
            setDangerReport({
                ...dangerReport,
                location: location.coordinates
            })
            console.log('in if',location.coordinates)
        } else {
            console.log('location unavailable')
        }
        axios.post("http://localhost:3030/report", dangerReport);
        console.log('report :', dangerReport);
        console.log('in handler',location.coordinates)
    }

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
    })

    //select animal group to rescue
    const [animalGroup, setAnimalGroup] = useState("");
    const animalGroupHandler = e => {
        const selectedGroup = e.target.value;
        setAnimalGroup(selectedGroup);
        setArReport({
            ...arReport,
            animalGroup: selectedGroup
        })
    }

    const handleFieldChange = e => {
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

    const provinceSelectHandler = (e) => {
        const id = e.target.value;
        setIdProv(id);
    }

    const getKota = () => {
        if (idProv) {
            axios.get(`${dataIndoUrl}/kabupaten/${idProv}.json`)
                .then((res) => {
                    setDataKota(res.data)
                })
        }

    }

    const citySelectHandler = (e) => {
        const id = e.target.value;
        console.log('city id', id)
    }

    useEffect(() => {
        getProvinsi();
    }, [])

    useEffect(() => {
        getKota();
    }, [idProv])

    const rescueReportSubmitHandler = () => {
        imageUploadHandler();
        console.log(arReport);

        //axios.post("apiAddress", rescueReport);
    }

    return (
        <div className="report-page">
            <Navibar />
            {/* <Navbar/> */}
            <div className="report-header">
                <p className="report-header-1">Butuh pertolongan untuk evakuasi?</p>
                <p className="report-header-2">Buat laporan ke komunitas sekitar anda jika butuh pertolongan untuk evakuasi hewan berbahaya dan hewan yang butuh pertolongan</p>
            </div>

            <div className="report-main">

                <div className="report-type-section">
                    <div className="report-form-card">
                        <select className="report-type" value={reportType} onChange={reportTypeHandler}>
                            <option value="invasionReport">Invasi hewan berbahaya</option>
                            <option value="rescueReport">Hewan butuh pertolongan</option>
                        </select>

                        {(reportType === "invasionReport") ? (
                            <div className="number-input-group">
                                <input type="text" placeholder="Masukkan nomor telepon" className="number-input" onChange={numberInputHandler}></input>
                                <div className="required-warning">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="req-warn-icon" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                    <p>Wajib diisi</p>
                                </div>
                            </div>
                        ) : (
                            <select className="animal-group" value={animalGroup} onChange={animalGroupHandler}>
                                <option disabled value="">Pilih kelompok hewan</option>
                                <option value="pets">Hewan piaraan</option>
                                <option value="wilds">Hewan liar</option>
                                <option value="livestocks">Hewan ternak</option>
                            </select>
                        )}

                        {(reportType === "invasionReport") ? (
                            <></>) : (
                            <input type="text" name="animalName" value={arReport.animalName} onChange={handleFieldChange} placeholder="Jenis hewan" className="animal-name-input"></input>
                        )}

                        <button className="image-upload-button" onClick={() => { document.querySelector(".input-field").click() }} >
                            <input type="file" onChange={(e) => { setImageUpload(e.target.files[0]) }} className="input-field" hidden />
                            <svg xmlns="http://www.w3.org/2000/svg" className="img-up-icon" viewBox="0 0 20 20" fill="currentColor" >
                                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                            <p>Unggah foto</p>
                        </button>

                        {(reportType === "invasionReport") ? (
                            <></>) : (
                            <div className="add-info-group">
                                <p>Informasi tambahan</p>
                                <input type="text" name="addInfo" value={arReport.addInfo} onChange={handleFieldChange} placeholder="Tulis di sini" className="add-info-input"></input>
                            </div>
                        )}
                    </div>

                    {(reportType === "invasionReport") ? (
                        <div className="community-select-group">
                            <select className="community-select" onChange={communitySelectHandler}>
                                <option value="allCommunities" >Semua komunitas</option>
                                <option value="certainCommunities">Komunitas yang diketahui</option>
                            </select>
                            <button className="report-button" onClick={invasionReportSubmitHandler}>
                                <p>Laporkan!</p>
                            </button>
                        </div>
                    ) : (<></>)}
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
                                            {index>0? <span>&bull;</span>:null}
                                            <p>{name}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="ar-report-section">
                            <div className="report-card-wrapper">
                                <div className="form-title">
                                    <span>Pelapor</span>
                                </div>
                                <input type="text" name="reporterName" value={arReport.reporterName} onChange={handleFieldChange} className="reporter-name" placeholder="Nama lengkap" />
                                <input type="email" name="reporterEmail" value={arReport.reporterEmail} onChange={handleFieldChange} className="reporter-email" placeholder="Email" />
                                <input type="text" name="reporterPhone" value={arReport.reporterPhone} onChange={handleFieldChange} className="reporter-number" placeholder="Nomor telepon" />
                                <div className="address-group">
                                    <input type="text" name="reporterAddress" value={arReport.reporterAddress} onChange={handleFieldChange} className="reporter-address" placeholder="Alamat" />
                                    <button className="map-button">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="province-city-group">
                                    <select className="reporter-province" onChange={provinceSelectHandler}>
                                        <option value="" >Pilih provinsi</option>
                                        {dataProvinsi.map((prov, index) => {
                                            return <option key={index} value={prov.id}>{prov.nama}</option>
                                        })}
                                    </select>
                                    <select className="reporter-city" onChange={citySelectHandler}>
                                        <option disabled value="" >Pilih kota/kabupaten</option>
                                        {dataKota.map((kota, index) => {
                                            return <option key={index} value={kota.id}>{kota.nama}</option>
                                        })}
                                    </select>
                                </div>
                            </div>
                            <div className="ar-buttons-group">
                                <select className="community-select" onChange={communitySelectHandler}>
                                    <option value="allCommunities" >Semua komunitas</option>
                                    <option value="certainCommunities">Komunitas yang diketahui</option>
                                </select>
                                <button className="rescue-report-button" onClick={rescueReportSubmitHandler}>
                                    <p>Laporkan!</p>
                                </button>
                            </div>
                        </div>
                    </>
                )}

            </div>
        </div>
    )
}

export default ReportPage;