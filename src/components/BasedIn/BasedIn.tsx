import axios from 'axios';
import styles from './BasedIn.module.scss';
import { useQuery } from '@tanstack/react-query';
import { Skeleton } from '@mui/material';

const fetchData = async () => {
  const { data } = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=Wroclaw&aqi=yes`)
  return data;
}

export const BasedIn = () => {

  const { data, error, isLoading } = useQuery({ queryKey: ['weather-data'], queryFn: fetchData});

  if (isLoading) {
    return (
      <div className={styles.BasedIn}>
        <div className={styles.Title}>Based In</div>
        <div className={styles.TextRow}>
          <h1>Wrocław, Poland</h1>
          <Skeleton width={80} />
        </div>
        <div className={styles.MainRow}>
          <Skeleton width={50} height={40} />
          <Skeleton variant="circular" width={50} height={50} />
        </div>
      </div>
    );
  }
  if (error) {
    return <div className={styles.BasedIn}>Error: {error.message}</div>
  }

  return (
    <div className={styles.BasedIn}>
      <div className={styles.Title}>Based In</div>
      <div className={styles.TextRow}>
        <h1>Wrocław, Poland</h1>
        <span>{data.current.condition.text}</span>
      </div>
      <div className={styles.MainRow}>
        <span>{data.current.temp_c}°C</span>
        <img src={data.current.condition.icon} alt={data.current.condition.text} />
      </div>
    </div>
  )
}