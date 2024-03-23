import React from 'react';
import { CgDarkMode } from "react-icons/cg";

const ThemeMode = () => {
    return (
        <div>
            <div className='text-4xl flex justify-end px-4 py-4 '>
                <div className='cursor-pointer'>
                    <CgDarkMode />
                </div>
            </div>
        </div>
    )
}

export default ThemeMode
