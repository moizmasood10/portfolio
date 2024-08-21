import React from 'react';
import { PROJECTS } from '../constants'; // Make sure PROJECTS is correctly defined in your constants

const ProjectsAlt = () => {
  return (
    <div id='projectsalt'>
        <div className='max-w-[1200px] m-auto p-8 border-b border-neutral-900 pb-4'>
        <h1 className='my-20 text-center text-6xl font-bold text-white'>Projects</h1>
        <div>
            {PROJECTS.map((project, index) => (
            <div key={index} className='mb-16 flex flex-wrap lg:justify-start'>
                <div className='w-full lg:w-1/4 flex justify-center'>
                    <img src={project.image} className="rounded-2xl" alt={project.title} />
                </div>
                <div className='w-full lg:w-3/4 lg:pl-16'>
                    <h6 className='text-xl font-semibold text-white'>{project.title}</h6>
                    <p className='text-t2'>{project.description}</p>
                    <div className='flex flex-wrap mt-2'>
                        {project.technologies.map((tech, index) => 
                        <span key={index} className='mr-2 mb-2 rounded bg-neutral-900 px-2 py-1 font-medium text-t1'>
                            {tech}
                        </span>)}
                    </div>
                </div>
            </div>
            ))}
        </div>
    </div>
    </div>
  );
}

export default ProjectsAlt;
