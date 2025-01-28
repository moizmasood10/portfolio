import React from 'react';
import ProjectItem from './ProjectItem';
import ees from '../assets/ees.jpg';
import flappy from '../assets/flappy.jpg';
import primero from '../assets/primero.png';
import anpr from '../assets/anpr.jpg';
import novacare from '../assets/novacare.png';
import isharay from '../assets/isharay.png';
import todo from '../assets/todo.png';
import psl from '../assets/psl.png'
import mijncontract from '../assets/mijncontract.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow} from 'swiper/modules';
import 'swiper/css/bundle';

const Projects = () => {
  return (
    <div id='projects'> 
      <div className='max-w-[1200px] m-auto pb-8 p-8'>
      <h1 className="pb-12 text-6xl font-light text-center text-t1">Projects</h1>
        <Swiper 
          className="mySwiper"
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'1'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }} /* Autoplay added */
          breakpoints={{
            // When the window is <= 640px (small devices)
            640: {
              slidesPerView: 2,
              navigation: true, // Enable navigation for small screens
            },
            // Default behavior for other screens
            768: {
              slidesPerView: 2, // Medium devices
              navigation: false
            },
          }}          
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          >
            <SwiperSlide>
              <ProjectItem 
                img={novacare} 
                title='NovaCare' 
                lang='Laravel/Filament, Stripe, Tailwind' 
                link='https://novacare.site' 
                target='_blank' 
                rel='noopener noreferrer' 
              />
            </SwiperSlide>

            <SwiperSlide>
              <ProjectItem 
                img={psl} 
                title='PSL 2.0' 
                lang='Laravel/Filament, Next.js, Tailwind' 
                link='https://new.psl.ork.pk' 
                target='_blank' 
                rel='noopener noreferrer' 
              />
            </SwiperSlide>

            <SwiperSlide>
              <ProjectItem 
                img={mijncontract} 
                title='mijncontract' 
                lang='Laravel/Filament, OpenAI, Tailwind' 
                link='https://mijncontract.cloud' 
                target='_blank' 
                rel='noopener noreferrer' 
              />
            </SwiperSlide>

            <SwiperSlide>
              <ProjectItem 
                img={todo} 
                title='AI ToDo App' 
                lang='React, Gemini API' 
                link='https://todo.moizmasood.us' 
                target='_blank' 
                rel='noopener noreferrer' 
              />
            </SwiperSlide>

            <SwiperSlide>
              <ProjectItem 
                img={isharay} 
                title='isharay.pk' 
                lang='Laravel, JS, Tailwind, MySQL' 
                link='https://isharay.pk' 
                target='_blank' 
                rel='noopener noreferrer' 
              />
            </SwiperSlide>

            <SwiperSlide>
              <ProjectItem 
                img={primero} 
                title='Primero Avionics' 
                lang='HTML/CSS, JS, PHP, MySQL' 
                link='https://airline.novacare.site' 
                target='_blank' 
                rel='noopener noreferrer' 
              />
            </SwiperSlide>

            <SwiperSlide>
              <ProjectItem 
                img={ees} 
                title='Email Extraction System' 
                lang='Python, Microsoft Exchange' 
                link='https://github.com/moizmasood10/EmailExtractionSystem' 
                target='_blank' 
                rel='noopener noreferrer' 
              />
            </SwiperSlide>

            <SwiperSlide>
              <ProjectItem 
                img={flappy} 
                title='Flappy Bird' 
                lang='C#' 
                link='https://github.com/moizmasood10/FlappyBird' 
                target='_blank' 
                rel='noopener noreferrer' 
              />
            </SwiperSlide>
        </Swiper>

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
  )
}

export default Projects