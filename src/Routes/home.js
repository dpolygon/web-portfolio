import React from 'react'
import Socials from '../Components/Socials'
import './home.css'

export default function Home() {
  return (
    <div style={{backgroundImage: "url('homebg.jpg')"}} className='Home'>
      <div style={{padding: '3%'}}>
        <div className='home-intro'>
          <div>
            <div className='my-name'>Daniel<br></br>Gonzalez</div>
            <div className='my-description'>💻 Computer Science Graduate from the University of Texas at Austin 🐄🤘</div>
            <Socials/>
          </div>
          <img src='/2023pic.jpg' style={{height: '300px', width: '300px', borderRadius: '50%'}} className='my-picture'></img>
        </div>

        <div style={{marginTop: '60px', padding: '20px'}}>
          <h1 className='home-section-title'>About Me</h1>
          <p className='home-section-desc'>Born and raised Austin, Texas native. Proud Mexican American. UTCS Graduate with 4 years of coding experience. Highly committed to knowledge acquisition, growth, and quality contribution. Actively seeking full time positions and internships to further develop and mature my skills. Interested in gaining real-world experience.</p>
          
          <h1 className='home-section-title'>What Im Listening To</h1>
          <iframe allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" style={{width: '100%', maxWidth: '880px', height: '450px', overflow: 'hidden', borderRadius: '10px', border: 'none'}} sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/album/heaven-knows/1710637196"></iframe>

          <h1 className='home-section-title'>My Interests</h1>
          <p className='home-section-desc'>I find immense joy in the pursuit of knowledge. There's an incredible satisfaction in expanding my understanding and contributing to the vast tapestry of human wisdom. Reflecting on the countless minds that have come before us, each adding their piece to the puzzle of progress, fills me with awe. It's an honor to be part of this continuum, where every addition, every insight, propels humanity forward, laying the foundation for generations to come.</p>
          <p className='home-section-desc'>Outside of learning, I'm into video games, music, different art forms like painting, D&D, tech, lifting weights, and running. They all bring different kinds of joy and help me stay balanced alongside my studies.</p>
          <p className='home-section-desc'>I love music. I find excitment and inspiration in genres spanning electronic beats, the soulful rhythms of jazz, the vibrant sounds of K/J-pop, the smooth vibes of R&B, and many more. Music is a constant companion that fuels me.</p>

          <h1 className='home-section-title'>Contact Me @</h1>
          <div className='home-section-desc contact'>
            <p style={{marginRight: '20px'}} >Email: <a href="mailto:gonzalezdannyut22@utexas.edu" style={{color: 'white'}}>dannyg@lonestardev.net</a></p>
            <p>Mobile: <a>+1 (512) 917-5055</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}
