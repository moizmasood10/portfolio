import React from 'react';
import ProjectItem from './ProjectItem';
import ees from '../assets/ees.jpg';
import flappy from '../assets/flappy.jpg';
import primero from '../assets/primero.png';
import anpr from '../assets/anpr.jpg';
import novacare from '../assets/novacare.png';
import isharay from '../assets/isharay.png';
import todo from '../assets/todo.png';






const Projects = () => {
  return (
    <div id='projects'> 
      <div className='max-w-[1200px] m-auto pb-8 p-8'>
        <h1 className='text-6xl font-light text-center text-t1 pb-12'>Projects</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <ProjectItem 
          img={novacare} 
          title='NovaCare' 
          lang='Laravel/Filament, JS, Tailwind, Stripe' 
          link='https://novacare.site' 
          target='_blank' 
          rel='noopener noreferrer' 
        />
        <ProjectItem 
          img={todo} 
          title='AI ToDo App' 
          lang='React, Gemini API' 
          link='https://todo.moizmasood.us' 
          target='_blank' 
          rel='noopener noreferrer' 
        />
        <ProjectItem 
          img={isharay} 
          title='isharay.pk' 
          lang='Laravel, JS, Tailwind, MySQL' 
          link='https://isharay.pk' 
          target='_blank' 
          rel='noopener noreferrer' 
        />
        <ProjectItem 
          img={primero} 
          title='Primero Avionics' 
          lang='HTML/CSS, JS, PHP, MySQL' 
          link='https://airline.novacare.site' 
          target='_blank' 
          rel='noopener noreferrer' 
        />
        <ProjectItem 
          img={ees} 
          title='Email Extraction System' 
          lang='Python, Microsoft Exchange' 
          link='https://github.com/moizmasood10/EmailExtractionSystem' 
          target='_blank' 
          rel='noopener noreferrer' 
        />
        <ProjectItem 
          img={flappy} 
          title='Flappy Bird' 
          lang='C#' 
          link='https://github.com/moizmasood10/FlappyBird' 
          target='_blank' 
          rel='noopener noreferrer' 
        />
        {/* <ProjectItem 
          img={anpr} 
          title='Automatic Number Plate Recognition System' 
          lang='Python, OpenCV, EasyOCR' 
          link='https://github.com/moizmasood10/' 
          target='_blank' 
          rel='noopener noreferrer' 
        /> */}

        </div>
    </div>
    </div>
  )
}

export default Projects