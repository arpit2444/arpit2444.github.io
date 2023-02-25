import React from 'react'
import "./Hero.css"
export default function Hero() {
  const goTo=()=>{
    window.open("https://drive.google.com/file/d/1TWJsA_4rVVreZioBeK3YR7yI2-0m_8uu/view?usp=sharing")
   
  }
  
  return (
    <div id='about' className='heroMain'>
        <div className='heroSecond'>
        <img src="pic.png" alt="" className='pic'/>
           
               <div className='heroGrid'>
              <div></div>
               <div></div>
               <div></div>
               <div></div>
               </div>
         
        </div>
        <div className='heroRightMain'>
      <div  className='heroinnDiv'>
        <h1 >  Hi</h1>
      <img className='heroHand' src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/waving-hand_1f44b.png" alt="" />
      <h1>,</h1>
      </div><br className='herobreak1' />
    
        <h1 className='iam'> I'am <span style={{color:"#4070F4"}}> Arpit</span></h1>
<br /><p className='heroLove'> I love designing and building websites.</p> <br />

<p className='heroMern'>  MERN stack developer and passionate about developing creative & user-friendly websites.</p>
<a href="Arpit_Jain_Resume.pdf" download onClick={goTo}><button className='heroBtn'>Resume</button></a>
        </div>
        
    </div>
  )
}
