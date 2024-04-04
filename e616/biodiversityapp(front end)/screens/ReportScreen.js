// ReportScreen.js

import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import axios from 'axios';

const ReportScreen = () => {
  const [location, setLocation] = useState(null);

  const handleMapPress = (event) => {
    setLocation(event.nativeEvent.coordinate);
  };

  const handleSubmit = async () => {
    try {
      if (!location) {
        Alert.alert('Error', 'Please select a location on the map.');
        return;
      }
      await axios.post('http://192.168.135.97:5000', { latitude: location.latitude, longitude: location.longitude });
      setLocation(null);
      Alert.alert('Success', 'Sighting reported successfully!');
    } catch (error) {
      console.error('Error reporting sighting:', error);
      Alert.alert('Error', 'Failed to report sighting. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Report Wildlife Sighting</Text>
      <MapView
        style={styles.map}
        onPress={handleMapPress}
        initialRegion={{
          latitude: 11.1271, 
          longitude: 78.6569, 
          latitudeDelta: 4,
          longitudeDelta: 4,
        }}
      >
        {location && <Marker coordinate={location} />}
      </MapView>
      <Button
        title="Report Sighting"
        onPress={handleSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  map: {
    width: '100%',
    height: '70%',
  },
});

export default ReportScreen;