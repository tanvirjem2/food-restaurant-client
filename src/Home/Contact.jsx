import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import pic from "../assets/french-fries-10318928.webp"

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_3wi2doq', 'template_g2e3pk9', form.current, 'YjhdYhoO_g2PBrAlg')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='flex flex-wrap items-center justify-evenly gap-6 my-28'>

            <div>
                <img className='rounded-xl w-[500px]' src={pic} alt="" />
            </div>
            <div>
                <p className="text-[red] font-semibold"> - Get In Touch</p>
                <p className="font-bold text-4xl mt-6">Feel Free to Contact</p>
                <form className='space-y-6 mt-6' ref={form} onClick={sendEmail}>

                    <div>
                        <input className='w-full rounded-lg p-3 bg-[#e8f0fe]' placeholder='Enter Name' type="text" name="user_name" />
                    </div>

                    <div>
                        <input className='w-full rounded-lg p-3 bg-[#e8f0fe]' placeholder='Enter Email' type="email" name="user_email" />
                    </div>

                    <div>
                        <textarea className='w-full rounded-lg p-3 bg-[#e8f0fe]' placeholder='Enter Message' name="message" />
                    </div>

                    <button className='btn rounded-full bg-[red] text-white'>Contact us</button>
                </form>
            </div>

        </div>
    );
};

export default Contact;