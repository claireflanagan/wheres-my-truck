import React from 'react';
import styles from './ImageDisplay.css';

const ImageDisplay = ({ imageSource }) => {

  return (
    <img src={imageSource} className={styles.refImage}/>
  );
  
};

export default ImageDisplay;

