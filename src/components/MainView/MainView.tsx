import { Overview } from '../Overview/Overview'
import { SideInfo } from '../SideInfo/SideInfo'
import styles from './MainView.module.scss'

export const MainView = () => {
  return (
    <div className={styles.MainView}>
      <div className={styles.SideInfo}>
        <SideInfo />
      </div>
      <div className={styles.MainContent}>
        <Overview />
      </div>
    </div>
  )
}
