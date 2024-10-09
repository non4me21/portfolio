import { useActiveTab } from '../../context/ActiveTabContext'
import { Overview } from '../Overview/Overview'
import { SideInfo } from '../SideInfo/SideInfo'
import styles from './MainView.module.scss'
import projectsContent from '../../content/projects.json'
import { lazy, Suspense } from 'react'
import ProjectsGridSkeleton from '../ProjectsGrid/ProjectsGridSkeleton'

const ProjectsGrid = lazy(() => import('../ProjectsGrid/ProjectsGrid'))


export const MainView = () => {

  const {activeTab} = useActiveTab()

  
  return (
    <div className={styles.MainView}>
      <div className={styles.SideInfo}>
        <SideInfo />
      </div>
      <div className={styles.MainContent}>
        {activeTab === 0 && <Overview />}
        {activeTab === 1 && 
          <Suspense fallback={<ProjectsGridSkeleton numberOfProjects={projectsContent?.ProjectsGrid?.projects?.length ?? 0}/>}>
            <ProjectsGrid projects={projectsContent.ProjectsGrid.projects ?? []}/>
          </Suspense>
        }
      </div>
    </div>
  )
}
