import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../screens/Home';
import Search from '../../screens/Search';
import SearchDetail from '../../screens/SearchDetail';

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
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="Home" component={Home} options={{title: 'Home'}} />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{title: 'Search'}}
      />
      <Stack.Screen
        name="SearchDetail"
        component={SearchDetail}
        options={{title: 'Search Detail'}}
      />
    </Stack.Navigator>
  );
}

const NavContainer = () => {
  return (
    <NavigationContainer>
      <NavStack />
    </NavigationContainer>
  );
};

export default NavContainer;
