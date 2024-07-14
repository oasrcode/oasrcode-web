export interface PropProject {
  data: Project;
}
export interface Project {
  name: string;
  summ: string;
  icons: any[];
}
export interface Job {
  icon:any,
  date: string;
  charge: string;
  company: string;
  summ:string;
  hasProjects: boolean;
  Projects?: Project[];
}