import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { SiLeetcode } from "react-icons/si";
import myImage from '../images/main.png';

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
        <div>
            <div className='flex flex-col justify-center items-center mt-0 md:mt-2 overflow-y-scroll'>
                <div className='bg-slate-300 p-2 rounded-full'>
                    <img className="rounded-full w-60 h-60 object-cover" src={myImage} alt='loading' />
                </div>
                <div className='font-bold text-xl mt-5 text-white md:text-4xl md:pb-3 my-2'>Gagan Bansal</div>
                <div className='font-semibold font-poppins md:text-[20px] text-white my-2'>B.E CS'26 @ Chitkara University</div>
                <div className='md:w-11/12 my-2 font-semibold text-md text-center text-slate-400 md:text-[16px] px-4 py-2'>I am a Computer Science Engineering student at Chitkara University with a passion for web development and problem-solving. Skilled in C/C++, MERN stack, UI Design, and Data Structures & Algorithms, I thrive in collaborative environments that emphasize hands-on learning. With a forward-thinking mindset, I bring strong communication and solution-oriented skills to every project, along with a dedication to innovation and teamwork.</div>
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
            </div>
        </div>
    )
}

export default HeroSection
