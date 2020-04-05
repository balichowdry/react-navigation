import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {
  NavigationContainer,
  useNavigation,
  DrawerActions,
} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  createStackNavigator,
  HeaderBackButton,
  Header,
} from '@react-navigation/stack';
import Home from '../../Screens/Home';
import Search from '../../Screens/Search';
import SearchDetail from '../../Screens/SearchDetail';

import {TouchableOpacity} from 'react-native-gesture-handler';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const TabComponent = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen component={Home} name="Home" />
      <Tab.Screen component={Search} name="Search" />
      {/*
       * Rest Screens
       */}
    </Tab.Navigator>
  );
};

const DrawerComponent = () => {
  return (
    <Drawer.Navigator drawerPosition={'right'}>
      <Drawer.Screen component={TabComponent} name="Home" />
      {/*
       * Rest Screens
       */}
    </Drawer.Navigator>
  );
};

const HeaderRight = () => {
  const navigation = useNavigation();
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity
        onPress={() => {
          navigation.dispatch(DrawerActions.openDrawer());
        }}>
        <Text>Menu</Text>
        {/* <Image source={require('./assets/images/icons/drawer.png')} /> */}
      </TouchableOpacity>
    </View>
  );
};

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerRight: ({}) => <HeaderRight />,
          }}
          component={DrawerComponent}
          name="Drawer"
        />
        <Stack.Screen
          options={{
            headerRight: ({}) => <HeaderRight />,
          }}
          component={Search}
          name="Search"
        />
        <Stack.Screen component={SearchDetail} name="SearchDetail" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
