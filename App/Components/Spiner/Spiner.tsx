import React from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import styles from './styles';
export const Spiner = ({loading}: {loading: boolean}) => {
  return (
    <Spinner
      visible={loading}
      textContent={'Завантаження...'}
      overlayColor={'rgba(32, 42, 91, 0.3)'}
      textStyle={styles.text}
    />
  );
};
