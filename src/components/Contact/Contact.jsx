import React, { useRef, useState } from "react";
import "./Contact.css"
import add from "../img/address.png"
import email from "../img/email.png"
import phone from "../img/phone.png"
import emailjs from '@emailjs/browser';


export default function Contact() {
    const formRef=useRef();
    const[done,setdone]=useState(false)
    const handleSubmit=(e)=>{
      e.preventDefault();

      emailjs.sendForm('service_q2ls4j6', 'template_9a1cpbn', formRef.current, 'aUKujUlpmD0aetUXr')
      .then((result) => {
          console.log(result.text);
           setdone(true);
      }, (error) => {
          console.log(error.text);
      });

    }
    return (<>
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's disscuss your project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={phone} alt="" className="c-icon" />
                            +91-7895466206,<br />
                            +91-7488125195
                        </div>

                        <div className="c-info-item">
                            <img src={email} alt="" className="c-icon" />
                            sunnymahto9824@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src={add} alt="" className="c-icon" />
                            At+po-Sonki,Dist-Darbhanga,State-Bihar.
                        </div>
                    </div>
                </div>


                <div className="c-right">
                    <p className="c-desc"><b>What's your story?</b> Get in touch.Always freelancing if the right projects come along</p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" name="user_name" />
                        <input type="text" placeholder="Subject" name="user_subject" />
                        <input type="text" placeholder="Email" name="user_email" />
                        <textarea rows="5" placeholder="Message" name="message" />
                        <button>Submit</button>
                        {done && alert("Thank you")
                        }
                    </form>
                </div>
            </div>


        </div>
    </>);

}