import React from 'react'
import './nav.css'
import {useState} from "react"

import { FcEngineering, FcHome, FcGraduationCap, FcMultipleDevices, FcComboChart, FcVoicePresentation} from 'react-icons/fc'
// import { AiFillHome, AiFillSetting } from 'react-icons/ai'
// import { MdComputer } from 'react-icons/md'
// import { FaGraduationCap, FaUsers } from 'react-icons/fa'
// import { SiGraphql } from 'react-icons/si'

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#home")
  return (
    <nav>
        <a href="#Home" onClick={()=> setActiveNav("#home")} className={activeNav === "#home" ? "active": ""} >
          <div className="nav_icon">< FcHome /></div>
          {/* < AiFillHome /> */}
          <span>Home</span>
        </a>
        <a href="#Civil" onClick={()=> setActiveNav("#civil")} className={activeNav === "#civil" ? "active": ""} >
          <div className="nav_icon">< FcEngineering /></div>
          {/* < AiFillSetting/> */}
          <span>Civil Eng</span>
        </a>
        <a href="#Aicomp" onClick={()=> setActiveNav("#ai")} className={activeNav === "#ai" ? "active": ""} >
          <div className="nav_icon">< FcComboChart /></div>
          {/* < SiGraphql /> */}
          <span>AI & Data</span>
        </a>
        <a href="#Webdev" onClick={()=> setActiveNav("#web")} className={activeNav === "#web" ? "active": ""} >
          <div className="nav_icon">< FcMultipleDevices /></div>
          {/* < MdComputer /> */}
          <span>Web Dev</span>
        </a>
        <a href="#Education" onClick={()=> setActiveNav("#education")} className={activeNav === "#education" ? "active": ""} >
          <div className="nav_icon">< FcGraduationCap /></div>
          {/* < FaGraduationCap /> */}
          <span>Education</span>
        </a>
        <a href="#Other" onClick={()=> setActiveNav("#contact")} className={activeNav === "#contact" ? "active": ""} >
          <div className="nav_icon">< FcVoicePresentation /></div>
          {/* < FaUsers /> */}
          <span>Experience </span>
        </a>

    </nav>
  )
}

export default Nav