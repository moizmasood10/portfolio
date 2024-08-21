import React, { useRef, useEffect, useState } from 'react';
import { FaLaravel, FaStripe, FaPython, FaReact } from 'react-icons/fa';
import { SiTailwindcss, SiCplusplus, SiMysql, SiLivewire } from 'react-icons/si';
import { motion } from 'framer-motion';

const Technologies = () => {
  const icons = [
    { component: <FaLaravel className='text-7xl text-red-600' />, direction: 'top' },
    { component: <SiTailwindcss className='text-7xl text-cyan-400' />, direction: 'bottom' },
    { component: <FaStripe className='text-7xl text-blue-600' />, direction: 'top' },
    { component: <FaPython className='text-7xl text-yellow-400' />, direction: 'bottom' },
    { component: <SiCplusplus className='text-7xl text-blue-700' />, direction: 'top' },
    { component: <FaReact className='text-7xl text-blue-400' />, direction: 'bottom' },
    { component: <SiMysql className='text-7xl text-orange-600' />, direction: 'top' },
    { component: <SiLivewire className='text-7xl text-pink-500' />, direction: 'bottom' },
  ];

  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div id="technologies">
      <div className='max-w-[1200px] m-auto p-8'>
        <h1 className='text-6xl font-light text-t1 text-center pb-16'>Technologies</h1>
        <div ref={ref} className='flex flex-wrap items-center justify-center gap-4'>
          {icons.map((icon, index) => (
            <motion.div
              key={index}
              initial={{ y: icon.direction === 'top' ? -100 : 100, opacity: 0 }}
              animate={{ y: inView ? 0 : (icon.direction === 'top' ? -100 : 100), opacity: inView ? 1 : 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='rounded-2xl border-4 border-c2 p-4'
            >
              {icon.component}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
