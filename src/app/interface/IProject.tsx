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
  title: string;
  subtitle: string;
  summ: string;
  hasProjects: boolean;
  Projects?: Project[];
}
