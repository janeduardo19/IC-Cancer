import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { CheckBox } from 'react-native-elements'
import { MonoText } from '../../components/StyledText';
import styles from '../../constants/Styles';

export default function HomeScreen() {

  return (
    <View style={styles.centralizedConteiner}>
      <View>
      <Image
        style={styles.imageView}
        source={require('../../assets/images/logoicvetorizada.png')}/>
      </View>
      <Text style={{marginVertical:'20%', fontSize: 20}}> Olá, seja muito bem vindo </Text>
    </View>
  );
}

