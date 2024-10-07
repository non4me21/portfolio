import { TechStackSection } from '../../interfaces/TechStack'
import { TechStackList } from '../TechStackList/TechStackList';
import styles from './TechStack.module.scss'

export const TechStack = ({techStackList}: {techStackList: TechStackSection[]}) => {

  return (
    <div className={styles.TechStack}>
      <h1>Tech Stack</h1>
      <TechStackList techStackList={techStackList}/>
    </div>
  )

}
