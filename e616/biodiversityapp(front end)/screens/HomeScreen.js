// HomeScreen.js

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to the Biodiversity App</Text>
      <Button
        title="Report Sighting"
        onPress={() => navigation.navigate('Report')}
      />
      <Button
        title="View Sightings"
        onPress={() => navigation.navigate('View')}
      />
      <Button
        title="Animal Information"
        onPress={() => navigation.navigate('AnimalInfo')}
      />
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

export default HomeScreen;
