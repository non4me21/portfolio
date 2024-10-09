import { useState } from 'react';
import styles from './LoadingImage.module.scss';
import classNames from 'classnames';
import { Skeleton } from '@mui/material';

const LoadingImage = ({imageSrc, alt, skeletonHeight, skeletonWidth}: {imageSrc: string, alt: string, skeletonHeight?: string, skeletonWidth?: string}) => {
  const [isLoaded, setLoaded] = useState<boolean>(false);

  return (
    <>
      {!isLoaded && <Skeleton className={styles.ImageSkeleton} variant='rounded' animation='wave' height={skeletonHeight ?? 'inherit'} width={skeletonWidth ?? 'inherit'} sx={{borderRadius: 'inherit'}}/>}
      <img className={classNames(styles.LoadingImage, isLoaded && styles.Loaded)} src={imageSrc} alt={alt} onLoad={() => {setLoaded(true)}}/>
    </>
  )
}

export default LoadingImage;
