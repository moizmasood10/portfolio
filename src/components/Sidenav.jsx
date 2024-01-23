import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineHome, AiOutlineMail, AiOutlineProject} from 'react-icons/ai'
import {GrProjects} from 'react-icons/gr'

const Sidenav = () => {
  
    const [nav,setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
        console.log('State Changed')
    };

    return (
    <div>
        <AiOutlineMenu size={40} onClick={handleNav} className="text-white fixed top-4 right-4 z-[99] sm:hidden hover:cursor-pointer" />
        {
            nav ? (
                <div className='fixed w-full h-screen bg-bgcolor bg-opacity-95 flex flex-col justify-center items-center z-20'>
                    <a onClick={handleNav} 
                        href="#main" class="w-[60%] flex justify-center items-center rounded-full shadow-lg shadow-c3 bg-transparent border-c3 border-4 m-8 p-8 cursor-pointer hover:scale-110 ease-in duration-200 text-white font-semibold text-2xl">
                        <AiOutlineHome size={24}/>
                        <span className='pl-4'>Home</span>
                    </a>
                    <a onClick={handleNav} 
                        href="#projects" class="w-[60%] flex justify-center items-center rounded-full shadow-lg shadow-c3 bg-transparent border-c3 border-4 m-8 p-8 cursor-pointer hover:scale-110 ease-in duration-200 text-white font-semibold text-2xl">
                        <AiOutlineProject size={24}/>
                        <span className='pl-4'>Projects</span>
                    </a>
                    <a onClick={handleNav} 
                        href="#contact" class="w-[60%] flex justify-center items-center rounded-full shadow-lg shadow-c3 bg-transparent border-c3 border-4 m-8 p-8 cursor-pointer hover:scale-110 ease-in duration-200 text-white font-semibold text-2xl">
                        <AiOutlineMail size={24}/>
                        <span className='pl-4'>Contact</span>
                    </a>
                </div>
            )

            : (
                <div>
                    
                </div>
            )
        }


        <div className='sm:block hidden fixed top-[35%] z-10'>
            <div className='flex flex-col'>
                <a href="#main" className='rounded-full shadow-lg shadow-c2 bg-c1 cursor-pointer hover:scale-110 ease-in duration-200 m-4 p-4 text-4xl text-white'>
                    <AiOutlineHome />
                </a>
                <a href="#projects" className='rounded-full shadow-lg shadow-c2 bg-c1 cursor-pointer hover:scale-110 ease-in duration-200 m-4 p-4 text-4xl text-white'>
                    <GrProjects />
                </a>
                <a href="#contact" className='rounded-full shadow-lg shadow-c2 bg-c1 cursor-pointer hover:scale-110 ease-in duration-200 m-4 p-4 text-4xl text-white'>
                    <AiOutlineMail />
                </a>
            </div>
        </div>

    </div>
  );
};

export default Sidenav