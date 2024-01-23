import React from 'react';
import moizpdf from '../assets/MoizMasood.pdf'

const CustomButton = () => {
  
    return (
      <a
        href={moizpdf}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-transparent border-c3 border-4 font-mono text-c3 font-semibold text-xl px-12 py-4 rounded-full hover:bg-c3 hover:text-white transition duration-300 mt-32"
      >
        Resume
      </a>
    );
  };
  
  export default CustomButton;