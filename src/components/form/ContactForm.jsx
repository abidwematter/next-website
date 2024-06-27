import React, {Fragment} from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useState } from 'react';
import { addContactUs } from '../../services/shared-service';

import axios from 'axios';
const ContactForm = () => {
  var regex = new RegExp('[a-z0-9]+@gmail.com');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('')
  const [contact,setContact]=useState({
    name:'',
    email:'',
    message:''
  })
  async function onTextFieldChange(e) {
    setContact({
        ...contact,
        [e.target.name]: e.target.value,
        [e.target.email]: e.target.value,
        [e.target.message]: e.target.value,
    })
}
  async function onFormSubmit(e) {
    var formData = new FormData()
    formData.append('name',contact.name)
    formData.append('email',contact.email)
    formData.append('message',contact.message)
    e.preventDefault()
    document.getElementById("email").style.borderColor = "#F8F9FA";
    if(contact.name  =='')
    {
      document.getElementById("newsucc_message").style.display = "block";
      document.getElementById("alert_message").innerHTML = "Please enter your name";
    }
    else if(contact.name.length<3)
    {
      document.getElementById("newsucc_message").style.display = "block";
      document.getElementById("alert_message").innerHTML = "Length of name is short ";
    }
    else if(contact.message==''){
      document.getElementById("newsucc_message").style.display = "block";
      document.getElementById("alert_message").innerHTML = "Please eneter your message  ";
    }
    else if(contact.message.length <5){
      document.getElementById("newsucc_message").style.display = "block";
      document.getElementById("alert_message").innerHTML = "Length of Message is short ";
    }
    else if (contact.email == '') {
      document.getElementById("newsucc_message").style.display = "block";
      document.getElementById("alert_message").innerHTML = "Please Enter Email Address";
      //window.scrollTo({ top: 0, behavior: 'smooth' });
      //window.location.reload();
    }
    else{
      var valid = regex.test(contact.email)
      if (valid)
      {
      
        try {
            axios.post(`https://api.we-matter.com/Api/contact_form`, formData)
                .then((res) => {
                     document.getElementById("newsucc_message").style.display = "block";
                     document.getElementById("alert_message").innerHTML = "We received your request. We'll get back to you soon.!!";
                     //window.scrollTo({ top: 0, behavior: 'smooth' });
                     //window.location.reload();
                });
        }
        catch (error) {
            alert("Something is Wrong");
            window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }

  else {
    document.getElementById("newsucc_message").style.display = "block";
    document.getElementById("alert_message").innerHTML = "Please Enter Valid Email Address";
    // window.scrollTo({ top: 0, behavior: 'smooth' });
    //alert("ggggg")
  }
}
}


  // // const hundleClick = (e) => {
  //   e.preventDefault();
  //   // let data = {
  //   //   name : name,
  //   //   email: email,
  //   //   message: message
  //   // }
  //   // addContactUs(data).then((res) => {
  //   //   alert(res);
  //   //   setName('');
  //   //   setEmail('');
  //   //   setMessage('');
  //   // })
  // }
    return (
        <Fragment>
          

           
          
              <div className="form-style-one">
                <form id="contact-form" action="#" >
                  <div className="row">
                    <div className="col-12">
                      <div className="input-group-meta form-group mb-30">
                        <label>Name<span style={{color:'red'}}>*</span></label>
                        <input type="text" id="name" name="name" placeholder="Enter Name" value={contact.name} onChange={e => onTextFieldChange(e)} required/>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="input-group-meta form-group mb-30">
                        <label>Email<span style={{color:'red'}}>*</span></label>
                        <input type="text" id="email" name="email" placeholder="Enter Email" value={contact.email} onChange={e => onTextFieldChange(e)}/>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="input-group-meta form-group mb-30">
                        <label>Message<span style={{color:'red'}}>*</span></label>
                        <input type="text" id="message" name="message" placeholder="Enter Message" value={contact.message} onChange={e => onTextFieldChange(e)}/>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn-eight ripple-btn calculator" onClick={e => onFormSubmit(e)}>Submit</button>
                    </div>
                    <div className="col-12">
                    <div id="newsucc_message" style={{color:'green'}}>
                     <div id="alert_message">
                     </div>
                   </div>
                   </div>
                  </div>
                </form>
              </div>
        </Fragment>
    )
}
export default ContactForm