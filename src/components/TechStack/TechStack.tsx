import { TechStackSection } from '../../interfaces/TechStack'
import Tooltip from '../Tooltip/Tooltip'
import styles from './TechStack.module.scss'
import DiamondIcon from '@mui/icons-material/Diamond';

export const TechStack = ({techStackList}: {techStackList: TechStackSection[]}) => {

  const techStackElements = techStackList.map((techStackSection) => {
    const techStackSectionElements = techStackSection.items.map((item) => (
    <Tooltip text={item.info}>
      <span className={styles.TechStackItem}>{item.name}</span>
    </Tooltip>
    ))
    return (
      <div className={styles.TechStackSection}>
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
    <div className={styles.TechStack}>
      <h1>Tech Stack</h1>
      <div className={styles.TechStackList}>
        {techStackElements}
      </div>
    </div>
  )

}
