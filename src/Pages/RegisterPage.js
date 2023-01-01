import React from "react";
import './LoginPage.css';
import brand from '../Assets/Images/brand.jpg'
import register from '../Assets/Images/pic-signup.png'

const RegisterPage = () =>{
    return(
        <div className="App">
            <div className="AppContainer">
                <div className="leftSide">
                    <div className="loginContainer">
                        <div className="loginCard">
                            <img src={brand} className="logo" alt="" />
                            <div className="cardBody">
                                <div className="card-form">
                                    <div className="form">
                                        <div className="formUp">
                                            <span className="title">Make New Account</span>
                                            <div className="input">
                                                <span className="inputText">Email or phone number</span>
                                            </div>
                                            <div className="input">
                                                <span className="inputText">Institution Name</span>
                                            </div>
                                            <div className="input">
                                                <span className="inputText">Input Password</span>
                                            </div>
                                            <div className="input">
                                                <span className="inputText">Repeat Password</span>
                                            </div>
                                        </div>
                                    </div>
                                        <div className="formBottom">
                                            <div className="button1">
                                                <span className="buttonText1">Log In</span>
                                            </div>
                                            <div className="button2">
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