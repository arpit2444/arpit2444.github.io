import React from 'react'
import GitHubCalendar from 'react-github-calendar';
import './Calender.css'

export default function Calender() {
  return (
    <div id='calender' className='calen'>
      <h1 className='calenHead'>Github Calender</h1>
    <div className='calenDiv' >
        <GitHubCalendar  blockMargin={6} blockSize={18} fontSize={20} color={'#0044FF'} username="arpit2444" style={{ boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',marginBottom:"100px",padding:"50px",borderRadius:"10px"}} />
        

    </div></div>
  )
}
