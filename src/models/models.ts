export interface IProject {
    name:string
    url:string
    image:string
    id:string
}
export interface IState {
    isLoading:boolean,
    error:string,
    project:IProject[]
}
export interface ISkills {
    name:string
    image:string
    id:string
}
export interface IStateSkills {
    isLoading:boolean,
    error:string,
    skills:ISkills[]
}
export interface IPostSkills {
    name:string
    image:string
}
export interface IPostProject {
    name:string
    url:string
    image:string
    
}
