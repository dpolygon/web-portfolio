import React from 'react'

import { IoLogOutOutline } from "react-icons/io5";
import { RiStarSmileFill } from "react-icons/ri";
import { BsFillCloudRainFill } from "react-icons/bs";


import './projects.css'

export default function Projects() {
  return (
    <div style={{backgroundImage: 'url("/projectsbg.jpg")'}} className='projects'>
      <div style={{padding: '3%'}}>
        <h1 style={{fontSize: '3rem'}}>Professional Work</h1>
        <div className='professional-work'>
        <ProjectCell 
          text='Rising Stars Website'
          icon={RiStarSmileFill}
          desc="I created a website for Rising Stars, focusing on a user-friendly design and streamlined enrollment processes. The frontend was developed using React JS, HTML, JavaScript, and CSS, ensuring a visually appealing and functional site.
                For the backend, I utilized Flask and Python, integrating various APIs to enhance functionality. This included pulling in map data and reviews from Yelp, as well as creating custom APIs to handle mail using SMTP and SSL for secure communication.
                To host the site, I utilized Google Cloud Platform, specifically using Cloud Run, Cloud Functions, and Cloud Tasks. These tools helped optimize site performance and improve the enrollment process, ultimately benefiting Rising Stars' business."
          buttons={[
            { title: "FRONTEND", weblink: 'https://github.com/dpolygon/risingstars'},
            { title: "BACKEND",  weblink: 'https://github.com/dpolygon/risingstar-backend'},
            { icon: IoLogOutOutline, weblink: 'https://risingstarsaustin.com'}
          ]}
          projgif='/websitegifs/risingstars.gif'
        />
      </div>

      <h1 style={{marginTop: '5rem', fontSize: '3rem'}}>Personal Projects</h1>
        <div className='personal-projects'>
          <ProjectCell
            text='Poké-weather'
            icon={BsFillCloudRainFill}
            desc=''
            buttons={[
              {title: 'Repo', weblink: 'https://github.com/dpolygon/poke-weather'}
            ]}
          />
        </div>
      </div>
    </div>
  )
}

const ProjectCell = (props) => {
  return (
    <div
      style={{
        background: 'black',
        borderRadius: '20px',
      }}
    >
      <div style={{padding: '5%'}}>
        <div className='proj-cell-content'>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
              <h1>{props.text}</h1>
              {props.icon && <props.icon style={{scale: '2', paddingLeft: '10px'}}/>}
            </div>
            <p className='projects-desc'>{props.desc}</p>
            <div style={{display: 'flex', flexDirection: 'row'}}>
              {Array.isArray(props.buttons) && props.buttons.map((button, index) => (
                <ProjButton key={index} {...button} />
                ))}
            </div>
          </div>
          {props.projgif && <img src={props.projgif} className='proj-gif'></img>}
        </div>
      </div>
    </div>
  )
}

const ProjButton = (props) => {
  return (
    <div 
      className='project-buttons'
      onClick={() => { window.open(props.weblink)}}
    >
      <p style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '10px'}}>
        {props.icon && <props.icon style={{scale: '1.5'}}/>}
        {props.title ? props.title : null}
      </p>
    </div>
  )
}