// App.js



import 'react-native-gesture-handler'; // !! important cf => https://facebook.github.io/react-native/docs/navigation
import * as React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import EcranAcceuil from './src/screens/EcranAcceuil'
import Orphee from './src/screens/Orphee'
import Anniversaire from './src/screens/Anniversaire'
import AvatarChoice from './src/screens/Avatar'
import Ours from './src/components/Ours'
import Renard from './src/components/Renard'


const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="EcranAcceuil">
                <Drawer.Screen name="EcranAcceuil" component={EcranAcceuil} options={{ headerShown: false, headerTransparent: true, title: '' }} />
                <Drawer.Screen name="Orphee" component={Orphee}  options={{ headerTransparent: true, title: ''}} />
                <Drawer.Screen name="Anniversaire" component={Anniversaire}  options={{ headerTransparent: true, title: 'Anniversaire'}} />
                <Drawer.Screen name="Avatar" component={AvatarChoice}  options={{ headerTransparent: true, title: 'Avatar'}} />
                <Drawer.Screen name="Renard" component={Renard} />
                <Drawer.Screen name="Ours" component={Ours} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

// import 'react-native-gesture-handler'; // !! important cf => https://facebook.github.io/react-native/docs/navigation
// import * as React from 'react';
//
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';
//
// import HomeScreen from './src/screens/HomeScreen';
// import NotificationsScreen from './src/screens/AboutScreen';
//
// const Drawer = createDrawerNavigator();
//
// export default function App() {
//     return (
//         <NavigationContainer>
//             <Drawer.Navigator initialRouteName="Home">
//                 <Drawer.Screen name="Home" component={HomeScreen} />
//                 <Drawer.Screen name="Notifications" component={NotificationsScreen} />
//             </Drawer.Navigator>
//         </NavigationContainer>
//     );
// }
//  <Drawer.Screen name="Avatar" component={Avatar}  options={{ title: 'Choose your avatar'}} />
