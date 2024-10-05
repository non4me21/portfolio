import { AboutMe } from '../AboutMe/AboutMe';
import styles from './Overview.module.scss';
import content from '../../content/overview.json'
import { InfoList } from '../InfoList/InfoList';
import { BasedIn } from '../BasedIn/BasedIn';
import { TechStack } from '../TechStack/TechStack';
import { ActualProject } from '../ActualProject/ActualProject';

export const Overview = () => {
  return (
    <div className={styles.Overview}>
      <div className={styles.AboutMe}>
        <AboutMe title={content.AboutMe.title} text={content.AboutMe.content}/>
      </div>
      <div className={styles.Education}>
        <InfoList title={content.Education.title} listItems={content.Education.listItems}/>
      </div>
      <div className={styles.BasedIn}>
        <BasedIn />
      </div>
      <div className={styles.Experience}>
        <InfoList title={content.WorkExperience.title} listItems={content.WorkExperience.listItems}/>
      </div>
      <div className={styles.TechStack}>
        <TechStack techStackList={content.TechStack.techStackList}/>
      </div>
      <div className={styles.Project}>
        <ActualProject projectTitle={content.Project.projectTitle} imageSrc={content.Project.imageSrc} description={content.Project.description} href={content.Project.href}/>
      </div>
    </div>
  );
}
