import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navibar from "../Components/NavigationBar/Navibar";
import './CreateAdopt.css';

const CreateAdopt = () => {
    const [checked, setChecked] = useState(false);
    const finishAdoptHandler = () => {
        alert('Formulir Adopsi Terkirim!');
    }
    return (
        <div className="CreateAdopt">
            <Navibar />
            <div className="CreateAdoptMain">
                <div className="AdoptFormTitle">Formulir pemberi adopsi</div>
                <div className="AdoptFormSection">
                    <div className="AnimalIdSection">
                        <div className="AnimalFormTitle">Data hewan</div>
                        <div className="AnimalInputForm">
                            <span className="InputFormLabel">Nama</span>
                            <input type="text" className="AdoptFormInput" placeholder="Masukkan nama"></input>
                        </div>
                        <div className="AnimalInputForm">
                            <span className="InputFormLabel">Kategori hewan</span>
                            <input type="text" className="AdoptFormInput" placeholder="Masukkan nama"></input>
                        </div>
                        <div className="AnimalInputForm">
                            <span className="InputFormLabel">Ras</span>
                            <input type="text" className="AdoptFormInput" placeholder="Masukkan ras"></input>
                        </div>
                        <div className="AnimalInputForm">
                            <span className="InputFormLabel">Umur (tahun)</span>
                            <input type="text" className="AdoptFormInput" placeholder="Masukkan umur dalam tahun"></input>
                        </div>
                        <div className="AnimalInputForm">
                            <span className="InputFormLabel">Jenis kelamin</span>
                            <input type="text" className="AdoptFormInput" placeholder="Masukkan nama"></input>
                        </div>
                        <div className="AnimalInputForm">
                            <span className="InputFormLabel">Foto</span>
                            <input type="text" className="AdoptFormInput" placeholder="Masukkan nama"></input>
                        </div>
                        <div className="AnimalInputForm">
                            <span className="InputFormLabel">Keterangan lain</span>
                            <input type="text" className="AdoptFormInput" placeholder="Tulis keterangan"></input>
                        </div>
                    </div>
                    <div className="AdoptFormAndButtons">
                        <div className="OwnerIdSection">
                            <div className="OwnerFormTitle">Data pemilik</div>
                            <div className="OwnerInputForm">
                                <span className="InputFormLabel">Pemilik</span>
                                <input type="text" className="AdoptFormInput" placeholder="Nama pemilik"></input>
                            </div>
                            <div className="OwnerInputForm">
                                <span className="InputFormLabel">Email</span>
                                <input type="text" className="AdoptFormInput" placeholder="Masukkan email"></input>
                            </div>
                            <div className="OwnerInputForm">
                                <span className="InputFormLabel">Nomor telepon</span>
                                <input type="text" className="AdoptFormInput" placeholder="Masukkan nomor telepon"></input>
                            </div>
                            <div className="AdoptAgreement">
                                <label className="AgreementCheck">
                                    <input type="checkbox" className="AgreementCheckbox" onChange={() => { setChecked(!checked) }} checked={checked} />
                                    <span className="AgreementText">Saya menyetujui kebijakan privasi yang berlaku</span>
                                </label>
                            </div>
                        </div>
                        <div className="AdoptButtonGroup">
                            <NavLink to="/adopt">
                                <button className="CancelAdopt">Batal</button>
                            </NavLink>
                            <button className="FinishAdopt" onClick={finishAdoptHandler} >Selesaikan</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CreateAdopt;