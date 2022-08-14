import React from 'react';
import styles from './loadingScreen.module.scss';

function LoadingScreen() {
  return (
    <div className={styles.container} data-testid='loader'>
      <div className={styles.spinner}>
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}

export default LoadingScreen;