import React, { useEffect, useRef, useState } from 'react'
import s from './AboutMe.module.css'
import { fetchSkills } from '../store/reducers/skillsActions'
import { useAppDispatch, useAppSelector } from '../store/reduxHooks'
import Skills from './Skills'
import ModalAboutMe from './ModalAboutMe'
import Projects from './Projects'
const logo = require('./../assets/RUD07192.JPG')
const telegram = require('./../assets/telegram.png');
const gmail = require('./../assets/gmail.png')
const git = require('./../assets/git.png')

function AboutMe() {
    const skills = useAppSelector(state => state.skills)
    const dispatch = useAppDispatch()
    
    
  
    useEffect(()=>{
        dispatch(fetchSkills())
    },[])
  return (

      <div>

           <div className={s.aboutMe}>
           <div className={s.aboutMeName}>
                <div>Roman_Ahramenya</div>
                
                <div className={s.contacts}>
                <a href='https://t.me/Roman_Ahramenya' target='_blank'>
                    <img src={telegram} />
                </a>
                
                    <img src={gmail} onClick={()=>window.open('mailto:romanahramynya@gmail.com')} />
                
                <a href='https://github.com/RomanAhramenya' target='_blank'>
                    <img src={git}  />
                </a>
                </div>
                </div>
                <ModalAboutMe/>
       <Skills skills={skills}/>
        <div className={s.aboutMe_logo}>
            <img src={logo}/>
        </div>
           
            
    </div>
    <Projects/>
      </div>
   
  )
}

export default AboutMe