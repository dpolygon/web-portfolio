import React from 'react'

import './home.css'

export default function Home() {
  return (
    <div style={{backgroundImage: "url('/homebg.gif')"}} className='Home'>
      <div style={{padding: '3%'}}>
        <div className='home-intro'>
          <div>
            <div className='my-name'>Daniel<br></br>Gonzalez</div>
            <div className='my-description'>💻 Computer Science Graduate from the University of Texas at Austin 🐄🤘</div>
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

        <div style={{position: 'fixed', bottom: '3%', right: '2%'}}>
            <a href="mailto:gonzalezdannyut22@utexas.edu">
                <img src="websiteIcons/emaillogo.png" alt="email logo" className='outside-links'/>
            </a>
            <a href="https://www.github.com/dpolygon">
                <img src="websiteIcons/githublogo.png" alt="github logo" className='outside-links'/>
            </a>
            <a href="https://www.instagram.com/texas_techbro">
                <img src="websiteIcons/instalogo.png" alt="instagram logo" className='outside-links'/>
            </a>
            <a href="www.linkedin.com/in/danielgonzalezswen">
                <img src="websiteIcons/linkedlnlogo.png" alt="linkedIn logo" className='outside-links'/>
            </a>
            <a href="https://twitter.com/l0nestardev">
                <img src="websiteIcons/twitlogo.png" alt="twitter logo" className='outside-links'/>
            </a>
            <a href="https://youtube.com/channel/UCx-3SsVE_fVC7WBaTV933pQ">
                <img src="websiteIcons/youtubelogo.png" alt="youtube logo" className='outside-links'/>
            </a>
        </div>

      </div>
    </div>
  )
}
