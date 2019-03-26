import React from 'react';
import styles from './Loading.css';

export default function Loading() {
  return (
    <section className={styles.Loading}>
      <img
        src="http://i1.wp.com/www.quartzcodeapp.com/wp-content/uploads/2015/03/water-fill-animation.gif?resize=300%2C300"
      />
    </section>
  );
}
