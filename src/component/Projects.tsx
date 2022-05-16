import React, { FC, useEffect } from 'react'
import s from './Projects.module.css'
import { fetchProject } from '../store/reducers/progectActions'
import { useAppDispatch, useAppSelector } from '../store/reduxHooks'

const Projects:FC = () => {
    const state = useAppSelector(state => state.project)
    const dispatch = useAppDispatch()
    useEffect(()=>{
        dispatch(fetchProject())
    },[])
  return (
    <div className={s.projects}>
        {state.isLoading && <h3>loading...</h3>}
        {state.project.length > 0 && state.project.map(el=>{
            return <a href={el.url} target='_blank' key={el.id} className={s.projectItem}>
                <div className={s.projectImage}>
                    <img src={el.image}/>
                </div>
                <div className={s.projectName}>
                    {el.name}
                </div>
            </a>
        })}
        {state.error && <h3>error</h3>}
    </div>
  )
}

export default Projects