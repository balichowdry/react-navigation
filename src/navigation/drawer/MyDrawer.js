import React from 'react';
import { useWindowDimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Search from '../../Screens/Search';
import SearchDetail from '../../Screens/SearchDetail';

const Drawer = createDrawerNavigator();

function MyDrawer() {
    const dimensions = useWindowDimensions();

    return (
        <Drawer.Navigator drawerType={dimensions.width > 900 ? 'permanent' : 'front'}>
            <Drawer.Screen name="Search" component={Search} />
            <Drawer.Screen name="SearchDetail" component={SearchDetail} />
        </Drawer.Navigator>
    );
}

export default MyDrawer;
