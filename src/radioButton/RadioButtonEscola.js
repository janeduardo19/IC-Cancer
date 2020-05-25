import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import stylesRadioButton from '../styles/stylesRadioButton';

export default class RadioButtonEscola extends Component{
  constructor(){
    super()
    this.state={
      data: ['Sem Escolaridade', 'Ensino Fundamental Incompleto', 'Ensino Fundamental Completo', 'Ensino Médio Completo', 'Ensino Superior Completo'],
      checked: 4
    }
  }

  render() {
    return(
      <View style={stylesRadioButton.container}>
        {
          this.state.data.map((data,key)=>{
            return(
              <View>
                {this.state.checked==key?
                  <TouchableOpacity style={stylesRadioButton.btn}>
                    <Image style={stylesRadioButton.image} source={{uri: 'https://d30y9cdsu7xlg0.cloudfront.net/png/868143-200.png'}} />
                    <Text style={stylesRadioButton.txt}>{data}</Text>
                  </TouchableOpacity>
                  :
                  <TouchableOpacity onPress={()=>{this.setState({checked:key})}} style={stylesRadioButton.btn}>
                    <Image style={stylesRadioButton.image} source={{uri: 'https://d30y9cdsu7xlg0.cloudfront.net/png/868142-200.png'}} />
                    <Text style={stylesRadioButton.txt}>{data}</Text>
                  </TouchableOpacity>
                }
              </View>
            )
          })
        } 
          
      </View>
    );
  }
}