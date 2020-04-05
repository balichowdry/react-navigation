/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/Screens/Home';
import Search from './src/Screens/Search';
import SearchDetail from './src/Screens/SearchDetail';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Stack = createStackNavigator();


function NavStack() {
  return (
      <Stack.Navigator
          screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#621FF7',
            },
            headerTintColor: '#fff',
            headerTitleStyle :{
              fontWeight: 'bold',
            },
          }}
      >
        <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: 'Home' }}
        />
        <Stack.Screen
            name="Search"
            component={Search}
            options={{ title: 'Search' }}
        />
        <Stack.Screen
            name="SearchDetail"
            component={SearchDetail}
            options={{ title: 'Search Detail' }}
        />
      </Stack.Navigator>
  );
}

export default function App() {
  return (
      <NavigationContainer>
        <NavStack />
      </NavigationContainer>
  );
}
