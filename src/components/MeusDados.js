import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { Icon } from 'react-native-elements';

import { InformacoesPessoais, EnderecoPaciente, ContatoPaciente, Anamnese, EnderecoLaboratorio } from '../abas/index';

const MainAbas = createMaterialTopTabNavigator (
    {
        Info: {
            screen: InformacoesPessoais,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="paper-plane" type="font-awesome" />
                )
            },
        },
        Residencia: {
            screen: EnderecoPaciente,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="paper-plane" type="font-awesome" />
                )
            },
        },
        Contato: {
            screen: ContatoPaciente,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="paper-plane" type="font-awesome" />
                )
            },
        },
        
        Anamnese: {
            screen: Anamnese,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="paper-plane" type="font-awesome" />
                )
            },
        },
        Laboratorio: {
            screen: EnderecoLaboratorio,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="paper-plane" type="font-awesome" />
                )
            },
        },
    },
    {
        tabBarOptions: {
            showIcon: true,
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
            showLabel: false,
            style: {
                backgroundColor: 'white',
            }
        },
    },
); 

export default createAppContainer (MainAbas);