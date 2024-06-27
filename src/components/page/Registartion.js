/* eslint-disable no-redeclare */
/* eslint-disable eqeqeq */
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
// import ContactForm from '../form/ContactForm';
// import Calculatorform from './calculatorform';
// import { addRegistration, registration } from '../../services/shared-service';
import axios from "axios";
// import { refresh } from 'aos';
const Registartion = (props) => {
  useEffect(() => {
    //window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  })
  var email_regex = new RegExp('/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/');
  var phone_regex = new RegExp('/^[1-9][0-9]{9}$/');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('')
  const [designation, setDesignation] = useState('')
  const [organisation, setOraganisation] = useState('');
  const [industry, setIndustries] = useState('');
  const [country, setCountry] = useState('');
  const [strength, setStrength] = useState('')
  const [enqiry, setEnqiry] = useState('');
  const [refresh, setRefresh] = useState(false)
  const [registration, setRegistration] = useState({
    name: '',
    email: '',
    mobile: '',
    designation: '',
    organisation: '',
    industry: '',
    country: '',
    strength: '',
    enquiry: ''
  })

  async function onTextFieldChange(e) {
    setRegistration({
      ...registration,
      [e.target.name]: e.target.value,
      [e.target.email]: e.target.value,
      [e.target.mobile]: e.target.value,
      [e.target.designation]: e.target.value,
      [e.target.organisation]: e.target.value,
      [e.target.industry]: e.target.value,
      [e.target.country]: e.target.value,
      [e.target.strength]: e.target.value,
      [e.target.enquiry]: e.target.value,
    })
  }

  async function onFormSubmit(e) {
    var formData = new FormData()
    setRefresh(!refresh)
    formData.append('name', registration.name)
    formData.append('email', registration.email)
    formData.append('mobile', registration.mobile)
    formData.append('designation', registration.designation)
    formData.append('organisation', registration.organisation)
    formData.append('industry', registration.industry)
    formData.append('country', registration.country)
    formData.append('strength', registration.strength)
    formData.append('enquiry', registration.enquiry)
    e.preventDefault()

    document.getElementById("email").style.borderColor = "#F8F9FA";

    if (registration.name == '') {
      document.getElementById("nameerror").innerHTML = "Please Enter Your Name";
    }
    else if (registration.email == '') {
      document.getElementById("emailerror").innerHTML = "Please Enter Your Email";
    }
    else if (registration.mobile == '') {
      document.getElementById("mobilenumber").innerHTML = "Please Enter Your Mobile number";
    }
    else if (registration.designation == '') {
      document.getElementById("designationerror").innerHTML = "Please Enter Designation In Your Organisation";
    }
    else if (registration.organisation == '') {
      document.getElementById("organisationerror").innerHTML = "Please Enter Organisation name";
    }
    else if (registration.industry == '') {
      document.getElementById("industryerror").innerHTML = "Please Enter Your Organisation's Industry";
    }
    else if (registration.country == '') {
      document.getElementById("countryerror").innerHTML = "Please Enter Your Country";
    }
    else {
      
      var valid = phone_regex.test(registration.mobile)
      var valid = email_regex.test(registration.email)

      if (valid) {
        try {
          axios.post(`https://api.we-matter.com/Api/registration_form`, formData)
            .then((res) => {
              document.getElementById("newsucc_message").style.display = "block";
              document.getElementById("alert_message").innerHTML = "We received your request. We'll get back to you soon.!!";
            });
        }
        catch (error) {
          alert("Something is Wrong");
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
        else {
        document.getElementById("newsucc_message").style.display = "block";
        document.getElementById("alert_messages").innerHTML = "Please Enter Valid Email Address";
      }
    }
  }

  
const [countryList, setCountryList] = useState([]);
useEffect(() => {
  async function getCountryList() {
    try {
      const countryApi = await axios.get(`https://api.we-matter.com/Api/country_list`)
      setCountryList(countryApi.data);
    } catch (error) {
    }
  }
  getCountryList();
}, []);
return (
  <div>
    <Head>
      <title>{props?.data?.meta_title}</title>
      <meta name="description" content={props?.data?.meta_description} />
    </Head>
    <div className="fancy-feature-twentyFive position-relative mt-50 mb-50">
      <div className="container">
        <div className='row'>
          <div className="col-md-2 col-xs-12"></div>
          <div className="col-md-8 col-xs-12">
            <div className="form-style-one">
              <form id="contact-form" action="#" >
                <div className="row">
                  <div className="col-md-6 col-xs-12">
                    <div className="input-group-meta form-group mb-30">
                      <label>Name<span style={{ color: 'red' }}>*</span></label>
                      <input type="text" id="name" name="name" value={registration.name} placeholder="Enter Name" onChange={e => onTextFieldChange(e)} />
                      <div id='nameerror' style={{ color: 'red', fontSize: '13px' }}>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-xs-12">
                    <div className="input-group-meta form-group mb-30">
                      <label>Company Email<span style={{ color: 'red' }}>*</span></label>
                      <input type="text" id="email" name="email" value={registration.email} placeholder="Enter Company Email" onChange={e => onTextFieldChange(e)} />
                      <div id='emailerror' style={{ color: 'red', fontSize: '13px' }}>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-xs-12">
                    <div className="input-group-meta form-group mb-30">
                      <label>Mobile<span style={{ color: 'red' }}>*</span></label>
                      <input type="number" id="mobile" name="mobile" value={registration.mobile} placeholder="Enter Mobile" onChange={e => onTextFieldChange(e)} />
                      <div id='mobilenumber' style={{ color: 'red', fontSize: '13px' }}>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-xs-12">
                    <div className="input-group-meta form-group mb-30">
                      <label>Designation<span style={{ color: 'red' }}>*</span></label>
                      <input type="text" id="designation" name="designation" value={registration.designation} placeholder="Enter Designation" onChange={e => onTextFieldChange(e)} />
                      <div id='designationerror' style={{ color: 'red', fontSize: '13px' }}></div>
                    </div>
                  </div>
                  <div className="col-md-6 col-xs-12">
                    <div className="input-group-meta form-group mb-30">
                      <label>Organisation Name<span style={{ color: 'red' }}>*</span></label>
                      <input type="text" id="organisation" name="organisation" value={registration.organisation} placeholder="Enter Orgnization Name" onChange={e => onTextFieldChange(e)} />
                      <div id='organisationerror' style={{ color: 'red', fontSize: '13px' }}></div>
                    </div>
                  </div>
                  <div className="col-md-6 col-xs-12">
                    <div className="input-group-meta form-group mb-30">
                      <label>Industry<span style={{ color: 'red' }}>*</span></label>
                      <input type="text" id="industry" name="industry" value={registration.industry} placeholder="Enter Industry" onChange={e => onTextFieldChange(e)} />
                      <div id='industryerror' style={{ color: 'red', fontSize: '13px' }}></div>                    
                    </div>
                  </div>
                  <div className="col-md-6 col-xs-12">
                    <div className="input-group-meta form-group mb-30">
                      <label>Country<span style={{ color: 'red' }}>*</span></label>
                      <select name='country' id="country" className='form-control' onChange={e => onTextFieldChange(e)} style={{ height: '60px' }}>
                        <option value="">Select Country</option>
                        {
                          countryList && countryList.length > 0 ?
                            countryList.map((item, index) => (
                              <>
                                <option value={item.name}>{item.name}</option>
                              </>
                            )) :
                            ''
                        }
                      </select>
                      <div id='countryerror' style={{ color: 'red', fontSize: '13px' }}></div>                    
                    </div>
                  </div>
                  {/*
                    <div className="col-md-6 col-xs-12">
                      <div className="input-group-meta form-group mb-30">
                        <label>Country Code</label>
                        <input className='form-control' type="text" placeholder="Enter Country Code"
                        />
                      </div>
                    </div>
                    */}
                  <div className="col-md-6 col-xs-12">
                    <div className="input-group-meta form-group mb-30">
                      <label>Employee Strength</label>
                      <select required name='strength' id="strength" className='form-control' value={registration.strength} onChange={e => onTextFieldChange(e)} style={{ height: '60px' }}>
                        <option value="">-- Select Employee --</option>
                        <option value="Less Than 200 Employees">Less Than 200 Employees</option>
                        <option value="201-500 Employees">201-500 Employees</option>
                        <option value="501-1000 Employees">501-1000 Employees</option>
                        <option value="1001-5000 Employees">1001-5000 Employees</option>
                        <option value="5001-10000 Employees">5001-10000 Employees</option>
                        <option value="Greater Than 10000 Employees">Greater Than 10000 Employees</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6 col-xs-12">
                    <div className="input-group-meta form-group mb-30">
                      <label>Inquiry Type</label>
                      <select required name='enquiry' id="enquiry" className='form-control' value={registration.enquiry} onChange={e => onTextFieldChange(e)} style={{ height: '60px' }}>
                        <option value="">-- Select Inquiry Type --</option>
                        <option value="Engagement Solution">Engagement Solution</option>
                        <option value="Awards">Awards</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-md-6 col-xs-12 d-flex align-items-center">
                    <div className='d-flex justify-content-center align-items-center'>
                      <img style={{height:"45px", marginRight:"10px"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmQKaWBcsyeMhdv9FAi9JWbdlswhd5X_1Lfcq5zQJfhUK7vDykxp7RW8-elv9HDNnxg1A&usqp=CAU' alt="Phone Icon" />
                      <a href="tel:9653699584">+91  965 369 9584</a>
                    </div>
                  
                  </div>
                  <div className="col-12">
                    <button className="btn-eight ripple-btn calculator" onClick={e => onFormSubmit(e)}>Submit</button>
                  </div>
                  <div className="col-12">
                    <div id="newsucc_message" style={{ color: 'green' }}>
                      <div id="alert_message">
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-2 col-xs-12"></div>
          {/* <div className="col-md-8 col-xs-12">
              <div className='row'>
                <div dangerouslySetInnerHTML={{ __html: (props?.data?.page_content) }} />
              </div>
            </div> */}
        </div>
      </div>
      {/* /.container */}
    </div>
  </div>
)
}
export default Registartion