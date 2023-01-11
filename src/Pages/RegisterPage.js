import React, { useState } from "react";
import './RegisterPage.css';
import brand from '../Assets/Images/brand.jpg'
import register from '../Assets/Images/pic-signup.png'
import { useNavigate } from "react-router-dom";

const RegisterPage = () =>{

    const navigate = useNavigate()

    const [form, setForm] = useState();
    const handleFormChange = event => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    const handleRegister = () => {
        alert("Register")
        console.log(form)
    }
    const handleLogin = () => {
        navigate('/login')
    }

    return(
        <div className="App1">
            <div className="AppContainer">
                <div className="leftSide">
                    <div className="loginContainer">
                        <div className="loginCard">
                            <img src={brand} className="logo" alt="" />
                            <div className="cardBody">
                                <div className="card-form">
                                    <div className="form">
                                        <div className="formUp">
                                            <span className="title">Buat akun baru</span>
                                            <input className="input" name="userId" placeholder="Email atau nomor telepon" onChange={handleFormChange}/>
                                            <input className="input" name="communityName" placeholder="Nama Lembaga" onChange={handleFormChange}/>
                                            <input className="input" name="password" type="password" placeholder="Masukan sandi" onChange={handleFormChange}/>
                                            <input className="input" name="confirmPassword" type="password" placeholder="Ulangi sandi" onChange={handleFormChange}/>
                                            {/* <div className="input">
                                                <span className="inputText">Email or phone number</span>
                                            </div> */}
                                            {/* <div className="input">
                                                <span className="inputText">Institution Name</span>
                                            </div>
                                            <div className="input">
                                                <span className="inputText">Input Password</span>
                                            </div>
                                            <div className="input">
                                                <span className="inputText">Repeat Password</span>
                                            </div> */}
                                        </div>
                                    </div>
                                        <div className="formBottom">
                                            <div className="button1" onClick={handleLogin}>
                                                <span className="buttonText1">Log In</span>
                                            </div>
                                            <div className="button2" onClick={handleRegister}>
                                                <span className="buttonText2">Create</span>
                                            </div>
                                        </div>
                                </div>
                            </div>
                            <div className="footer-form">
                                <div className="footerButton" style={{ width: '145px', order: '0' }}>Indonesia</div>
                                <div className="footerButton" style={{ width: '136px', order: '1' }}>Help</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rightSide">
                    <img src={register} className="loginImage" alt="" />
                </div>
            </div>
        </div>
    )
}

export default RegisterPage;