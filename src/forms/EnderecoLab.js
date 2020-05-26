import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Formik } from 'formik';
import TextInput from '../components/Jan/TextInput';
import styleMeusDados from '../styles/styleMeusDados';
import Validation from './Validation';

function EnderecoLab({onSubmit, initialValues, style}) {
    const renderEnderecoLab = ({
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
                    <View style={styleMeusDados.alignTitles}>
                        <Text style={styleMeusDados.titulo}>
                            Informações do Laboratório
                        </Text>
                    </View>
                    
                    <View style={{width: 180}}>
                        <Text style={styleMeusDados.qualInformacao}>
                            Nome do Laboratório:
                        </Text>
                        <TextInput
                            onChange={setFieldValue}
                            onTouch={setFieldTouched}
                            placeholder="Laboratorio"
                            nomeLaboratorio="nomeLaboratorio"
                            value={values.nomeLaboratorio}
                            error={touched.nomeLaboratorio && errors.nomeLaboratorio}
                        />
                    </View>
                    <View>
                        <Text style={styleMeusDados.qualInformacao}>
                            Endereço:
                        </Text>
                        <TextInput
                            onChange={setFieldValue}
                            onTouch={setFieldTouched}
                            placeholder="Endereço"
                            enderecoLaboratorio="enderecoLaboratorio"
                            value={values.enderecoLaboratorio}
                            error={touched.enderecoLaboratorio && errors.enderecoLaboratorio}
                        />
                    </View>
                    <View>
                        <Text style={styleMeusDados.qualInformacao}>
                            Complemento:
                        </Text>
                        <TextInput
                            onChange={setFieldValue}
                            onTouch={setFieldTouched}
                            placeholder="Complemento"
                            compLaboratorio="compLaboratorio"
                            value={values.compLaboratorio}
                            error={touched.compLaboratorio && errors.compLaboratorio}
                        />
                    </View>
                    <View style={styleMeusDados.diferentDirection}>
                        <View style={{width: 120}}>
                            <Text style={styleMeusDados.qualInformacao}>
                                Bairro:
                            </Text>
                            <TextInput
                                onChange={setFieldValue}
                                onTouch={setFieldTouched}
                                placeholder="Bairro"
                                bairroLaboratorio="bairroLaboratorio"
                                value={values.bairroLaboratorio}
                                error={touched.bairroLaboratorio && errors.bairroLaboratorio}
                            />
                        </View>
                        <View style={styleMeusDados.margemEsquerda}>
                            <Text style={styleMeusDados.qualInformacao}>
                                Número:
                            </Text>
                            <TextInput
                                onChange={setFieldValue}
                                onTouch={setFieldTouched}
                                placeholder="Nr/Lt"
                                numeoroLaboratorio="numeoroLaboratorio"
                                value={values.numeoroLaboratorio}
                                error={touched.numeoroLaboratorio && errors.numeoroLaboratorio}
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
                                cidadeLaboratorio="cidadeLaboratorio"
                                value={values.cidadeLaboratorio}
                                error={touched.cidadeLaboratorio && errors.cidadeLaboratorio}
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
                                ufLaboratorio="ufLaboratorio"
                                value={values.ufLaboratorio}
                                error={touched.ufLaboratorio && errors.ufLaboratorio}
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
                nomeLaboratorio: "Fleury",
                enderecoLaboratorio: "Rua Vera Cruz, Qd.40",
                bairroLaboratorio: "Itatiai",
                numeoroLaboratorio: "142",
                cidadeLaboratorio: "Goiânia",
                ufLaboratorio: "GO",
                compLaboratorio: "Ao lado do Ciquinhos",
            }}
            onSubmit={onSubmit}
            render={renderEnderecoLab}
            validationSchema={Validation}
        />
    );
}
        
EnderecoLab.defaultProps = {
    initialValues: {},
    onSubmit: () => null,
};

export default EnderecoLab;