import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Search from '../../screens/Search';
import SearchDetail from '../../screens/SearchDetail';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerStyle={{
        backgroundColor: '#c6cbef',
        width: 240,
      }}>
      <Drawer.Screen name="Search" component={Search} />
      <Drawer.Screen name="SearchDetail" component={SearchDetail} />
    </Drawer.Navigator>
  );
}

export default MyDrawer;
