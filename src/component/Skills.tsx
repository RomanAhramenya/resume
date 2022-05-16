import React, { FC,  useRef, useState } from 'react'
import s from './Skills.module.css'
import {IStateSkills} from './../models/models'
import { useOutSideClick } from './hooks/useOutSideClick'
interface IProps{
    skills:IStateSkills
}
const Skills:FC<IProps> = ({skills}) => {
    const [skillsWindow,setSkillsWindow] = useState(false)
    const tooltipRef = useRef<null | HTMLParagraphElement>(null)
    const handlerClick = () => {
        setSkillsWindow(false)
    }
   useOutSideClick(tooltipRef,handlerClick,skillsWindow)
  return (
    <div ref={tooltipRef}  className={skillsWindow ? s.aboutSkilsOpen : s.aboutSkills}>
    <h3>Skills</h3>
    {skills.isLoading && <h3>loading...</h3>}

    {skills.skills.length > 0 && skills.skills.map((el,index)=>{
        
    if(!skillsWindow && index<3) {
      return  <div key={el.id} className={s.aboutSkills_item}>
            {el.name}
        </div>       
    } 
    if(skillsWindow) {
        return  <div key={el.id} className={s.aboutSkills_item}>
              {el.name}
          </div>       
      } 
        
    })}
    <div onClick={()=>setSkillsWindow(!skillsWindow)} className={s.show}>{skillsWindow ? <span>close &#9650;</span> : <span>show more &#9660;</span>}</div>
</div>
  )
}

export default Skills