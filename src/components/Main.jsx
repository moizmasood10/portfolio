import React from 'react'
import {TypeAnimation} from 'react-type-animation'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import CustomButton from './OpenPDF';

const Main = () => {
  return (
    <div id='main'>
      <div  className='w-full h-screen top-0 left-0'>
      <div className='max-w-[1000px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
            <h3 className="pl-1 font-mono  text-t3 text-2xl pb-6">Hi, my name is</h3>
            <h1 className="pl-1 font-bold text-t1 text-6xl pb-4">Moiz Masood.</h1>
            <h1 className="pl-1 font-bold text-t2 text-6xl pb-8 text-center">I build softwares and websites.</h1>
            <h2 className="pl-1 font-semibold text-white text-2xl pb-8">I'm a{' '}
            <TypeAnimation
      sequence={[
        'Software Engineer',
        1000,
        'Coder',
        1000,
        'Tech Enthusiast',
        1000,
      ]}
      wrapper="div"
      speed={50}
      style={{ fontSize: '1em', display: 'inline-block' }}
      repeat={Infinity}
    />
    </h2>
    <div className='ml-1 flex justify-between pt-6 max-w-[160px] w-full'>
    <a href="https://www.linkedin.com/in/moizmasood10/" target="_blank" rel="noopener noreferrer">
      <FaLinkedin className='cursor-pointer text-white' size={50}/>
    </a>    
    <a href="https://github.com/moizmasood10" target="_blank" rel="noopener noreferrer">
      <FaGithub className='cursor-pointer text-white' size={50}/>
    </a>    
    </div>
    <CustomButton />
    </div>
    </div>
      </div>
        
  )
}

export default Main