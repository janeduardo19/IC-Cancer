import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { Icon } from 'react-native-elements';

import { InformacoesPessoais, EnderecoPaciente, ContatoPaciente, Anamnese, EnderecoLaboratorio } from '../abas/index';

const MainAbas = createMaterialTopTabNavigator (
    {
        Info: {
            screen: InformacoesPessoais,
        },
        Residencia: {
            screen: EnderecoPaciente,
        },
        Contato: {
            screen: ContatoPaciente,
        },
        
        Anamnese: {
            screen: Anamnese,
        },
        Laboratorio: {
            screen: EnderecoLaboratorio,
        },
    },
    {
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'blue',
            showLabel: true,
            style: {
                backgroundColor: 'white',
            }
        },
    },
); 

export default createAppContainer (MainAbas);