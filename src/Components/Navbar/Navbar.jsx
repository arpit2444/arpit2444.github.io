import React, { useState } from "react";
import "./Navbar.css";
import { Divider } from '@chakra-ui/react'
import { GiHamburgerMenu } from "react-icons/gi";
import { TfiDownload } from "react-icons/tfi";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const goTo=()=>{
    window.open("https://drive.google.com/file/d/1TWJsA_4rVVreZioBeK3YR7yI2-0m_8uu/view?usp=sharing")
   
  }
  return (
    <><div className="navSuperDiv">
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
         <a href="/" style={{color:"black"}}> <h2>
            <span>A</span>rpit
            <span>J</span>ain
          </h2></a>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
           <a href="/">Home</a> 
            </li>
            <li>
            <a href="#about">About Me</a> 
            </li>
            <li>
            <a href="#project">Project</a> 
            </li>
            <li>
            <a href="#skills">Skills</a> 
            </li>
            <li>
            <a href="#contact">contact</a> 
            </li>
            <li><a href="Arpit_Jain_Resume.pdf" download>
              <button onClick={goTo} style={{border:"none", paddingLeft:"20px",paddingRight:"20px",paddingTop:"8px",paddingBottom:"10px",fontSize:"20px",fontWeight:"bold",borderRadius:"8px"}}  >Resume <TfiDownload /></button>
              </a></li>
          </ul>
         
        </div>

      
        <div className="social-media">
       
          {/* hamburget menu start  */}
          <div className="hamburger-menu" >
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>


      </div>
    </>
  );
};

export  {Navbar};