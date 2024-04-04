import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import ReportScreen from './screens/ReportScreen';
import ViewScreen from './screens/ViewScreen';
import AnimalInfoScreen from './screens/AnimalInfoScreen';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Report" component={ReportScreen} />
        <Stack.Screen name="View" component={ViewScreen} />
        <Stack.Screen name="AnimalInfo" component={AnimalInfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
