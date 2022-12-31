import React, { useState } from "react";
import './ReportPage.css';
import venomousAnimals from '../Assets/Images/venomous.png'
import wildAnimals from '../Assets/Images/wild.png'
import poisonousAnimals from '../Assets/Images/poisonous.png'
import Navibar from "../Components/Navibar";

const ReportPage = () => {
    //select type of invasion animal
    const [reportType, setReportType] = useState("invasionReport");
    const reportTypeHandler = (e) => {
        const selectedType = e.target.value;
        setReportType(selectedType);
        console.log('selected type: ', reportType);
    }

    //select animal group to rescue
    const [animalGroup, setAnimalGroup] = useState("");
    const animalGroupHandler = (e) => {
        const selectedGroup = e.target.value;
        setAnimalGroup(selectedGroup);
    }

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
    }
    const [dangerReport, setDangerReport] = useState()
    const reportSubmitHandler = () => {

    }

    return (
        <div className="report-page">
            <Navibar />

            <div className="header-text">
                <p className="header-text-1">Butuh pertolongan untuk evakuasi?</p>
                <p className="header-text-2">Buat laporan ke komunitas sekitar anda jika butuh pertolongan untuk evakuasi hewan berbahaya dan hewan yang butuh pertolongan</p>
            </div>
            <div className="report-main">
                <div className="report-type-section">
                    <div className="form-card">
                        <select className="report-type" id="floatingSelect" value={reportType} onChange={reportTypeHandler}>
                            <option value="invasionReport">Invasi hewan berbahaya</option>
                            <option value="rescueReport">Hewan butuh pertolongan</option>
                        </select>
                        {(reportType === "invasionReport") ? (
                            <div className="number-input-group">
                                <input type="text" placeholder="Masukkan nomor telepon" className="number-input"></input>
                                <div className="required-warning">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="req-warn-icon" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                    <p>Wajib diisi</p>
                                </div>
                            </div>
                        ) : (
                            <select className="animal-group" id="floatingSelect" value={animalGroup} onChange={animalGroupHandler}>
                                <option disabled value="">Pilih kelompok hewan</option>
                                <option value="pets">Hewan piaraan</option>
                                <option value="wilds">Hewan liar</option>
                                <option value="livestocks">Hewan ternak</option>
                            </select>
                        )}
                        {(reportType === "invasionReport") ? (
                            <></>) : (
                            <input type="text" placeholder="Jenis hewan" className="animal-name-input"></input>
                        )}

                        <button className="image-upload-button" >
                            <svg xmlns="http://www.w3.org/2000/svg" className="img-up-icon" viewBox="0 0 20 20" fill="currentColor" >
                                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                            <p>Unggah foto</p>
                        </button>
                        {(reportType === "invasionReport") ? (
                            <></>) : (
                            <div className="add-info-group">
                                <p>Informasi tambahan</p>
                                <input type="text" placeholder="Tulis di sini" className="add-info-input"></input>
                            </div>
                        )}
                    </div>
                    {(reportType === "invasionReport") ? (
                        <div className="community-select-group">
                            <select className="community-select" id="floatingSelect" aria-label="Floating label select example" >
                                <option value="allComms" >Semua komunitas</option>
                                <option value="certainComms">Komunitas yang diketahui</option>
                            </select>
                            <button className="report-button" onSubmit={reportSubmitHandler}>
                                <p>Laporkan!</p>
                            </button>
                        </div>
                    ) : (<></>)}
                </div>

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
                                    <>
                                        <p key={index}>{name}</p>
                                        <p>&bull;</p>
                                    </>
                                )}
                                {/* <p>Ular berbisa</p>
                                <p>&bull;</p>
                                <p>Kalajengking</p>
                                <p>&bull;</p>
                                <p>Kadal berbisa</p> */}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ReportPage;