import axios from 'axios';
import styles from './BasedIn.module.scss';
import { useQuery } from '@tanstack/react-query';

const fetchData = async () => {
  const { data } = await axios.get('')
  return data;
}

export const BasedIn = () => {
  const { data, error, isLoading } = useQuery({ queryKey: ['weather-data'], queryFn: fetchData, staleTime: 1000 * 60});

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div>jest data</div>
  )
}
