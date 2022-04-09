import React, {useState} from 'react';
import { Link as LinkR } from 'react-router-dom';
import './Contact.css';
import Footer from '../Footer/Footer';

const Contactpage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [message, setMessage] = useState('');
  const data = {'fullname':name,'email':email,'phonenumber':phonenumber,'message':message};
  
  let sendData = ()=> {
    fetch('http://127.0.0.1:8000/contact/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(data)
    }).then(resp=>resp.json())
    .then(error=>console.log(error))
    .then(setName(''),setEmail(''),setPhonenumber(''),setMessage(''))
    .then(alert('thanks for the message'))
    

  
  };


  return (

    <>
    <h1><LinkR to='/' className='linkr'>CREW</LinkR></h1>
    <section className='contact' id='contact'>
        <h5 className='team-text'>CONTACT US</h5>
        <div className='horizontal-line'></div>
        <p className='title'>We're here to help and answer any question you might have.<br></br> We look forward to hearing from you.</p>
        <div className='contact-us'>
            <input type='text' name='fullname' id='fullname' placeholder='Full Name' value={name} onChange={e=>setName(e.target.value)}></input><br></br>
            <input type='email' name='email' id='email' placeholder='Email Adress' value={email} onChange={e=>setEmail(e.target.value)}></input><br></br>
            <input type='phone' name='phone' id='phone' placeholder='Phone Number' value={phonenumber} onChange={e=>setPhonenumber(e.target.value)}></input><br></br>
            <textarea type='text' name='message' id='message' placeholder='Your Message' rows={10} value={message} onChange={e=>setMessage(e.target.value)}></textarea><br></br>
        </div>
        <div className='submit'>
            <button className='button' onClick={sendData}>Submit</button>
        </div>
    </section>
    <Footer/>
    </>

  )
}

export default Contactpage