import React, { useEffect ,useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ISkills } from '../models/models'
import { deleteProject, fetchProject, postProject } from '../store/reducers/progectActions'
import { deleteSkill, fetchSkills, postSkill } from '../store/reducers/skillsActions'
import {useAppSelector,useAppDispatch} from './../store/reduxHooks'
const UpdatePage = () => {
    const projects = useAppSelector(state => state.project)
    const skills = useAppSelector(state => state.skills)
    const dispatch = useAppDispatch()
    console.log(projects)
    const [projectName,setProjectName] = useState('')
    const [projectUrl,setProjectUrl] = useState('')
    const [projectImage,setProjectImage] = useState('')
    const [skillsName,setSkillsName] = useState('')
    const [skillsImage,setSkillsImage] = useState('')
    useEffect(()=>{
        dispatch(fetchSkills())
        dispatch(fetchProject())
      },[])
    const projectNameHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setProjectName(e.currentTarget.value)
    }
    const projectUrlHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setProjectUrl(e.currentTarget.value)
    }
    const projectImageHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setProjectImage(e.currentTarget.value)
    }
    const skillsNameHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setSkillsName(e.currentTarget.value)
    }
    const skillsImageHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setSkillsImage(e.currentTarget.value)
    }

    const deleteSkillHandler = (id:string) =>{
        dispatch(deleteSkill(id))
    }
    const postSkillsHandler = () => {
        dispatch(postSkill({name:skillsName,image:skillsImage}))
        setSkillsName('')
        setSkillsImage('')
    }
    const deleteProjectHandler = (id:string) =>{
        dispatch(deleteProject(id))
    }
    const postProjectHandler = () => {
        dispatch(postProject({name:projectName,url:projectUrl,image:projectImage}))
        setProjectName('')
        setProjectUrl('')
        setProjectImage('')
    }
  return (
    <div className='containerUpdate'>
        <div className='home'><NavLink to='/'>Home</NavLink></div>
        <div className='updateProject'>
        <h3>Projects</h3>
        <div className='updateInput'>
                <ul>
                    <li><input value={projectName} onChange={projectNameHandler} type='text' placeholder='name' /></li>
                    <li><input value={projectUrl} onChange={projectUrlHandler} type='text' placeholder='Url' /></li>
                    <li><input value={projectImage} onChange={projectImageHandler} type='text' placeholder='Image' /></li>
                </ul>
                <button onClick={()=>postProjectHandler()}>Add</button>
            </div>
            <div className='updateProjectList'>
                    {projects.isLoading && <h4>Loading..</h4>}
                    {projects.project.length>0 && projects.project.map(el=>{
                        return <div className='updateList' key={el.id}>
                            <span>{el.id}</span>
                            <span>{el.name}</span>
                            <span><a href={el.url} target='_blank'>url</a></span>
                            <span><a href={el.image} target='_blank'>image</a></span>
                            <button onClick={()=>deleteProjectHandler(el.id)}>delete</button>
                            </div>
                    })}
                    {projects.error && <h4>Error</h4>}
            </div>
        </div>


        <div className='updateSkills'>
        <h3>Skills</h3>
        <div className='updateInput'>
                <ul>
                    <li><input value={skillsName} onChange={skillsNameHandler}  type='text' placeholder='name' /></li>
                    <li><input value={skillsImage} onChange={skillsImageHandler}  type='text' placeholder='color' /></li>
                </ul>
                <button onClick={()=>postSkillsHandler()}>Add</button>
            </div>
            <div className='updateSkillsList'>
            {skills.isLoading && <h4>Loading..</h4>}
                    {skills.skills.length>0 && skills.skills.map(el=>{
                        return <div className='updateList' key={el.id}>
                            <span>{el.id}</span>
                            <span>{el.name}</span>
                            <span>{el.image}</span>
                            <button onClick={()=>deleteSkillHandler(el.id)}>delete</button>
                            </div>
                    })}
                    {skills.error && <h4>Error</h4>}
            </div>
        </div>
    </div>
  )
}

export default UpdatePage