import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Formik } from 'formik';
import TextInput from '../components/TextInput';
import styleMeusDados from '../styles/styleMeusDados';
import Validation from './Validation';

function DadosResidenciais({onSubmit, initialValues, style}) {
    const renderResidenciais = ({
      values,
      setFieldValue,
      setFieldTouched,
      touched,
      errors,
      handleSubmit,
      isValid,
      isSubmitting,
    }) => {
        return (
            <View style={styleMeusDados.container}>
                <View style={styleMeusDados.informacoes}>
                    <View style={[styleMeusDados.alignTitles, {marginTop: 4}]}>
                        <Text style={styleMeusDados.titulo}>
                            Dados Residenciais
                        </Text>
                    </View>
                    <View style={styleMeusDados.diferentDirection}>
                        <View style={{width: '100%'}}>
                            <Text style={styleMeusDados.qualInformacao}>
                                Logradouro:
                            </Text>
                            <TextInput
                                onChange={setFieldValue}
                                onTouch={setFieldTouched}
                                placeholder="Logradouro"
                                logradouro="logradouro"
                                value={values.logradouro}
                                error={touched.logradouro && errors.logradouro}
                            />
                        </View>
                        <View style={{width: '100%'}}>
                            <Text style={styleMeusDados.qualInformacao}>
                                Complemento:
                            </Text>
                            <TextInput
                                onChange={setFieldValue}
                                onTouch={setFieldTouched}
                                placeholder="Complemento"
                                complemento="complemento"
                                value={values.complemento}
                                error={touched.complemento && errors.complemento}
                            />
                        </View>
                        <View>
                            <Text style={styleMeusDados.qualInformacao}>
                                Número:
                            </Text>
                            <TextInput
                                onChange={setFieldValue}
                                onTouch={setFieldTouched}
                                placeholder="Nr/Lt"
                                numero="numero"
                                value={values.numero}
                                error={touched.numero && errors.numero}
                            />
                        </View>
                        <View style={[styleMeusDados.margemEsquerda, {width: 120}]}>
                            <Text style={styleMeusDados.qualInformacao}>
                                Bairro:
                            </Text>
                            <TextInput
                                onChange={setFieldValue}
                                onTouch={setFieldTouched}
                                placeholder="Seu Bairro"
                                bairro="bairro"
                                value={values.bairro}
                                error={touched.bairro && errors.bairro}
                            />
                        </View>
                        <View style={{width: 120}}>
                            <Text style={styleMeusDados.qualInformacao}>
                                Cidade:
                            </Text>
                            <TextInput
                                onChange={setFieldValue}
                                onTouch={setFieldTouched}
                                placeholder="Cidade"
                                cidade="cidade"
                                value={values.cidade}
                                error={touched.cidade && errors.cidade}
                            />
                        </View>
                        <View style={styleMeusDados.margemEsquerda}>
                            <Text style={styleMeusDados.qualInformacao}>
                                UF:
                            </Text>
                            <TextInput
                                onChange={setFieldValue}
                                onTouch={setFieldTouched}
                                placeholder="UF"
                                uf="uf"
                                value={values.uf}
                                error={touched.uf && errors.uf}
                            />
                        </View>
                        <View style={styleMeusDados.margemEsquerda}>
                            <Text style={styleMeusDados.qualInformacao}>
                                CEP:
                            </Text>
                            <TextInput
                                onChange={setFieldValue}
                                onTouch={setFieldTouched}
                                placeholder="0000-000"
                                cep="cep"
                                value={values.cep}
                                error={touched.cep && errors.cep}
                            />
                        </View>
                        
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
        initialValues={{
            logradouro: "Av. Morumbi, Qd. 15",
            numero: "21",
            complemento: "Proximo a loja do seu zé",
            bairro:"Jaiara",
            cidade:"Anápolis",
            uf: "GO",
            cep: "75191-525",
        }}
            onSubmit={onSubmit}
            render={renderResidenciais}
            validationSchema={Validation}
        />
    );
}
        
DadosResidenciais.defaultProps = {
    initialValues: {},
    onSubmit: () => null,
};

export default DadosResidenciais;