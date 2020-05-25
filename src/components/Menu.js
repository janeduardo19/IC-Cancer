import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styleMenu from '../styles/styleMenu';

export default class Menu extends Component{
	
	render(){
		return(
			<View style={styleMenu.container}>
				<View style={styleMenu.logo}>

				</View>
				<TouchableOpacity onPress={ () => this.props.navigation.navigate('Meus Dados') }>
					<View style={styleMenu.botaoMeusDados}>
						
						<View style={styleMenu.descricao}>
							<View style={{alignItems: 'center', width: '100%'}}>
								<Text style={styleMenu.titulo}>
									Meus Dados	
								</Text>
							</View>
							<Text style={styleMenu.texto}>
								<Text style={{color: '#0000CD', fontWeight: 'bold'}}>Clique aqui: </Text>
								Vizualize seu nome, nome da sua mãe, 
								data de nascimento e outros.	
							</Text>
						</View>
					</View>
				</TouchableOpacity>
			</View>		
		);
	}	
};