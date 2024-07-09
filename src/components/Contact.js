import React from 'react';
import { useState } from 'react';
import Resume from '../Data/Gagan1.pdf'

const Contact = () => {

    const [contact, setContact] = useState(false);

    function ContactHandler() {
        if (contact === true) {
            setContact(false);
        }
        else {
            setContact(true);
        }
    }

    const handleInstagram = () => {
        window.location.href = "https://www.instagram.com/gaganbansal04/";
    }

    const handleX = () => {
        window.location.href = "https://twitter.com/bansalgagan2004";
    }

    const downloadResume = () => {
        const link = document.createElement('a');
        link.href = Resume;
        link.download = 'GaganCV.pdf';
        link.click();
    };

    return (
        <div>
            <div className='flex flex-row justify-center items-center gap-3 mt-3'>
                <button onClick={downloadResume} className=' px-4 py-2 text-white rounded-lg font-bold shadow-md transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-blue-700 duration-300'>Download CV</button>
                <button className={`font-bold bg-slate-200 rounded-lg  shadow-md  ${contact ? 'border-4 border-sky-600 text-sky-600 bg-white px-4 py-1' : 'px-4 py-2 '}  `} onClick={ContactHandler}>Contact Me</button>
            </div>

            {
                contact ? (
                    <div className='flex flex-col items-center justify-center mt-5 font-semibold text-white opacity-55'>
                        <p>Ph: +91 99968 XXXXX</p>
                        <p>Email: bansalgagan2004@gmail.com</p>


                        <div>
                            <div className='flex justify-center items-center text-red-500 gap-6 my-2'>
                                <p onClick={handleInstagram} className='cursor-pointer'>Instagram</p>
                                <p onClick={handleX} className='cursor-pointer'>X [Twitter]</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div></div>
                )
            }


        </div >
    )
}

export default Contact
