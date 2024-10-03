import styles from './SideInfo.module.scss'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import DiamondIcon from '@mui/icons-material/Diamond';
import classNames from 'classnames';
import { useActiveTab } from '../../context/ActiveTabContext';

export const SideInfo = () => {

  const {activeTab, changeTab} = useActiveTab()

  return (
    <div className={styles.SideInfo}>
      <div className={styles.PhotoWrapper}>
        <img src="src/assets/main_photo.png" alt='My photo'/>
        <div className={styles.Name}>Kacper Walęga</div>
      </div>
      <div className={styles.MainInfo}>
        <div className={styles.Mail}>
          <a href="mailto:kacper.walega21@gmail.com">
            <MailIcon fontSize='small'/>
            kacper.walega21@gmail.com
          </a>
        </div>
        <div className={styles.Phone}>
          <a href='tel:+48512012757'>
            <CallIcon fontSize='small'/>
            +48 512 012 757
          </a>
        </div>
      </div>
      <div className={styles.Links}>
        <div className={styles.GitHub}>
          <a href="https://github.com/non4me21" target='_top'>
            <GitHubIcon fontSize='small'/>
            Github
          </a>
        </div>
        <div className={styles.LinkedIn}>
          <a href="https://www.linkedin.com" target="_blank">
            <LinkedInIcon fontSize='small'/>
            LinkedIn
          </a>
        </div>
      </div>
      <div className={styles.Tabs}>
        <div 
          className={classNames(styles.Tab, activeTab === 0 && styles.Active)}
          onClick={() => changeTab(0)}
        >
          {activeTab === 0 && <DiamondIcon fontSize='small' />}
          Overview
        </div>
        <div 
          className={classNames(styles.Tab, activeTab === 1 && styles.Active)}
          onClick={() => changeTab(1)}
        >
          {activeTab === 1 && <DiamondIcon fontSize='small' />}
          Projects
        </div>
      </div>
    </div>
  )
}
