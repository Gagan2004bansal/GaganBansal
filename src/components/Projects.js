import React from 'react'

const Projects = () => {
    return (
        <div>
            <div className='flex flex-col sm:flex-row gap-6 flex-wrap items-center justify-center mt-10 mb-10'>
                <div className='flex flex-row bg-slate-800 text-slate-300 p-3 gap-2 rounded-md border-4 border-slate-300 shadow-xl'>
                    <div className='flex flex-col justify-center items-center'>
                        <p className='font-bold'>Weather App</p>
                        <a href='https://gagan2004bansal.github.io/WeatherAPP/'>Demo</a>
                    </div>
                    <div>
                        <img className='w-40 h-40' src='https://cdn3d.iconscout.com/3d/premium/thumb/cloudy-day-8323005-6634090.png' alt='error' />
                    </div>
                </div>
                <div className='flex flex-row bg-white text-slate-800 p-3 gap-2 rounded-md border-4 border-slate-800 shadow-xl'>
                    <div className='flex flex-col justify-center items-center'>
                        <p className='font-bold'>LuxeMart Ec</p>
                        <a href='https://gagan2004bansal.github.io/LuxeMartEcom/signin.html'>Demo</a>
                    </div>
                    <div>
                        <img className='w-40 h-40 ' src='https://png.pngtree.com/png-clipart/20200701/original/pngtree-e-commerce-world-on-phone-png-image_5342845.jpg' alt='error' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
