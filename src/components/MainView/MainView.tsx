import { useActiveTab } from '../../context/ActiveTabContext'
import { Overview } from '../Overview/Overview'
import { ProjectsGrid } from '../ProjectsGrid/ProjectsGrid'
import { SideInfo } from '../SideInfo/SideInfo'
import styles from './MainView.module.scss'
import projectsContent from '../../content/projects.json'
import vite from '../../../public/vite.svg'

export const MainView = () => {

  const {activeTab} = useActiveTab()

  
  return (
    <div className={styles.MainView}>
      <div className={styles.SideInfo}>
        <SideInfo />
      </div>
      <div className={styles.MainContent}>
        {activeTab === 0 && <Overview />}
        {activeTab === 1 && <ProjectsGrid projects={projectsContent.ProjectsGrid.projects ?? []}/>}
      </div>
      <img src={vite} />
    </div>
  )
}
