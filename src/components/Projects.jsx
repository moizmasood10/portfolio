import React from 'react';
import ProjectItem from './ProjectItem';
import ees from '../assets/ees.jpg';
import flappy from '../assets/flappy.jpg';
import primero from '../assets/primero.jpg';
import anpr from '../assets/anpr.jpg';



const Projects = () => {
  return (
    <div id='projects'> 
      <div className='max-w-[1200px] m-auto md:pl-20 p-8 py-16'>
        <h1 className='text-6xl font-bold text-center text-t1 pb-32'>Projects</h1>
        <div className='grid sm:grid-cols-2 gap-24'>
            <ProjectItem img={ees} title='Email Extraction System' lang='Python'/>
            <ProjectItem img={primero} title='Airline Reservation System' lang='HTML/CSS, JS, PHP, MySQL'/>
            <ProjectItem img={flappy} title='Flappy Bird' lang='C#'/>
            <ProjectItem img={anpr} title='Automatic Number Plate Recognition System' lang='Python'/>
        </div>
    </div>
    </div>
  )
}

export default Projects