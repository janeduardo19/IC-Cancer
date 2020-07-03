import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../src/screens/HomeScreen';
import ReminderList from '../src/screens/ReminderList';
import ChatScreen from '../src/screens/ChatScreen';
import tab from './tab';
import styles from '../constants/Styles';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator 
      initialRouteName={INITIAL_ROUTE_NAME}
      tabBarComponent={{tab}}
      >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-home" />,
        }}
      />
      <BottomTab.Screen
        name="Lembretes"
        component={ReminderList}
        options={{
          title: 'Lembretes',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-mail-unread" />,
        }}
      />
      <BottomTab.Screen
        name="M. de Saúde"
        component={HomeScreen}
        options={{
          title: 'M. de Saúde',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-pulse" />,
        }}
      />
      <BottomTab.Screen
        name="Canal Aberto"
        component={ChatScreen}
        options={{
          title: 'Canal Aberto',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-chatboxes" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Meus Dados':
      return 'Meus Dados';
    case 'Lembretes':
      return 'Lembretes';
    case 'M. de Saúde':
      return 'Medidas de Saude';
    case 'Canal Aberto':
      return 'Canal Aberto';
  }
}
