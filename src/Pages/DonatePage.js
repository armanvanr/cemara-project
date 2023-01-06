import axios from "axios";
import React, { useEffect, useState } from "react";
import Navibar from "../Components/NavigationBar/Navibar";
import './DonatePage.css';

const DonatePage = () => {
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
    }, [idProv])

    return (
        <div className="DonatePage">
            <Navibar />
            <div className="DonateHeader">
                <span className="DonateHeader1">Donasimu sangat membantu!</span>
                <span className="DonateHeader2">Donasikan apa saja yang kamu punya. Masih banyak hewan yang butuh uluran tanganmu.</span>
            </div>
            <div className="DonateMain">
                <div className="DonateFormCard">
                    <select className="DonationType"
                    // value={donationType} onChange={reportTypeHandler}
                    >
                        <option value="fund">Donasi uang</option>
                        <option value="food">Donasi makanan</option>
                        <option value="kit">Donasi peralatan</option>
                    </select>
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
                <div className="NominalSection">
                    <input className="CustomNominal" type="text" placeholder="Masukkan Nominal"></input>
                    <div className="FavNominals">
                        {nominalValue.map((val, index) => {
                            return (
                                <button key={index} className="NominalButton">{val}</button>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="DonateButtonSection">
                <div className="DonateButtonGroup">
                    <button className="DonateButton">Donasikan</button>
                </div>
            </div>
        </div>
    )
}

export default DonatePage;