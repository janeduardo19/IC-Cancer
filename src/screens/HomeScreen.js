import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { CheckBox } from 'react-native-elements'
import { MonoText } from '../../components/StyledText';
import styles from '../../constants/Styles';

export default function HomeScreen() {

  return (
    <View style={{flex:1,justifyContent: 'center', alignItems: 'center', }}>
      <View>
      <Image
        style={styles.SafeView}
        source={require('../../assets/images/logoicvetorizada.png')}/>
      </View>
      <Text style={{marginVertical:'20%', fontSize: 20, alignItems: 'center'}}> Olá, seja muito bem vindo </Text>
    </View>
  );
}

