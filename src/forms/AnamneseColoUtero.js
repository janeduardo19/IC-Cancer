import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Formik } from 'formik';
import TextInput from '../components/TextInput';
import styleMeusDados from '../styles/styleMeusDados';
import Validation from './Validation';
import RadioButtonSimNao from '../radioButton/RadioButtonSimNao';

function AnamneseColoUtero({onSubmit, initialValues, style}) {
    const renderColoUtero = ({
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
                            Dados de Anamnese
                        </Text>
                    </View>
                    <View style={styleMeusDados.borda}>
                        <Text style={styleMeusDados.qualInformacao}>
                            1. Usa DIU?
                        </Text>
                        <RadioButtonSimNao />
                    </View>
                    <View style={styleMeusDados.borda}>
                        <Text style={styleMeusDados.qualInformacao}>
                            2. Está grávida?
                        </Text>
                        <RadioButtonSimNao />
                    </View>
                    <View style={styleMeusDados.borda}>
                        <Text style={styleMeusDados.qualInformacao}>
                            3. Usa pílula anticoncepcional?
                        </Text>
                        <RadioButtonSimNao />
                    </View>
                    <View style={styleMeusDados.borda}>
                        <Text style={styleMeusDados.qualInformacao}>
                            4. Usa hormônio / remédio para tratar a menopausa?
                        </Text>
                        <RadioButtonSimNao />
                    </View>
                    <View style={styleMeusDados.borda}>
                        <Text style={styleMeusDados.qualInformacao}>
                            5. Já fez tratamento por radioterapia?
                        </Text>
                        <RadioButtonSimNao />
                    </View>
                    <View style={styleMeusDados.borda}>
                        <Text style={styleMeusDados.qualInformacao}>
                            6. Tem ou teve algum sangramento após relações sexuais?
                        </Text>
                        <Text style={[styleMeusDados.qualInformacao, {marginTop: 0}]}>
                            (não considerar a primeira relação sexual na vida)
                        </Text>
                        <RadioButtonSimNao />
                    </View>
                    <View style={styleMeusDados.borda}>
                        <Text style={styleMeusDados.qualInformacao}>
                            7. Tem ou teve algum sangramento após a menopausa?
                        </Text>
                        <Text style={[styleMeusDados.qualInformacao, {marginTop: 0}]}>
                            (não considerar o(s) sangramento(s) na vigência de reposição hormonal)
                        </Text>
                        <RadioButtonSimNao />
                    </View>
                    <View style={styleMeusDados.borda}>
                        <Text style={styleMeusDados.qualInformacao}>
                            8. Qual a data de sua ultima mestruação?
                        </Text>
                        <TextInput
                            onChange={setFieldValue}
                            onTouch={setFieldTouched}
                            placeholder="dd/mm/aa"
                            dtMestruacao="dtMestruacao"
                            value={values.dtMestruacao}
                            error={touched.dtMestruacao && errors.dtMestruacao}
                        />
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
                dtMestruacao: "23/04/2020",
            }}
            onSubmit={onSubmit}
            render={renderColoUtero}
            validationSchema={Validation}
        />
    );
}
        
AnamneseColoUtero.defaultProps = {
    initialValues: {},
    onSubmit: () => null,
};

export default AnamneseColoUtero;