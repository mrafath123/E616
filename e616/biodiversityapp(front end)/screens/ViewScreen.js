// ViewScreen.js

import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

const ViewScreen = () => {
  const [sightings, setSightings] = useState([]);

  useEffect(() => {
    fetchSightings();
  }, []);

  const fetchSightings = async () => {
    try {
      const response = await axios.get('your ip address /api/sightings');
      setSightings(response.data);
    } catch (error) {
      console.error('Error fetching sightings:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>View Wildlife Sightings</Text>
      <FlatList
        data={sightings}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text><Text style={styles.label}>Latitude:</Text> {item.latitude}</Text>
            <Text><Text style={styles.label}>Longitude:</Text> {item.longitude}</Text>
            <Text><Text style={styles.label}>Date:</Text> {new Date(item.date).toLocaleDateString()}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  label: {
    fontWeight: 'bold',
  },
});

export default ViewScreen;
