import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styleMenu from '../../styles/styleMenu';

export default class Menu extends Component{
	
	render(){
		return(
			<View style={styleMenu.container}>
				<View style={styleMenu.logo}>

				</View>
				<TouchableOpacity onPress={ () => this.props.navigation.navigate('Meus Dados') }>
					<View style={styleMenu.botaoMeusDados}>
						//colocar imagem
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
				<TouchableOpacity onPress={ () => this.props.navigation.navigate('Lembretes') }>
					<View style={styleMenu.botaoMeusDados}>
						//colocar imagem
						<View style={styleMenu.descricao}>
							<View style={{alignItems: 'center', width: '100%'}}>
								<Text style={styleMenu.titulo}>
									Lembretes	
								</Text>
							</View>
							<Text style={styleMenu.texto}>
								<Text style={{color: '#0000CD', fontWeight: 'bold'}}>Clique aqui: </Text>
								Visualiza os lembretes de consulta e exames.
							</Text>
						</View>
					</View>
				</TouchableOpacity>
			</View>		
		);
	}	
};