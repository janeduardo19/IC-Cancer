import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Formik } from 'formik';
import styleMeusDados from '../styles/styleMeusDados';
import Validation from './Validation';
import RadioButtonSimNao from '../radioButton/RadioButtonSimNao';

function AnamneseBoca({onSubmit}) {
    const renderBoca = ({
      handleSubmit,
      isValid,
      isSubmitting,
    }) => {
        return (
            <View style={styleMeusDados.container}>
                <View style={styleMeusDados.informacoes}>
                    <View style={styleMeusDados.alignTitles}>
                        <Text style={styleMeusDados.titulo}>
                            Dados de Anamnese/Cancêr de Boca
                        </Text>
                    </View>
                    <View style={styleMeusDados.borda}>
                        <Text style={styleMeusDados.qualInformacao}>
                            1. Faz uso de algum tipo de tabaco?
                        </Text>
                        <RadioButtonSimNao />
                    </View>
                    <View style={styleMeusDados.borda}>
                        <Text style={styleMeusDados.qualInformacao}>
                            2. Consome bebida alcoólica?
                        </Text>
                        <RadioButtonSimNao />
                    </View>
                    <View style={styleMeusDados.borda}>
                        <Text style={styleMeusDados.qualInformacao}>
                            3. Fica exposto ao sol por periodos prolongados sem devida proteção?
                        </Text>
                        <RadioButtonSimNao />
                    </View>
                    <View style={styleMeusDados.borda}>
                        <Text style={styleMeusDados.qualInformacao}>
                            4. Escova os dentes ao menos 2 vezes por dia?
                        </Text>
                        <RadioButtonSimNao />
                    </View>
                    <View style={styleMeusDados.borda}>
                        <Text style={styleMeusDados.qualInformacao}>
                            5. Possuiu alguma infecção por HPV na região da boca?
                        </Text>
                        <RadioButtonSimNao />
                    </View>
                </View>
                
                <TouchableOpacity
                    disabled={!isValid || isSubmitting}
                    onPress={handleSubmit}
                    style={StyleSheet.flatten([
                        styleMeusDados.submit,
                        !isValid ? styleMeusDados.submitDisabled : null,
                    ])}>
                    <Text style={styleMeusDados.submitText}>Enviar</Text>
                </TouchableOpacity>
            </View>
        );
    };
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            render={renderBoca}
            validationSchema={Validation}
        />
    );
}
        
AnamneseBoca.defaultProps = {
    initialValues: {},
    onSubmit: () => null,
};

export default AnamneseBoca;