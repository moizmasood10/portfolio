import React from 'react'

const ProjectItem = ({img, title, lang, link}) => {
  return (
    <div className='relative flex items-center justify-center aspect-[4/3] h-auto w-full border-2 border-opacity-15 border-white shadow-md shadow-c4 rounded-xl group hover:bg-black'>
    <img src={img} alt={title} className='rounded-xl group-hover:opacity-5 object-cover h-full'/>
    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-lg font-bold font-mono text-white text-center'>
            {title}
        </h3>
        <p className='p-4 text-white font-thin text-center'>{lang}</p>
        <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className='text-center rounded-3xl text-white bg-transparent border-2 border-c1 cursor-pointer text-lg flex items-center justify-center h-10 transition-transform duration-700 ease-linear hover:bg-c1'
        >
            More Info
        </a>
    </div>
</div>

  )
}

export default ProjectItem