// import ThemeMode from './components/ThemeMode.js';
import './App.css';
import HeroSection from './components/HeroSection.js';
import Contact from './components/Contact.js';
import Projects from './components/Projects.js';
import Skills from './components/Skills.js';
import { useState } from 'react';
import Experience from './components/Experience.js';
import { CgDarkMode } from "react-icons/cg";
import About from './components/About.js';

function App() {
  const [page, setPage] = useState(true);

  function PageSet() {
    if (page === true) {
      setPage(false)
    }
    else {
      setPage(true)
    }
  }


  return (
    <div className='flex items-center justify-center bg-slate-900'>
      <div className='bg-slate-900 md:w-6/12'>
        <div className='text-4xl flex justify-end px-4 py-4'>
          <div className='cursor-pointer bg-white rounded-lg'>
            <CgDarkMode />
          </div>
        </div>
        <HeroSection />
        <Contact />
        <div className='text-white font-bold cursor-pointer text-[25px] my-5 mx-10 p-0 border-2 flex items-center shadow-inner justify-center transition-all duration-300 hover:border-slate-500 sm:mx-40 z-50 rounded-md' >Experience</div>
        <Experience />
        <div className='flex justify-center items-center mt-6'>
          <div className='bg-slate-200 flex items-center justify-between px-6 py-2 gap-16 rounded-md shadow-2xl  border-4 border-slate-800'>
            <div className={` font-bold  cursor-pointer ${page ? 'bg-white px-5 py-1 rounded-md shadow-md' : 'bg-slate-200 px-5 py-1 '}  `} onClick={PageSet}>Projects</div>
            <div className={` font-bold  cursor-pointer ${page ? 'bg-slate-200 px-5 py-1 ' : 'bg-white px-5 py-1 rounded-md shadow-md'}  `} onClick={PageSet}>Skills</div>
          </div>
        </div>
        {page ? <Projects /> : <Skills />}
        <About />
        <div className='text-center text-white'>
          <p className='opacity-50'>Developed By Gagan Bansal</p>
          ⓒ 2024 All Right Reserved.
        </div>
      </div >
    </div>

      // <div className='flex flex-col items-center justify-center bg-black hvh overflow-y-scroll'>
      //   <HeroSection />
      //   <Experience />
      // </div>
  );
}

export default App;
