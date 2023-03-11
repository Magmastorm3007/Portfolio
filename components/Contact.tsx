import React,{useRef, useState} from "react";
import emailjs from '@emailjs/browser';
import axios from "axios";
const Contact = () => {

   const [email,setemail]=useState('')
  const [name,Setname]=useState('')
  const [message,SetMessage]=useState('')
  const mail=(e: React.ChangeEvent<HTMLFormElement>)=>{
    e.preventDefault();

    emailjs.sendForm('service_dmimtja', 'template_jve3fog', e.target, 'QRmgbLck8DSx7As5o')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

   
  

  }
  return (
   
    <div className="bg-[#1e293b] p-6 rounded-lg font-inter">
      <div className="pb-2 text-center font-inter">
        <h2 className="text-4xl font-bold">Contact Me</h2>
      </div>
      <form onSubmit={mail}>
      <div className="w-[800px]">
        <div>
          <span className="text-xl font-bold text-gray-600 uppercase">
            Full Name
          </span>
          <input name="from_name" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>Setname(e.target.value)}
            className="w-full p-3 mt-2 text-gray-900 bg-gray-300 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder=""
          />
        </div>
        <div className="mt-8">
          <span className="text-xl font-bold text-gray-600 uppercase">
            Email
          </span>
          <input name="from_email" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setemail(e.target.value)}
            className="w-full p-3 mt-2 text-gray-900 bg-gray-300 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
          />
        </div>
        <div className="mt-8">
          <span className="text-xl font-bold text-gray-600 uppercase">
            Message
          </span>
          <textarea name="message" onChange={(e)=>SetMessage(e.target.value)} className="w-full h-32 p-3 mt-2 text-gray-900 bg-gray-300 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
        </div>
        <div className="mt-8">
          <button type="submit" id="s" className="w-full p-3 text-sm font-bold tracking-wide text-gray-100 uppercase bg-indigo-500 rounded-lg focus:outline-none focus:shadow-outline">
            Send Message
          </button>
        </div>
      </div>
      </form>
    </div>
  );
};

export default Contact;
