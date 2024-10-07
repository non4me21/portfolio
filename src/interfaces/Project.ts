import { TechStackSection } from "./TechStack";

export interface Project {
  label: string;
  imageSrc: string;
  description: string;
  techStack: TechStackSection[]
  href?: string;
  github?: string;
}
