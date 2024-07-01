'use client';
import React, { useEffect, useState } from 'react';
import './cookies.css';
import axios from "axios";

const Cookies = () => {
    const [ip, setIP] = useState('');
    const [Ipaddress, setIpaddress] = useState('');

    useEffect(() => {
        // Fetch IP address from local storage if available
        let data = localStorage.getItem('ip');
        if (data) {
            setIpaddress(data);
        } else {
            // Fetch IP address from API if not found in local storage
            getData();
        }
    }, []);

    const getData = async () => {
        try {
            const res = await axios.get("https://ipapi.co/json/");
            const ipAddress = res?.data?.ip;
            setIP(ipAddress);
        } catch (error) {
            console.error("Failed to fetch IP address", error);
        }
    };

    const hundleClick  = () => {
        if (ip) {
            localStorage.setItem('ip', ip);
            setIpaddress(ip);
        }
    };
    return (
        <>
            {
                Ipaddress !== '' ? ''
                     : <div className='fixed-bottom p-4'>
                     <div className ="toast bg-blue text-white w-100 mw-100 fade show" role="alert" data-autohide="false">
                         <div className ="toast-body p-4 d-flex flex-column" style={{ background: 'linear-gradient(75deg, #5e1414 10%, #970000) !important' }}>
                             <h4 style={{ color: 'white' }}>Cookie Warning</h4>
                             <p>
                                 This website stores data such as cookies to enable site functionality including analytics and personalization. By using this website, you automatically accept that we use cookies.
                             </p>
                             <div className ="ml-auto">
                                 <button type="button" className ="btn btn-outline-light mr-3" id="btnDeny" onClick={hundleClick}>
                                     Deny
                                 </button>
                                 <button type="button" className="btn btn-light" id="btnAccept" onClick={hundleClick}>
                                     Accept
                                 </button>
                             </div>
                         </div>
                     </div>
                 </div>}
        </>

    )
}

export default Cookies