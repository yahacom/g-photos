import React from 'react'
import {Header} from '../../components';
import styles from './styles.module.scss';

const NotFoundPage = () => {
  return (
    <div className={styles.wrapper}>
      <Header title={'Not Found'} showLogOut={false} />
      <div className={styles.notFound}><b>Page you are looking for not found!</b></div>
    </div>
  );
};

export default NotFoundPage;
