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
            <ProjectItem img={ees} title='Email Extraction System' lang='Python' link='https://github.com/moizmasood10/EmailExtractionSystem'/>
            <ProjectItem img={primero} title='Airline Reservation System' lang='HTML/CSS, JS, PHP, MySQL' link='https://github.com/moizmasood10/Airline-Management-System'/>
            <ProjectItem img={flappy} title='Flappy Bird' lang='C#' link='https://github.com/moizmasood10/FlappyBird'/>
            <ProjectItem img={anpr} title='Automatic Number Plate Recognition System' lang='Python' link='https://github.com/moizmasood10/'/>
        </div>
    </div>
    </div>
  )
}

export default Projects