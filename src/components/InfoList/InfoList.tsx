import { ListItem } from '../../interfaces/listItems';
import styles from './InfoList.module.scss'

interface InfoListProps {
  title: string;
  listItems: ListItem[]
}

export const InfoList = (props: InfoListProps) => {

  const listElements = props.listItems.map((item) => {
    const description = !Array.isArray(item.description) ? <li>{item.description}</li> :
    item.description.map((value, index) => <li key={index}>{value}</li>)
    return (
      <div className={styles.List} key={item.label}>
        <div className={styles.ListLabel}>{item.label}</div>
        <ul key={item.label}>{description}</ul>
      </div>
    )
  })
  return (
    <div className={styles.InfoList}>
      <h1>{props.title}</h1>
      <div className={styles.ListElements}>
        {listElements}
      </div>
    </div>
  )
}
