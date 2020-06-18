import React from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import Style from '../../constants/Styles';

const EnderecoLab = (props) => (
    <View style={Style.dataContainer}>
        <View style={Style.dataMargin}>
            <Text style={Style.dataLabel}>
                Nome:
            </Text>
            <TextInput
                style={Style.dataInput}
                value={props.value.nomeLaboratorio}
                onChangeText={text => props.setFieldValue('nomeLaboratorio', text)}
            />
        </View>
        <View style={Style.dataMargin}>
            <Text style={Style.dataLabel}>
                Endereço:
            </Text>
            <TextInput
                style={Style.dataInput}
                value={props.value.enderecoLaboratorio}
                onChangeText={text => props.setFieldValue('enderecoLaboratorio', text)}
            />
        </View>
        <View style={Style.dataMargin}>
            <Text style={Style.dataLabel}>
                Complemento:
            </Text>
            <TextInput
                style={Style.dataInput}
                value={props.value.compLaboratorio}
                onChangeText={text => props.setFieldValue('compLaboratorio', text)}
            />
        </View>
        <View style={Style.dataRow}>
            <View style={Style.dataMargin}>
                <Text style={Style.dataLabel}>
                    Bairro:
                </Text>
                <TextInput
                    style={Style.dataInput}
                    value={props.value.bairroLaboratorio}
                    onChangeText={text => props.setFieldValue('bairroLaboratorio', text)}
                />
            </View>
            <View style={Style.dataMargin}>
                <Text style={Style.dataLabel}></Text>
                <TextInput
                    style={Style.dataInput}
                    value={props.value.numeoroLaboratorio}
                    onChangeText={text => props.setFieldValue('numeoroLaboratorio', text)}
                />
            </View>
            <View style={Style.dataMargin}>
                <Text style={Style.dataLabel}>
                    Cidade:
                </Text>
                <TextInput
                    style={Style.dataInput}
                    value={props.value.cidadeLaboratorio}
                    onChangeText={text => props.setFieldValue('cidadeLaboratorio', text)}
                />
            </View>
            <View style={Style.dataMargin}>
                <Text style={Style.dataLabel}>
                    UF:
                </Text>
                <TextInput
                    style={Style.dataInput}
                    value={props.value.ufLaboratorio}
                    onChangeText={text => props.setFieldValue('ufLaboratorio', text)}
                />
            </View>
        </View>
    </View>
);

export default withFormik({
    mapPropsToValues: () => ({
        nomeLaboratorio: '',
        enderecoLaboratorio: '',
        compLaboratorio: '',
        bairroLaboratorio: '',
        numeoroLaboratorio: '',
        cidadeLaboratorio: '',
        ufLaboratorio: '',
    }),
    validationSchema: Yup.object().shape({

    }),
    handleSubmit: (values, {setSubmitting, setErrors}) => {
        console.log(values);

        { props.isSubmitting && <ActivityIndicator /> };
        
        apiService.post('/authenticate', values)
        .then(/* sucesso */)
        .catch(err => {
            setSubmitting(false);
            setErrors({ message: err.message });
        });

        { props.errors.message && <Text>{props.errors.message}</Text> };
    }
})(EnderecoLab);