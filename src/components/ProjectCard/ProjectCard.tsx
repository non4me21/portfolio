import { Project } from '../../interfaces/Project'
import { TechStackList } from '../TechStackList/TechStackList'
import styles from './ProjectCard.module.scss'

export const ProjectCard = (project: Project) => {

  console.log(project)
  return (
    <a className={styles.ProjectCard} href={project.href}>
      <div className={styles.ProjectMainInfo}>
        <img className={styles.ProjectImage} src={project.imageSrc} alt="Project Photo" />
        <div className={styles.ProjectText}>
          <h1>{project.label}</h1>
          <div className={styles.ProjectDescription}>{project.description}</div>
        </div>
      </div>
      <div className={styles.ProjectLinksSection}>
        <div>Project Links</div>
        <div className={styles.ProjectLinks}>
        {project.href && <a href={project.href} target='_blank'>Live</a>}
        {project.github && <a href={project.github} target='_blank'>GitHub</a>}
        </div>
      </div>
      <div className={styles.ProjectTechStackList}>
        <h2>Project's core technology stack</h2>
        <TechStackList techStackList={project.techStack} />
      </div>
    </a>
  )
}
