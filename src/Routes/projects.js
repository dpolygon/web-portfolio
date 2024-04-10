import React from 'react'

import { IoLogOutOutline } from "react-icons/io5";
import { RiStarSmileFill } from "react-icons/ri";
import { BsFillCloudRainFill } from "react-icons/bs";
import { LuMessageSquareDashed } from "react-icons/lu";


import './projects.css'

export default function Projects() {
  return (
    <div style={{backgroundImage: 'url("projectsbg.jpg")'}} className='projects'>
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
          projgif='websitegifs/risingstars.gif'
        />
      </div>

      <h1 style={{marginTop: '5rem', fontSize: '3rem'}}>Personal Projects</h1>
        <div className='personal-projects'>
          <ProjectCell
            text='Poké-weather'
            icon={BsFillCloudRainFill}
            desc="In its current state the app combines weather data retrieval with video display features. It uses the OpenWeatherMap API to fetch weather information based on the user's location, displaying the current weather condition in their city. Additionally, the app includes a video display feature, where it plays a video using OpenCV, showing a Pokemon that has the special power to transform his appearance to that of its surrounding weather."
            buttons={[
              {title: 'Repo', weblink: 'https://github.com/dpolygon/poke-weather'}
            ]}
            projgif='websitegifs/pokeweather.gif'
          />
          <ProjectCell
            text='Cli-Me'
            icon={LuMessageSquareDashed}
            desc="Cli Me is a command-line interface messenger that excels in facilitating real-time communication. Through its adept use of socket programming, Cli Me establishes a robust network connection, enabling seamless message exchange. Leveraging threading, the application efficiently manages keyboard input and timeouts, ensuring uninterrupted user interaction. This threading capability allows Cli Me to handle large loads of traffic, making it suitable for the busiest chat rooms where fun chatting is in full swing. Meticulous message encoding and decoding mechanisms guarantee the delivery of messages with clarity and accuracy across various platforms. With effective session management, users can personalize their experience by choosing their own usernames, enhancing recognition among friends. Cli Me navigates complex communication scenarios with sophistication and reliability, supported by its meticulous error handling capabilities that ensure graceful management of unforeseen circumstances, thereby maintaining operational integrity."
            buttons={[
              {title: 'Repo', weblink: 'https://github.com/dpolygon/climessaging'}
            ]}
            projgif='websitegifs/Cli-Me.gif'
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
        marginBottom: '40px'
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