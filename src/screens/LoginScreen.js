import * as React from 'react';
import { Image, TextInput, View, Button, Text, KeyboardAvoidingView } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import styles from '../../constants/Styles';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';

const LoginScreen = () => {
    return(
        <LinearGradient 
            colors={['#90caf9','#00bcd4']}
            style={{flex:1}}>
           <SafeAreaView style={styles.SafeView}>
               <Image
                    style={styles.imageContainer}
                    source={require('../../assets/images/logoicvetorizada.png')}
                />
                <View style={styles.textInput}>
                    <Ionicons name="md-person" size={25}/>
                    <TextInput style={{marginLeft:10}}
                        placeholder={'Username'}
                        secureTextEntry={true}
                        underlineColorAndroid='transparent' 
                    />
                </View>
            <View style={styles.textInput}>
                <Ionicons name="md-key" size={25}/>
                <TextInput style={{marginLeft:10}}
                    placeholder={'Password'}
                    secureTextEntry={true}
                    underlineColorAndroid='transparent'
                />
            </View> 
            <TouchableOpacity>
            <View style={styles.StyledButton}>
                <Text style={styles.ButtonText}>LOGIN</Text>
            </View>
            </TouchableOpacity>
            
            </SafeAreaView>
        </LinearGradient>
    );
};
export default LoginScreen;