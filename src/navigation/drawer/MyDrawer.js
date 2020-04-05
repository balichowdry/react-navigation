import React from 'react';
import { useWindowDimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Search from '../../Screens/Search';
import SearchDetail from '../../Screens/SearchDetail';

const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <Drawer.Navigator
            drawerStyle={{
            backgroundColor: '#c6cbef',
            width: 240,
        }}
        >
            <Drawer.Screen name="Search" component={Search} />
            <Drawer.Screen name="SearchDetail" component={SearchDetail} />
        </Drawer.Navigator>
    );
}

export default MyDrawer;
