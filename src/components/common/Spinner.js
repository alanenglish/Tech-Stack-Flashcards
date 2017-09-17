import React from 'react';
import { View, ActivityIndicator } from 'react-native';

// pass spinner a prop called size, small or large
const Spinner = ({ size }) => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={size || 'large'} />
    </View>
  );
};

export { Spinner };
