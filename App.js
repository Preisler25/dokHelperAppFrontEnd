import React from 'react';
import 'react-native-gesture-handler';



import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MainPage from './components/pages/MainPage';
import ProgramPage from './components/pages/ProgramPage';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Main" component={MainPage} />
        <Drawer.Screen name="Program" component={ProgramPage} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
