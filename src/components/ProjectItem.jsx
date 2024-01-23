import React from 'react'

const ProjectItem = ({img, title, lang}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-neon rounded-xl group hover:bg-gradient-to-b from-c4 to-c1'>
        <img src={img} alt={title} className='rounded-xl group-hover:opacity-10'/>
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h3 className='text-md font-bold text-white text-center tracking-wider'>
                {title}
            </h3>
            <p className='pb-4 pt-2 text-white text-center'>{lang}</p>
            <a href='/'>
                <p className='text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg'>More Info</p>
            </a>
        </div>
    </div>
  )
}

export default ProjectItem