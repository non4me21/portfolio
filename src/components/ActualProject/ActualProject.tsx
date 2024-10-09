import LoadingImage from '../LoadingImage/LoadingImage'
import styles from './ActualProject.module.scss'

export const ActualProject = ({ projectTitle, imageSrc, description, href}: { projectTitle: string, imageSrc: string, description: string, href: string}) => {
  return (
    <a className={styles.ActualProject} href={href}>
      <div className={styles.WorkingOn}>Working on</div>
      <div className={styles.ProjectPhoto}>
        <LoadingImage imageSrc={imageSrc} alt="Project's photo" skeletonHeight='200px'/>
      </div>
      <h1>{projectTitle}</h1>
      <div>{description}</div>
    </a>
  )
}
