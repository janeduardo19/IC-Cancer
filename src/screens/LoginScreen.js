import * as React from 'react';
import { Image, TextInput, View, Button, Text, KeyboardAvoidingView } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import styles from '../../constants/Styles';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Platform } from 'react-native';
import Colors from '../../constants/Colors';

const LoginScreen = ({navigation}) => {
    return(
        <LinearGradient 
            colors={['#80deea','#00bcd4']}
            style={{flex:1}}>
           <SafeAreaView style={{flexDirection: 'column',alignItems: 'center'}}>
               <Image
                    style={styles.imageContainer}
                    source={require('../../assets/images/logoicvetorizada.png')}
                />
            <KeyboardAvoidingView>
                <View style={styles.container}>
                    <View style={styles.textInput}>
                        <Ionicons name="md-person" size={25}/>
                        <TextInput style={{marginLeft:10}}
                            placeholder={'Username'}
                            secureTextEntry={false}
                            underlineColorAndroid='transparent'
                            placeholderTextColor='#fafafa'
                        />
                    </View>
                    <View style={styles.textInput}>
                        <Ionicons name="md-key" size={25}/>
                        <TextInput style={{marginLeft:10}}
                            placeholder={'Password'}
                            secureTextEntry={true}
                            underlineColorAndroid='transparent'
                            placeholderTextColor='#fafafa'
                        />
                    </View>
                    <TouchableOpacity onPress={()  => {navigation.navigate('Root')}}>
                    <View style={styles.StyledButton}>
                        <Text style={styles.ButtonText}>L O G I N</Text>
                    </View>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
            </SafeAreaView>
        </LinearGradient>
    );
};
export default LoginScreen;