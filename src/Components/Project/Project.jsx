import React from 'react'
import "./Project.css"
import { GoMarkGithub } from 'react-icons/go';
import { CgWebsite } from 'react-icons/cg';
import { Navigate } from 'react-router-dom';

export default function Project() {
  return (
    <div id='project' style={{width:"80%",margin:"auto",marginTop:"100px"}}>
        <h1 className='skills'>Project</h1>
        <div className='projectContainer'>



        <div  className='projectCard'>
              <a   target="_blank" href="https://friendly-sorbet-912886.netlify.app/">
            <div className='secpro'>
            <img className='projimg' src="myntra.png" alt="" /></div></a>

            <div className='projDescription'> <h1>Myntra Clone</h1>
            <h3>Myntra is a one stop shop for all your fashion and lifestyle needs. Being India's largest e-commerce store for fashion and lifestyle products.</h3>
<h2>Tech Stack:</h2><div className='prodescbtnbox1'>
<button  className='projdebtn'>MongoDB</button>
<button  className='projdebtn'>Express js</button>
<button  className='projdebtn'>Node js</button>
<button className='projdebtn'>REACT</button>
<button  className='projdebtn'>Redux</button>
<button className='projdebtn'>JAVASCRIPT</button>
<button  className='projdebtn'>HTML</button>
<button className='projdebtn'>CSS</button>
</div>
            
            <div className='skillbtnbox'>
          <a  target="_blank"   href="https://github.com/imukeshkaushal/Myntra-Clone"> <button className='skillbtn'>Github <GoMarkGithub/></button></a> 
          <a  target="_blank"  style={{marginTop:"20px"}} href="https://friendly-sorbet-912886.netlify.app/">  <button className='skillbtn'>Website <CgWebsite/></button></a>
            </div>
            </div></div>





           
        <div  className='projectCard'>
              <a   target="_blank" href="https://dapper-syrniki-45e656.netlify.app">
            <div className='secpro'>
            <img className='projimg' src="yooxScreen.png" alt="" /></div></a>

            <div className='projDescription'> <h1>Yoox Clone</h1>
            <h3>It is an e-commerce website that offers
clothing and accessories from the world’s
most prestigious designers.</h3>
<h2>Tech Stack:</h2><div className='prodescbtnbox1'>
<button  className='projdebtn'>HTML</button>
<button className='projdebtn'>CSS</button>
<button className='projdebtn'>JAVASCRIPT</button>
<button className='projdebtn'>REACT</button>
<button className='projdebtn'>CHAKRA UI</button></div>
            
            <div className='skillbtnbox'>
          <a  target="_blank"   href="https://github.com/arpit2444/august-jail-1204/tree/main/mainfolder"> <button className='skillbtn'>Github <GoMarkGithub/></button></a> 
          <a  target="_blank"  style={{marginTop:"20px"}} href="https://dapper-syrniki-45e656.netlify.app/">  <button className='skillbtn'>Website <CgWebsite/></button></a>
            </div>
            </div></div>






        <div  className='projectCard'>
              <a   target="_blank" href="https://soft-custard-9f29c0.netlify.app/">
            <div className='secpro'>
            <img className='projimg' src="nearbuy.png" alt="" /></div></a>

            <div className='projDescription'> <h1>Nearbuy Clone</h1>
            <h3>nearbuy.com is India's first hyper-local online platform that enables customers and local merchants to discover and engage with each other.</h3>
<h2>Tech Stack:</h2><div className='prodescbtnbox1'>
<button  className='projdebtn'>HTML</button>
<button className='projdebtn'>CSS</button>
<button className='projdebtn'>JAVASCRIPT</button>
<button className='projdebtn'>REACT</button>
<button className='projdebtn'>CHAKRA UI</button>
</div>
            
            <div className='skillbtnbox'>
          <a  target="_blank"   href="https://github.com/arpit2444/grieving-driving-625-NearBuy"> <button className='skillbtn'>Github <GoMarkGithub/></button></a> 
          <a  target="_blank"  style={{marginTop:"20px"}} href="https://soft-custard-9f29c0.netlify.app/">  <button className='skillbtn'>Website <CgWebsite/></button></a>
            </div>
            </div></div>



        




            <div  className='projectCard'>
              <a   target="_blank" href="https://dulcet-crisp-4de1b4.netlify.app/">
            <div className='secpro'>
            <img className='projimg' src="apple.png" alt="" /></div></a>

            <div className='projDescription'> <h1>
Apple TV Clone</h1>
            <h3>It is a streaming service from Apple. It features exclusive Apple Original shows and movies .</h3>
<h2>Tech Stack:</h2><div className='prodescbtnbox1'>
<button  className='projdebtn'>HTML</button>
<button className='projdebtn'>CSS</button>
<button className='projdebtn'>JAVASCRIPT</button>

</div>
            
            <div className='skillbtnbox'>
             <a   target="_blank" href="https://github.com/aaka8566/AppleTv"> <button className='skillbtn'>Github <GoMarkGithub/></button></a>
            <br />
            <a  target="_blank"  href="https://dulcet-crisp-4de1b4.netlify.app/"><button className='skillbtn'>Website <CgWebsite/></button></a>
            </div>
            </div></div>


           



        </div>
    </div>
  )
}
