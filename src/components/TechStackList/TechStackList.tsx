import { TechStackSection } from '../../interfaces/TechStack';
import Tooltip from '../Tooltip/Tooltip';
import styles from './TechStackList.module.scss';
import DiamondIcon from '@mui/icons-material/Diamond';

export const TechStackList = ({techStackList}: {techStackList: TechStackSection[]}) => {
  const techStackElements = techStackList.map((techStackSection) => {
    const techStackSectionElements = techStackSection.items.map((item) => (
    <Tooltip text={item.info} key={item.name}>
      <span className={styles.TechStackItem}>{item.name}</span>
    </Tooltip>
    ))
    return (
      <div className={styles.TechStackSection} key={techStackSection.sectionName}>
        <div className={styles.SectionTitle}>
          <DiamondIcon fontSize='small' />
          {techStackSection.sectionName}
          </div>
        <div className={styles.SectionElements}>
          {techStackSectionElements}
        </div>
      </div>
    )
  })

  return (
    <div className={styles.TechStackList}>
      {techStackElements}
    </div>
  )
}
