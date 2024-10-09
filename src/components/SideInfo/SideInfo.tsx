import styles from './SideInfo.module.scss'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import DiamondIcon from '@mui/icons-material/Diamond';
import classNames from 'classnames';
import { useActiveTab } from '../../context/ActiveTabContext';
import { Divider} from '@mui/material';
import FileDownloadSharpIcon from '@mui/icons-material/FileDownloadSharp';
import LoadingImage from '../LoadingImage/LoadingImage';


export const SideInfo = () => {

  const {activeTab, changeTab} = useActiveTab()

  return (
    <div className={styles.SideInfo}>
      <div className={styles.Upper}>
      <div className={styles.PhotoWrapper}>
        <div className={styles.Photo}>
          <LoadingImage imageSrc="assets/main_photo.png" alt='My photo'/>
        </div>
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
      <div className={styles.CVS}>
        <a className={styles.CV} href='assets/cvs/Kacper Walega PL CV.pdf' download>
            <LoadingImage imageSrc='assets/flags/poland.png' alt='Poland Flag' skeletonWidth='16px'/>
            <span>CV Polish</span>
            <FileDownloadSharpIcon className={styles.DownloadIcon} fontSize='small'/>
        </a>
        <a className={styles.CV} href='assets/cvs/Kacper Walega EN CV.pdf' download>
            <LoadingImage imageSrc="assets/flags/united-kingdom.png" alt="United Kingdom Flag" skeletonWidth='16px'/>
            <span>CV English</span>
            <FileDownloadSharpIcon className={styles.DownloadIcon} fontSize='small' />
        </a>
      </div>
      <div className={styles.Links}>
        <div className={styles.GitHub}>
          <a href="https://github.com/non4me21" target='_blank'>
            <GitHubIcon fontSize='small'/>
            Github
          </a>
        </div>
        <div className={styles.LinkedIn}>
          <a href="https://www.linkedin.com/in/kacper-wal%C4%99ga-2461a3265/" target="_blank">
            <LinkedInIcon fontSize='small'/>
            LinkedIn
          </a>
        </div>
      </div>
      </div>
      <Divider className={styles.Divider} flexItem />
      <div className={styles.Lower}>
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
    </div>
  )
}
