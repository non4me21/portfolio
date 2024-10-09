import { Skeleton } from '@mui/material'
import styles from './ProjectsGrid.module.scss'
import { purple } from '@mui/material/colors'

const ProjectsGridSkeleton = ({numberOfProjects}: {numberOfProjects: number}) => {
  return (
    <div className={styles.ProjectsGrid}>
      {[...Array(numberOfProjects)].map((_, index) => (
        <Skeleton className={styles.ProjectCardSkeleton} variant='rounded' animation='wave' key={index} sx={{bgcolor: purple[400], opacity: 0.3}}/>
      ))}
    </div>
  )
}

export default ProjectsGridSkeleton
