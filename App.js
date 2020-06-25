import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';

import LoginScreen from './src/screens/LoginScreen';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import FormsNavigator from './navigation/FormsNavigator';

import useCachedResources from './hooks/useCachedResources';

import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#595cff',
  },
  fontSize: {
    ...DefaultTheme.fontSize,
    medium: 12,
    big: 12,
    giant: 18,
  },
  chatTime: {
    ...DefaultTheme.chatTime,
    medium: 12,
    big: 18,
    giant: 18,
  },
};

const Stack = createStackNavigator();

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
        <PaperProvider theme={theme}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
              <Stack.Screen options={{headerShown: false}} name="Root" component={BottomTabNavigator} />
              <Stack.Screen name="FormsRoot" component={FormsNavigator} />
            </Stack.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});