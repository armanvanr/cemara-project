import axios from "axios";
import React, { useEffect, useState } from "react";
import Dropdown from "../Components/Dropdown/Dropdown";
import Footer from "../Components/Footer/Footer";
import Navibar from "../Components/NavigationBar/Navibar";
import './DonatePage.css';

const DonatePage = () => {
    const [donationType, setDonationType] = useState("fundDonation");
    const donateTypesData = {
        placeholder: {
            val: false,
            text: ""
        },
        data: [
            {
                nama: "Donasi Uang",
                id: "fundDonation"
            },
            {
                nama: "Donasi Makanan",
                id: "foodDonation"
            },
            {
                nama: "Donasi Peralatan",
                id: "kitDonation"
            }
        ]
    };
    const donationTypeHandler = (e) => {
        const selectedType = e.target.value;
        setDonationType(selectedType);
    }

    const nominalValue = ["Rp10.000", "Rp20.000", "Rp50.000", "Rp100.000", "Rp200.000", "Rp500.000", "Rp1.000.000"];
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
    },)

    const [imageUpload, setImageUpload] = useState(null);
    const donateSubmitHandler = () => {
        alert('Donasi Diterima!');
    }
    return (
        <div className="DonatePage">
            <Navibar />
            <div className="DonateHeader">
                <span className="DonateHeader1">Donasimu sangat membantu!</span>
                <span className="DonateHeader2">Donasikan apa saja yang kamu punya. Masih banyak hewan yang butuh uluran tanganmu.</span>
            </div>
            <div className="DonateMain">
                <div className="DonateFormCard">
                    
                    <Dropdown dropdownContent={donateTypesData} onChange={setDonationType} buttonStyle={{ width: "440px" }} contentStyle={{ width: "440px" }} className="dropdown-btn"/>
                    <input className="DonorInput" type="text" placeholder="Nama lengkap"></input>
                    <input className="DonorInput" type="text" placeholder="Email"></input>
                    <input className="DonorInput" type="text" placeholder="Alamat"></input>
                    <div className="DonorProvCity">
                        <select className="DonorProvince" onChange={provinceSelectHandler}>
                            <option value="" >Pilih provinsi</option>
                            {dataProvinsi.map((prov, index) => {
                                return <option key={index} value={prov.id}>{prov.nama}</option>
                            })}
                        </select>
                        <select className="DonorCity" onChange={citySelectHandler}>
                            <option disabled value="" >Pilih kota/kabupaten</option>
                            {dataKota.map((kota, index) => {
                                return <option key={index} value={kota.id}>{kota.nama}</option>
                            })}
                        </select>
                    </div>
                </div>
                {(donationType === "fundDonation") ? (
                    <div className="NominalSection">
                        <input className="CustomNominal" type="text" placeholder="Masukkan Nominal"></input>
                        <div className="FavNominals">
                            {nominalValue.map((value, index) => {
                                return (
                                    <button key={index} className="NominalButton">{value}</button>
                                )
                            })}
                        </div>
                    </div>
                ) : (
                    <></>)}

                {(donationType === "foodDonation") ? (
                    <div className="FoodSection">
                        <input className="FoodInput" type="text" placeholder="Masukkan nama atau merek makanan"></input>
                        <input className="FoodInput" type="text" placeholder="Jenis pakan"></input>
                        <input className="FoodInput" type="text" placeholder="Jumlah dan satuan"></input>
                        <button className="image-upload-button" onClick={() => { document.querySelector(".input-field").click() }} >
                            <input type="file" onChange={(e) => { setImageUpload(e.target.files[0]) }} className="input-field" hidden />
                            <svg xmlns="http://www.w3.org/2000/svg" className="img-up-icon" viewBox="0 0 20 20" fill="currentColor" >
                                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                            <p>Unggah foto</p>
                        </button>
                    </div>
                ) : (
                    <></>)}

                {(donationType === "kitDonation") ? (
                    <div className="KitSection">
                        <input className="KitInput" type="text" placeholder="Masukkan nama barang"></input>
                        <input className="KitInput" type="text" placeholder="Jumlah dan satuan"></input>
                        <button className="image-upload-button" onClick={() => { document.querySelector(".input-field").click() }}>
                            <input type="file" onChange={(e) => { setImageUpload(e.target.files[0]) }} className="input-field" hidden />
                            <svg xmlns="http://www.w3.org/2000/svg" className="img-up-icon" viewBox="0 0 20 20" fill="currentColor" >
                                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                            <p>Unggah foto</p>
                        </button>
                    </div>
                ) : (<></>)}

            </div>
            <div className="DonateButtonSection">
                <div className="DonateButtonGroup">
                    <button onClick={donateSubmitHandler} className="DonateButton">Donasikan</button>
                </div>
            </div>
                <Footer/>
        </div>
    )
}

export default DonatePage;