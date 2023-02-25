import React from 'react';
import "./Footer.css";
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { CgMail } from 'react-icons/cg';
import { GoDeviceMobile } from 'react-icons/go';

export default function 
() {
  return (
   
        <div id='contact' className='footmaindiv' >
<div>
    <h2 > Contact <br /> me<span>.</span></h2> 
  
</div>
<div className='footinndiv'>
  <div className='footondiv'>
    <a  target="_blank" href="https://github.com/arpit2444"  style={{color:"white"}}><div  className='footinfootdiv'><BsGithub  className='footicons' /><span>Github</span>
    </div></a>
    <div className='footinfootdiv'><CgMail  className='footicons'/>
    <p  >arpitjain2444@gmail.com</p></div>
    </div><div className='footondiv'>
    <a  target="_blank" href="https://www.linkedin.com/in/arpit2444/" style={{color:"white"}}><div className='footinfootdiv'><BsLinkedin  className='footicons'/><span>Linkedin</span></div></a>
    
    <div className='footinfootdiv'><GoDeviceMobile className='footicons' />
    <p  >+918209615210</p></div></div>
</div>
    </div>
  )
}
