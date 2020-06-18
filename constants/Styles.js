import * as React from 'react';
import { Platform, StyleSheet, ColorPropType} from 'react-native';


import {Dimensions, PixelRatio} from 'react-native';
import Colors from './Colors';
import { ThemeConsumer } from 'react-native-elements';
const widthPercentageToDP = widthPercent => {
  const screenWidth = Dimensions.get('window').width;
  // Convert string input to decimal number
  const elemWidth = parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel(screenWidth * elemWidth / 100);
};
const heightPercentageToDP = heightPercent => {
  const screenHeight = Dimensions.get('window').height;
  // Convert string input to decimal number
  const elemHeight = parseFloat(heightPercent);
return PixelRatio.roundToNearestPixel(screenHeight * elemHeight / 100);
};
export {
  widthPercentageToDP,
  heightPercentageToDP
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    imageView: {
      width: widthPercentageToDP('80%'),
      height: heightPercentageToDP('20%'),
      resizeMode: 'contain'
    },
    centralizedConteiner: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      alignContent: 'center'
    },
    textInput:{
      flex: 1,
      width: widthPercentageToDP('80%'),
      height: heightPercentageToDP('6%'),
      backgroundColor: '#212121',
      opacity: 0.4,
      borderRadius: 30,
      flexDirection: 'row',
      padding: 10,
      alignItems: 'center',
      marginVertical: heightPercentageToDP('2%'),
    },
    SafeView:{
      flexDirection: 'column',
      alignItems: 'center',
    },
    StyledButton: {
      flex: 1,
      width: widthPercentageToDP('85%'),
      height: heightPercentageToDP('8%'),
      backgroundColor: '#607d8b',
      borderRadius: 40,
      flexDirection: 'column',
      alignContent: 'center',
      alignItems: 'center',
    },
    ButtonText: {
      fontSize: 20,
      color: Colors.LoginText,
    },
    tabBarInfoContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      ...Platform.select({
        ios: {
          shadowColor: 'black',
          shadowOffset: { width: 0, height: -3 },
          shadowOpacity: 0.1,
          shadowRadius: 3,
        },
        android: {
          elevation: 20,
        },
      }),
      alignItems: 'center',
      backgroundColor: '#fbfbfb',
      paddingVertical: 20,
    },
    tabBarInfoText: {
      fontSize: 17,
      color: 'rgba(96,100,109, 1)',
      textAlign: 'center',
    },
    navigationFilename: {
      marginTop: 5,
    },
    helpContainer: {
      marginTop: 15,
      alignItems: 'center',
    },
    helpLink: {
      paddingVertical: 15,
    },
    helpLinkText: {
      fontSize: 14,
      color: '#2e78b7',
    },
    dataContainer: {
      flex: 1,
      backgroundColor: '#00bfff',
      padding: 5,
    },
    dataLabel: {
      fontSize: 17,
      fontWeight: 'bold',
      marginTop: 5
    },
    dataInput: {
      width: '100%',
      height: 30,
      borderLeftWidth: 1.5,
      borderBottomWidth: 1,
      borderBottomColor: '#000',
      borderRadius: 3,
      padding: 3,
      fontSize: 15,
      backgroundColor: '#fff'
    },
    dataRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: '100%',
    },
    dataMargin: {
      marginRight: 7,
      marginBottom: 5
    },
  });
  export default styles;