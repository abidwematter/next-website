'use client'

import React, {Fragment} from 'react';
import { useState } from 'react';
import Modal from 'react-modal';


import { useRouter } from 'next/navigation'


const SearchModal = (props) => {

    const [inputValue, setInputValue] = useState('')
    const {isOpen, onClick } =props;
    const router = useRouter();
    
    const handleSubmit = (e)=>{
        e.preventDefault();
    }

    const handleChange = (e) => {
        console.log("check e", e.target.value);
        setInputValue(e.target.value)
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            router.push('/search');
        }
      };

    return (
        <Fragment>
            <Modal
                isOpen={isOpen}
                onRequestClose={onClick}
                className={`offcanvas-tab theme-search-form ${props.bgColor}`}
                contentLabel="Example Modal"
                overlayClassName="Overlay"
                ariaHideApp={false}
                >

                <button className="close-btn" onClick={onClick}><i className="bi bi-x-lg"/></button>
                <div
                    className="offcanvas-tops justify-content-center">
                    <div className="form-wrapper">
                        <form action="#" onSubmit={handleSubmit}>
                            <input type="text"onChange={handleChange}  onKeyDown={handleKeyDown} placeholder="Search Keyword...."/>
                        </form>
                    </div>
                    {/* /.form-wrapper */}
                </div>

            </Modal>
        </Fragment>
    )
}

export default SearchModal