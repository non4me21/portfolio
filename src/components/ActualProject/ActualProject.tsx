import styles from './ActualProject.module.scss'

export const ActualProject = ({ projectTitle, imageSrc, description, href}: { projectTitle: string, imageSrc: string, description: string, href: string}) => {
  return (
    <a className={styles.ActualProject} href={href}>
      <div>Working on</div>
      <img src={imageSrc}/>
      <h1>{projectTitle}</h1>
      <div>{description}</div>
    </a>
  )
}
