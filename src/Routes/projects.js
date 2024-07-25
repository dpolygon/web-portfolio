import React from 'react'

import { GiCardPick } from "react-icons/gi";
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
            desc="I created a website for a Daycare Center located in south Austin. I focused on creating a user-friendly design and a streamlined enrollment process. The frontend was developed using React JS, HTML, JavaScript, and CSS. This ensured a visually appealing and functional site.
                  For the backend, I utilized Flask and Python, integrating various APIs to enhance functionality. This included pulling in map data and reviews from Yelp, as well as creating custom APIs to securely handle mail using SMTP and SSL.
                  To host the site, I used Google Cloud Platform. I specifically utilized Cloud Run, Cloud Functions, and Cloud Tasks. These tools helped optimize site performance and improve the enrollment process, ultimately benefiting Rising Stars' business."
            buttons={[
              { title: "Frontend", weblink: 'https://github.com/dpolygon/risingstars'},
              { title: "Backend",  weblink: 'https://github.com/dpolygon/risingstar-backend'},
              { title: "Website", weblink: 'https://risingstarsaustin.com'}
            ]}
            projgif='websitegifs/risingstars.gif'
          />
        </div>

        <h1 style={{marginTop: '5rem', fontSize: '3rem'}}>Current Projects</h1>
        <div className='personal-projects'>
          <ProjectCell
            text='Memorize'
            icon={GiCardPick}
            desc='A Swift and SwiftUI implementation of the card memorization game, "Concentration". The current version has working themes, a score counter and simple animations. Keep up to date with my current projects through my github!'
            buttons={[
              {title: "Repo", weblink: 'https://github.com/dpolygon/Memorize'}
            ]}
            projgif='websitegifs/memorize.gif'
          />
        </div>

        <h1 style={{marginTop: '5rem', fontSize: '3rem'}}>Personal Projects</h1>
        <div className='personal-projects'>
        <ProjectCell
            text='Cli-Me'
            icon={LuMessageSquareDashed}
            desc="Cli-Me is a command-line interface messenger that excels in facilitating real-time communication. Through its adept use of socket programming, Cli-Me establishes a robust network connection, enabling seamless message exchange. The application leverages threading, to efficiently manage keyboard input, which ensures uninterrupted user interaction. This threading capability allows Cli-Me to handle large loads of traffic, making it suitable for the busiest chat rooms. Meticulous message encoding and decoding mechanisms guarantee the delivery of messages with clarity and accuracy across various platforms. With effective session management, users can personalize their experience by choosing customized usernames, to enhance recognition amongst friends. Cli-Me maintains operational integrity with its error handling capabilities. This helps it navigate complex communications scenarios with grace and reliability. Some examples can include duplicate credentials, packet loss and unexpected disconnections."
            buttons={[
              {title: 'Repo', weblink: 'https://github.com/dpolygon/climessaging'}
            ]}
            projgif='websitegifs/Cli-Me.gif'
          />
          <ProjectCell
            text='Poké-weather'
            icon={BsFillCloudRainFill}
            desc="In its current state the app combines weather data retrieval with video display features. It uses the OpenWeatherMap API to fetch weather information based on the users' location. Poké-weather displays the current weather conditions in the users city. With OpenCV the video display feature shows a Pokemon that has the special power to transform its appearance to match surrounding weather conditions."
            buttons={[
              {title: 'Repo', weblink: 'https://github.com/dpolygon/poke-weather'}
            ]}
            projgif='websitegifs/pokeweather.gif'
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