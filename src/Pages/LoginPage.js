import React, { useState } from "react";
import './LoginPage.css';
import brand from '../Assets/Images/brand.jpg'
import login from '../Assets/Images/picwish.png'
import { useNavigate } from "react-router-dom";

const LoginPage = () =>{

    const navigate = useNavigate()

    const [form, setForm] = useState();
    const handleFormChange = event => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    const handleForgotPassword = () => {
        alert("forgot password")
    }
    const handleRegister = () => {
        navigate('/register')
    }
    const handleLogin = () => {
        alert("Login")
    }

    
    return(
        <div className="App1">
            <div className="AppLogin">
                <div className="leftSide">
                    <div className="loginContainer">
                        <div className="loginCard">
                            <img src={brand} className="logo" alt="" />
                            <div className="cardBody">
                                <div className="card-form">
                                    <div className="form">
                                        <div className="formUp">
                                            <span className="title">Masuk ke ZoaCare</span>
                                                <input className="input" name="userId" placeholder="Email atau nomor telepon" onChange={handleFormChange}/>
                                            {/* <div className="input">
                                            </div> */}
                                            <div className="contentFP">
                                            <input className="input" name="userPassword" type="password" placeholder="Sandi" onChange={handleFormChange}/>
                                                {/* <div className="input">
                                                    <span className="inputText">Password</span>
                                                </div> */}
                                                <div className="forgotPasswordButton" onClick={handleForgotPassword}>
                                                    <span className="forgotPasswordText">Lupa sandi?</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                        <div className="formBottom">
                                            <div className="button1" onClick={handleRegister}>
                                                <span className="buttonText1">Don't have account?</span>
                                            </div>
                                            <div className="button2" onClick={handleLogin}>
                                                <span className="buttonText2">Log In</span>
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
                    <img src={login} className="loginImage" alt="" />
                </div>
            </div>
        </div>
    )
}

export default LoginPage;