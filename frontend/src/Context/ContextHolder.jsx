import React, { createContext } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const MainContext = createContext();
export default function ContextHolder(props) {
    const notify = (msg, type) => {
        if (type == true) {
            toast.success(msg)
        } else {
            toast.error(msg)
        }
    };
    return (
        <MainContext.Provider value={{ notify }}>
            <ToastContainer />
            {props.children}
        </MainContext.Provider>
    );
}
export { MainContext };