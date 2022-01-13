// Navigation/Navigation.js


import 'react-native-gesture-handler'; // !! important cf => https://facebook.github.io/react-native/docs/navigation
import * as React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import EcranAcceuil from '../src/screens/EcranAcceuil'
import Orphee from '../src/screens/Home'

const Drawer = createDrawerNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={EcranAcceuil} />
                <Drawer.Screen name="Orphee" component={Orphee} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
