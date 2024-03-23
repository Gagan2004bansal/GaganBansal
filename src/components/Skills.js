import React from 'react'

const Skills = () => {
    return (
        <div className='flex items-center justify-center'>
            <div className='flex flex-col sm:flex-col justify-start mt-10 max-w-550 mb-10'>
                <div className='flex flex-col justify-center m-4'>
                    <div className='font-bold text-[32px] pb-2 text-white'>
                        Frontend
                    </div>
                    <div className='font-semibold flex text-slate-900 gap-3 flex-wrap'>
                        <p className='px-3 py-2 bg-slate-300 rounded-md'>HTML</p>
                        <p className='px-3 py-2 bg-slate-300 rounded-md'>CSS</p>
                        <p className='px-3 py-2 bg-slate-300 rounded-md'>Javascript</p>
                        <p className='px-3 py-2 bg-slate-300 rounded-md'>Tailwind CSS</p>
                        <p className='px-3 py-2 bg-slate-300 rounded-md'>React</p>
                    </div>
                </div>
                <div className='flex flex-col justify-center m-4'>
                    <div className='font-bold text-[32px] pb-2 text-white'>
                        Backend
                    </div>
                    <div className='font-semibold flex text-slate-900 gap-3 flex-wrap'>
                        <p className='px-3 py-2 bg-slate-300 rounded-md'>Node</p>
                        <p className='px-3 py-2 bg-slate-300 rounded-md'>C/C++</p>
                        <p className='px-3 py-2 bg-slate-300 rounded-md'>Javascript</p>
                        <p className='px-3 py-2 bg-slate-300 rounded-md'>Python</p>
                        <p className='px-3 py-2 bg-slate-300 rounded-md'>Express.js</p>
                        <p className='px-3 py-2 bg-slate-300 rounded-md'>APIs</p>
                        <p className='px-3 py-2 bg-slate-300 rounded-md'>Git</p>
                        <p className='px-3 py-2 bg-slate-300 rounded-md'>SQl</p>
                        <p className='px-3 py-2 bg-slate-300 rounded-md'>MongoDB</p>
                        <p className='px-3 py-2 bg-slate-300 rounded-md'>Postgre SQL</p>
                    </div>
                </div>
                <div className='flex flex-col justify-center m-4'>
                    <div className='font-bold text-[32px] pb-2 text-white'>
                        Core Subjects
                    </div>
                    <div className='font-semibold flex text-slate-900 gap-3 flex-wrap'>
                        <p className='px-3 py-2 bg-slate-300 rounded-md'>Oops</p>
                        <p className='px-3 py-2 bg-slate-300 rounded-md'>DSA</p>
                        <p className='px-3 py-2 bg-slate-300 rounded-md'>DBMS</p>
                        <p className='px-3 py-2 bg-slate-300 rounded-md'>CN</p>
                        <p className='px-3 py-2 bg-slate-300 rounded-md'>OS</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
