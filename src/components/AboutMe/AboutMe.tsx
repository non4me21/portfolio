import styles from './AboutMe.module.scss'

export const AboutMe = ({title, text}: {title: string, text: string}) => {
  return <div className={styles.AboutMe}>
    <h1 className={styles.Title}>{title}</h1>
    <div className={styles.Text}>{text}</div>
  </div>
}
