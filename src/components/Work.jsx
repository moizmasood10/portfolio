import React from 'react'
import WorkItem from './WorkItem'

const data = [
    {
        month: "September 2023 - November 2023",
        place: "Civil Aviation Authority",
        title: "Software Engineer Intern",
        desc: "Was actively engaged in the creation of a specialized software, designed to proficiently extract and catalog email data, storing it within a database infrastructure, and then harnessing the data to empower data analytics, all through an interactive and aesthetic user interface.",
    },
    {
        month: "September 2023 - November 2023",
        place: "PCSIR",
        title: "Software Engineer Intern",
        desc: "A hybrid summer internship. I worked on improving machine learning algorithms for better accuracy. I collaborated with a diverse team, participated in online meetings, and learned the iterative nature of research. This experience strengthened my technical skills and teamwork.",
    },
    {
      month: "September 2023 - November 2023",
      place: "ESRI",
      title: "Intern",
      desc: "A summer internship program, that provided me with valuable insights into software engineering methodologies and hands-on familiarity with Esri's GIS software, ArcGIS. This experience also fostered my growth in areas such as team collaboration, presentations, and the application of spatial analysis and GIS techniques in map-based problem solving.",
  },
]

const Work = () => {
  return (
    <div>
      <div id='work'>
        <div className='max-w-[1200px] m-auto md:pl-20 p-8 py-16'>
      <h1 className='text-5xl font-bold text-center text-t3 pb-16'>Work</h1>
      {data.map((item, idx) => (
        <WorkItem key={idx} 
        month={item.month} 
        place={item.place} 
        title={item.title} 
        desc={item.desc}
        />
      ))}
    </div>
    </div>
    </div>
    
  )
}

export default Work