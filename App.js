import React from 'react';
import { StyleSheet, SafeAreaView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import AboutScreen from './screens/AboutScreen';
import CustomScreen from './screens/CustomScreen';
import CardScreen from './screens/CardScreen';
import ProgressScreen from './screens/ProgressScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={navStyling}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Settings" component={SettingsScreen}/>
        <Stack.Screen name="About" component={AboutScreen}/>
        <Stack.Screen name="Customize" component={CustomScreen}/>
        <Stack.Screen name="Cards" component={CardScreen}/>
        <Stack.Screen name="Progress" component={ProgressScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const navStyling = {
  headerStyle: {
    backgroundColor: '#0065A4',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
