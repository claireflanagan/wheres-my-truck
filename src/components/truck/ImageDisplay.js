import React from 'react';
import { useFirebase } from '../../hooks/useFirebase';
import { trucksCollection } from '../../services/collections';
import styles from './ImageDisplay.css';
import Loading from '../Loading';

const ImageDisplay = ({ match }) => {
  const truck = useFirebase(trucksCollection.doc(match.params.id));
  if(!truck) return <Loading />;

  return (
    <img src={truck[match.params.imageType]} className={styles.refImage} />
  );

};

export default ImageDisplay;
