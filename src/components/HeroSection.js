import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { SiLeetcode } from "react-icons/si";
import myImage from '../images/gagan.jpeg';

const HeroSection = () => {

    const handleLinkedin = () => {
        window.location.href = "https://www.linkedin.com/in/bansalgagan2004/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";
    }

    const handleGithub = () => {
        window.location.href = "https://github.com/Gagan2004bansal";
    }

    const handleMail = () => {
        window.location.href = "mailto:bansalgagan2004@gmail.com";
    }


    const handleLeetcode = () => {
        window.location.href = "https://leetcode.com/u/Gagan_Bansal/";
    }



    return (
        <div className='relative'>
            <div className='flex flex-col justify-center items-center mt-2'>
                <div className='bg-slate-300 p-2 rounded-full'>
                    <img className="rounded-full w-60 h-60 object-cover" src={myImage} alt='loading' />
                </div>
                <div className='font-bold text-xl mt-5 text-white md:text-4xl md:pb-3'>Gagan Bansal</div>
                <div className='font-semibold text-md text-center text-slate-400 md:text-[16px] px-4 py-2'>Pre-final year CS student with 2+ years of coding, adept at problem-solving with data structures and algorithms.</div>
                <img src='https://razorpay.com/build/browser/static/dots-with-cut.bde9e78f.png' className='absolute left-0 top-10 rotate-180 opacity-0 sm:opacity-100' />
                <div className='flex my-3 text-2xl text-white gap-2 cursor-pointer'>
                    <div>
                        <FaGithub onClick={handleGithub} />
                    </div>
                    <div>
                        <FaLinkedin onClick={handleLinkedin} />
                    </div>
                    <div>
                        <IoMdMail onClick={handleMail} />
                    </div>
                    <div onClick={handleLeetcode} className='flex flex-row items-center justify-center text-yellow-300 '>
                        <SiLeetcode /> Leetcode
                    </div>
                </div>
                <div className='font-semibold font-poppins md:text-[20px] text-white'>B.E CS @ Chitkara University</div>
            </div>
            <img src='https://razorpay.com/build/browser/static/dots-with-cut.bde9e78f.png' className='absolute right-0 opacity-0 sm:opacity-100 z-[-10]' />
        </div>
    )
}

export default HeroSection
