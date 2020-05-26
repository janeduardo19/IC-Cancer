import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Menu from './Menu';
import MainAbas from './MeusDados';
import Lembretes from './Vinicius/Lembretes';

const MainNav = createStackNavigator(
    {
        Menu: {
            screen: Menu,
            navigationOptions: {
                header: null
            }
        },
        'Meus Dados': {
            screen: MainAbas,  
        },
        Lembretes: {
            screen: Lembretes,
        },
    },
    {
        initialRouteName: 'Menu'
    }
);

const MainContainer = createAppContainer(MainNav);

export default class App extends Component{
    render(){
        return <MainContainer/>;
    }
}
