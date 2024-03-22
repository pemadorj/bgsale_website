/* eslint-disable react/no-unescaped-entities */
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
import { useState } from 'react'

// import

const Contact = () => {
    const [result, setResult] = useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "cead1ec0-4ac6-47cb-9213-921cd8a577cd");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Email sent successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
    };
  return (
    <div  className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>
            Feel free to reach out anytime! Whether you have questions, 
            feedback, or ideas, we're here to listen and assist you. 
            Our team is dedicated to providing prompt and personalized support to address your 
            inquiries and ensure your experience with us is exceptional. 
            Your input is invaluable to us, and we look forward to hearing from you. 
            Let's collaborate and turn your visions into reality!
        </p>
        <ul>
            <li><img src={mail_icon} alt="" />bgsales@outlook.com</li>
            <li><img src={phone_icon} alt="" />+975 77208946 / +975 17171615</li>
            <li><img src={location_icon} alt="" />Hongkong Market, Opposite to DGM, <br/>MOENR office, Thimphu</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type="text" name='name' placeholder='Enter your name' required/>
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
            <label>Write your message here</label>
            <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn warning'>Send <img src={white_arrow} alt="" /></button> 
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
