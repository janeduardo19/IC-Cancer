import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import FormsNavigator from './FormsNavigator';
import BottomTabNavigator from './BottomTabNavigator';

const Drawer = createDrawerNavigator();
const initial_route = 'Root';

export default function DrawerNavigator(){
    return(
        <NavigationContainer independent={true}>
            <Drawer.Navigator initialRouteName={initial_route}>
                <Drawer.Screen name="Home" component={BottomTabNavigator} />
                <Drawer.Screen name="Alterar Meus Dados" component={FormsNavigator} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}