import styles from './ProjectsGrid.module.scss';
import { Project } from '../../interfaces/Project'
import { ProjectCard } from '../ProjectCard/ProjectCard';

export const ProjectsGrid = ({ projects }: { projects: Project[] }) => {
  return (
    <div className={styles.ProjectsGrid}>
      {projects.map((project) => <ProjectCard label={project.label} imageSrc={project.imageSrc} description={project.description} techStack={project.techStack} href={project.href} github={project.github}/>)}
    </div>
  )
}
