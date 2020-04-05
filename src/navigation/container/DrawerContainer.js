import {NavigationContainer} from '@react-navigation/native';
import MyDrawer from '../drawer/MyDrawer';
import React from 'react';

const DrawerContainer = () => {
    return (
        <NavigationContainer>
            <MyDrawer />
        </NavigationContainer>
    );
}

export default DrawerContainer;
