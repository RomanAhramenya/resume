import React, { FC, useRef, useState } from 'react'
import s from './AboutMe.module.css'
import { useOutSideClick } from './hooks/useOutSideClick'

const ModalAboutMe:FC = () => {
    const [modal,setModal] = useState(false)
    const tooltipRef = useRef<null | HTMLParagraphElement>(null)
    const handlerClick = () => {
        setModal(false)
    }
    useOutSideClick(tooltipRef,handlerClick,modal)
    const buttonHandler = () =>{
        setModal(!modal)
        console.log(modal)
    }

  return (
        <div ref={tooltipRef} className={s.modal}>
            <button  onClick={()=>buttonHandler()}>About Me</button>
            {modal && <div  className={s.modalOpen}>
                <div>Location : Misnk, Belarus</div>
                <div>Phone: +375(25) 952-73-88 </div>
                <div>E-mail: romanahramenya@gmail.com </div>
                
            A quick learner who can absorb new 
knowledges and communicate clearly and 
effectively with people from all cultural and 
professional background.
The desire to constantly develop and to 
succeed in a new profession.
                </div>}
        </div>
  )
}

export default ModalAboutMe