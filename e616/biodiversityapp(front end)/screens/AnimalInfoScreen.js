// AnimalInfoScreen.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AnimalInfoScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Animal Information</Text>
      <Text>This screen will display information about various animals.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default AnimalInfoScreen;
