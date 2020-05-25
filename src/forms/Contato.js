import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Formik } from 'formik';
import TextInput from '../components/TextInput';
import styleMeusDados from '../styles/styleMeusDados';
import Validation from './Validation';

function Contato({onSubmit, initialValues, style}) {
    const renderCont = ({
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
                            Contato
                        </Text>
                    </View>
                    <View style={{width:'100%'}}>
                        <Text style={[styleMeusDados.qualInformacao, {marginTop: 2}]}>
                            E-mail:
                        </Text>
                        <TextInput
                            onChange={setFieldValue}
                            onTouch={setFieldTouched}
                            placeholder="seuemail@gmail.com"
                            email="email"
                            value={values.email}
                            error={touched.email && errors.email}
                        />
                    </View>
                    <View style={styleMeusDados.diferentDirection}>
                        <View>
                            <Text style={styleMeusDados.qualInformacao}>
                                DDD:
                            </Text>
                            <TextInput
                                onChange={setFieldValue}
                                onTouch={setFieldTouched}
                                placeholder="00"
                                ddd="ddd"
                                value={values.ddd}
                                error={touched.ddd && errors.ddd}
                            />
                        </View>
                        <View style={styleMeusDados.margemEsquerda}>
                            <Text style={styleMeusDados.qualInformacao}>
                                Celular:
                            </Text>
                            <TextInput
                                onChange={setFieldValue}
                                onTouch={setFieldTouched}
                                placeholder="90000-0000"
                                celular="celular"
                                value={values.celular}
                                error={touched.celular && errors.celular}
                            />
                        </View>
                        <View style={styleMeusDados.margemEsquerda}>
                            <Text style={styleMeusDados.qualInformacao}>
                                DDD:
                            </Text>
                            <TextInput
                                onChange={setFieldValue}
                                onTouch={setFieldTouched}
                                placeholder="00"
                                dddTel="dddTel"
                                value={values.dddTel}
                                error={touched.dddTel && errors.dddTel}
                            />
                        </View>
                        <View style={styleMeusDados.margemEsquerda}>
                            <Text style={styleMeusDados.qualInformacao}>
                                Telefone:
                            </Text>
                            <TextInput
                                onChange={setFieldValue}
                                onTouch={setFieldTouched}
                                placeholder="0000-0000"
                                telefone="telefone"
                                value={values.telefone}
                                error={touched.telefone && errors.telefone}
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
                email: "fadaraivosa@gmail.com",
                ddd: "62",
                celular: "99112-1234",
                dddTel: "61",
                telefone: "3303-6970",
            }}
            onSubmit={onSubmit}
            render={renderCont}
            validationSchema={Validation}
        />
    );
}
        
Contato.defaultProps = {
    initialValues: {},
    onSubmit: () => null,
};

export default Contato;