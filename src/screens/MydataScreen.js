import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from '../../constants/Styles';

export default function MydataScreen({navigation}) {
    return(
        <View style={styles.dataContainer}>
            <View style={[styles.dataMargin, {marginLeft: 14}]}>
                <TouchableOpacity onPress={()  => {navigation.navigate('Dados Pessoais')}}>
                    <View style={[styles.StyledButton, {padding: 20}]}>
                        <Text style={styles.ButtonText}>Dados Pessoais</Text>
                    </View>
                </TouchableOpacity>
            </View>
            
            <View style={[styles.dataMargin, {marginLeft: 14}]}>
                <TouchableOpacity onPress={()  => {navigation.navigate('Contato')}}>
                    <View style={[styles.StyledButton, {padding: 20}]}>
                        <Text style={styles.ButtonText}>Contato</Text>
                    </View>
                </TouchableOpacity>
            </View>
            
            <View style={[styles.dataMargin, {marginLeft: 14}]}>
                <TouchableOpacity onPress={()  => {navigation.navigate('Endereco')}}>
                    <View style={[styles.StyledButton, {padding: 20}]}>
                        <Text style={styles.ButtonText}>Endereço</Text>
                    </View>
                </TouchableOpacity>
            </View>
            
            <View style={[styles.dataMargin, {marginLeft: 14}]}>
                <TouchableOpacity onPress={()  => {navigation.navigate('Endereco do Laboratorio')}}>
                    <View style={[styles.StyledButton, {padding: 10}]}>
                        <Text style={[styles.ButtonText, {fontSize: 24}]}>Endereço Laboratório</Text>
                    </View>
                </TouchableOpacity>
            </View>
            
        </View>
    );
}