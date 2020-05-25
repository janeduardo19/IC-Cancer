import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

const styleMenu = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00bfff',
        alignItems: 'center'
    },
    logo: {
        width: '100%',
        height: 150,
    },
    botaoMeusDados: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: '96%',
        height: 80,
        backgroundColor: '#fff',
        borderWidth: 1,
        marginTop: 10,
        borderRadius: 5,
        padding: 5
    },
    image: {
        flex:0.3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    descricao: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'baseline'
    },
    titulo:{
        fontSize: 20,
        fontWeight: 'bold'
    },
    texto:{
        fontSize: 14
    }
});

export default styleMenu;