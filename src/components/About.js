import React from 'react';
import News1 from "../images/Fav.png";
import News2 from "../images/Google.jpeg"

const About = () => {
    return (
        <div>
            <div className='flex flex-col sm:flex-col justify-start max-w-550 px-7 text-white mb-10'>
                <div className='font-blod text-lg'>Latest News</div>
                <div className='my-4'>
                    <img src={News1} alt='error' className=' max-h-96 w-full object-cover rounded-t-md' />
                    <div className='bg-slate-800 p-2 rounded-b-md opacity-65'>
                        Finalist in <span className='text-red-500 font-bold'>Smart Cataloging Hackathon</span> by <span className='text-red-500 font-bold'>ShopClues</span>.
                        Develop a Tool that will help you in analyzing Image
                        and provide you a description and some phrases. You
                        can add custom attributtes also.
                    </div>
                </div>
                <div className='my-4'>
                    <img src={News2} alt='error' className=' max-h-96 w-full object-cover rounded-t-md' />
                    <div className='bg-slate-800 p-2 rounded-b-md opacity-65'>
                        Completed 2 Months Apprentship in <span className='text-red-500 font-bold'>Google Cloud </span>
                        and ganing experience in Cloud and Generative AI.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
