import React, { useContext, useEffect, useState } from 'react'
import { MainContext } from '../../Context/ContextHolder';
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const [emailError, setEmailError] = useState("");
    const [passError, setPassError] = useState("");
    const { setAdmin, admin } = useContext(MainContext);
    const navigate = useNavigate();
    const validateEmail = (data) => {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data)
        // RegExp => Regular Express
    }

    const validateForm = (e) => {
        if (e.target.user_email.value == "" || validateEmail(e.target.user_email.value) == false) {
            setEmailError("Please enter a valid email");
        } else {
            setEmailError("");
        }
        if (e.target.user_password.value == "") {
            setPassError("Please enter password");
        } else {
            setPassError("");
        }
    }

    const login = (e) => {
        e.preventDefault();
        validateForm(e);
        if (e.target.user_email.value != "" && e.target.user_password.value != "") {
            // user logged in 
            setAdmin(true);
            localStorage.setItem("admin", true);
            localStorage.setItem("admin_expire", new Date().getTime() + 180000);
            navigate("/admin");
        }
    }

    useEffect(
        () => {
            if (admin == true) {
                navigate("/admin");
            }
        },

    )
    return (
        <div className='Login-Container'>
            <div className="Login-Box shadow bg-white rounded">
                <h2 className='text-center'>Login</h2>
                <form onSubmit={login}>
                    <div className='row'>
                        <div className="col-12">
                            <div className="mb-3">
                                <input type="email" name="user_email" className="form-control" />
                                <span className='text-danger'>{emailError}</span>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="mb-3">
                                <input type="password" name="user_password" className="form-control" />
                                <span className='text-danger'>{passError}</span>
                            </div>
                        </div>
                        <div className='col-12'>
                            <button className="btn btn-primary">
                                Login
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
