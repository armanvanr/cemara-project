import React, { useEffect, useState } from "react";
import './LoginPage.css';
import brand from '../Assets/Images/brand.jpg'
import loginIMG from '../Assets/Images/picwish.png'
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from '../redux/actions/auth';

const LoginPage = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { isLoggedIn } = useSelector(state => state.auth);
    const { user: currentUser } = useSelector(state => state.auth);

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
        dispatch(login(form.email, form.password))
    }

    // if (currentUser) {
    //     navigate('/dashboard/report');
    // }

    useEffect(() => {
        if (currentUser) {
            navigate('/dashboard/report');
        }
    }, [currentUser])


    return (
        <div className="AppForLogin">
            <div className="AppLogin">
                <div className="leftSide">
                    <div className="loginContainer">
                        <div className="loginCard">
                            <NavLink to="/">
                                <img src={brand} className="navbar-brand" alt="" style={{ textDecoration: "none" }} />
                            </NavLink>
                            <div className="cardBody">
                                <div className="card-form">
                                    <div className="form">
                                        <div className="formUp">
                                            <span className="title">Masuk ke ZoaCare</span>
                                            <input className="input" name="email" placeholder="Email atau nomor telepon" onChange={handleFormChange} />
                                            {/* <div className="input">
                                            </div> */}
                                            <div className="contentFP">
                                                <input className="input" name="password" type="password" placeholder="Sandi" onChange={handleFormChange} />
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
                                            <span className="buttonText1">Buat Akun</span>
                                        </div>
                                        <div className="button2" onClick={handleLogin}>
                                            <span className="buttonText2">Masuk</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="footer-form">
                                <div className="footerButton" style={{ width: '145px', order: '0' }}>
                                    Indonesia
                                    <div className="footerButton-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="footerButton" style={{ width: '136px', order: '1' }}>
                                    <div className="footerButton-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    Bantuan
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rightSide">
                    <img src={loginIMG} className="loginImage" alt="" />
                </div>
            </div>
        </div>
    )
}

export default LoginPage;