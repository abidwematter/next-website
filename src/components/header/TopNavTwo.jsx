
'use client';
import React, { Fragment, useEffect, useState } from 'react';
import SearchModal from '../../components/search-modal/SearchModal';
import MobileMenu from './MobileMenu';
import ThemeMainMenu1 from './MegaMenu1';
import ThemeMainMenu from './ThemeMainMenu';
import { HomeSetting } from '../../services/shared-service';
import Socialicon from '../footer/socialicon';
import ScrollToTop from '../ScrollToTop';
import TawkToClient from '@/components/TawkToClient.js';

const TopNavTwo = () => {
    const [navbar, setNavbar] = useState(false);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [homeSetting, setHomeSetting] = useState([]);

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    const toggleMenu = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY >= 68) {
                setNavbar(true);
            } else {
                setNavbar(false);
            }
        }
    }

    useEffect(() => {
        const getHomeSetting = async () => {
            try {
                const res = await HomeSetting();
                setHomeSetting(res);
            } catch (error) {
                console.error('Error fetching home settings:', error);
            }
        };

        getHomeSetting();

        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', toggleMenu);

            return () => {
                window.removeEventListener('scroll', toggleMenu);
            };
        }
    }, []);
  return (
    <Fragment>
        <SearchModal  isOpen={modalIsOpen} onClick={closeModal} bgColor="" />
         <header className={navbar ? "theme-main-menu sticky-menu theme-menu-two fixed": "theme-main-menu sticky-menu theme-menu-two"}>
                <div className="inner-content">
                    <div className="top-header">
                        <div className="container">
                            <div className="d-flex align-items-center justify-content-between position-relative">
                                <div className="call-button">Call us 
                                    <a href="#">{homeSetting[0]?.contact_phone}</a>
                                </div>
                                
                                <div className='d-flex align-items-center'>
                                <div className='topSocialIcons'>
                                <Socialicon />
                                </div>
                                <div className="right-widget d-flex align-items-center">
                                     <div className="lang-dropdown me-3 me-sm-4">
                                        
                                        {/* <Link className="contact-slaes" href="/registration">Contact Sales</Link> */}
                                    </div> 
                                    <button
                                        className="menu-search-btn tran3s m0"
                                        type="button" onClick={openModal}><i className="bi bi-search"/></button>
                                </div>

                                </div>
                                
                                {/* /.right-widget */}
                            </div>
                        </div>
                        {/* /.container */}
                    </div>
                    {/* /.top-header */}
                    <div className="container d-flex align-items-center justify-content-between">
                        {/* <div className="logo order-lg-0">
                            <Link href="/" className="d-block"><img src="images/logo/logo_01.png" alt="" width={130}/></Link>
                        </div> */}
                        {/* <a
                            href="contact-us.html"
                            className="get-in-touch-btn d-none d-lg-block order-lg-3">Get In Touch</a> */}
                        <nav className="navbar navbar-expand-lg order-lg-2">
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ThemeMainMenu1 />
                                {/* <ThemeMainMenu/> */}
                                {/* Mobile Content */}
                                <div className="mobile-content d-block d-lg-none">
                                    <div
                                        className="d-flex flex-column align-items-center justify-content-center mt-70">
                                        <a href="contact-us.html" className="get-in-touch-btn">Get In Touch</a>
                                    </div>
                                </div>
                                {/* /.mobile-content */}
                            </div>
                        </nav>
                    </div>

                    <MobileMenu />
                     {/* /mobilemenu */}
                </div>
                {/* /.inner-content */}
            </header>
            <ScrollToTop />
            <TawkToClient />
    </Fragment>
  )
}

export default TopNavTwo