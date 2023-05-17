import React, { createContext, useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const MainContext = createContext();
export default function ContextHolder(props) {
    const [loader, setLoader] = useState(false);
    const [admin, setAdmin] = useState(false);
    const notify = (msg, type) => {
        if (type == true) {
            toast.success(msg)
        } else {
            toast.error(msg)
        }
    };

    const toggleLoader = (type) => setLoader(type);

    useEffect(
        () => {
            const admin = localStorage.getItem("admin");
            const admin_expire = localStorage.getItem("admin_expire");
            if (admin != undefined && admin_expire != undefined) {
                const currentTimeStamp = new Date().getTime()
                if (currentTimeStamp < parseInt(admin_expire)) {
                    setAdmin(true);
                } else {
                    localStorage.removeItem("admin");
                    localStorage.removeItem("admin_expire");
                }
            }
        },
        []
    )


    console.log(admin);
    return (
        <MainContext.Provider value={{ notify, toggleLoader, admin, setAdmin }}>
            <div className='loader' style={{
                display: loader == true ? 'flex' : 'none'
            }}>
                <div></div>
            </div>
            <ToastContainer />
            {props.children}
        </MainContext.Provider>
    );
}
export { MainContext };