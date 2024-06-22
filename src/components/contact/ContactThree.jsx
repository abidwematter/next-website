import React, {Fragment} from 'react';


const ContactThree = (props) => {
    return (
        <Fragment>
            <div className="row">
                <div className="col-md-4">
                    <div className="address-block-two text-center mb-40 sm-mb-20">
                        <div className="icon d-flex align-items-center justify-content-center m-auto"><img src="images/icon/icon_17.svg" alt=""/></div>
                        <h5 className="title">Our Address</h5>
                        {
                           props?.data && props?.data[0] ? <p><div dangerouslySetInnerHTML={{ __html: (props?.data[0].contact_address) }} /></p> : ''

                        }
                        {/* <p><div dangerouslySetInnerHTML={{ __html: (props?.data[0].contact_address) }} /></p> */}
                    </div>
                    {/* /.address-block-two */}
                </div>
                <div className="col-md-4">
                    <div className="address-block-two text-center mb-40 sm-mb-20">
                        <div className="icon d-flex align-items-center justify-content-center m-auto"><img src="images/icon/icon_18.svg" alt=""/></div>
                        <h5 className="title">Contact Info</h5>
                        {
                           props?.data && props?.data[0] ? <p>{props?.data[0].contact_phone}</p> : ''

                        }
                       
                    </div>
                    {/* /.address-block-two */}
                </div>
                <div className="col-md-4">
                    <div className="address-block-two text-center mb-40 sm-mb-20">
                        <div className="icon d-flex align-items-center justify-content-center m-auto"><img src="images/icon/icon_19.svg" alt=""/></div>
                        <h5 className="title">Live Support</h5>
                        {
                           props?.data && props?.data[0] ? <p>{props?.data[0].contact_email}</p> : ''

                        }
                        
                    </div>
                    {/* /.address-block-two */}
                </div>
            </div>
        </Fragment>
    )
}

export default ContactThree