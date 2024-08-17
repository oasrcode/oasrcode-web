export interface PropProject {
  data: Project;
}
export interface Project {
  name: string;
  summ: string;
  icons: any[];
  image?: string;
  url?: string;
}
export interface Job {
  icon: any;
  date: string;
  charge: string;
  company: string;
  summ: string;
  hasProjects: boolean;
  Projects?: Project[];
}
