import React from 'react';
import './cookies.css'
import axios from "axios";
import { useEffect } from 'react';
import { useState } from 'react';

const Cookies = () => {
    const [ip, setIP] = useState('');
    const [Ipaddress,setIpaddress] = useState('')

    useEffect(() => {
        let data = localStorage.getItem('ip')
        if(data) {
            setIpaddress(data)
        }
        getData();
    }, []);

    const getData = async () => {
        const res = await axios.get("https://ipapi.co/json/");
        setIP(res?.data?.ip);
    };

   

    // window.onbeforeunload = () => {
    //     localStorage.removeItem('ip');
    //   }


    const hundleClick = () => {
        localStorage.setItem('ip', ip);
        setIpaddress(localStorage.getItem('ip'))
    }

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