import React from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import Style from '../../constants/Styles';

const DadosResidenciais = (props) => (
    <View style={[Style.dataContainer, Style.dataRow]}>
        <View style={Style.dataMargin}>
            <Text style={Style.dataLabel}>
                Logradouro:
            </Text>
            <TextInput
                style={Style.dataInput}
                value={props.value.logradouro}
                onChangeText={text => props.setFieldValue('logradouro', text)}
            />
        </View>
        <View style={Style.dataMargin}>
            <Text style={Style.dataLabel}>
                Complemento:
            </Text>
            <TextInput
                style={Style.dataInput}
                value={props.value.complemento}
                onChangeText={text => props.setFieldValue('complemento', text)}
            />
        </View>
        <View style={Style.dataMargin}>
            <Text style={Style.dataLabel}>
                Número:
            </Text>
            <TextInput
                style={Style.dataInput}
                value={props.value.numero}
                onChangeText={text => props.setFieldValue('numero', text)}
            />
        </View>
        <View style={Style.dataMargin}>
            <Text style={Style.dataLabel}>
                Bairro:
            </Text>
            <TextInput
                style={Style.dataInput}
                value={props.value.bairro}
                onChangeText={text => props.setFieldValue('bairro', text)}
            />
        </View>
        <View style={Style.dataMargin}>
            <Text style={Style.dataLabel}>
                Cidade:
            </Text>
            <TextInput
                style={Style.dataInput}
                value={props.value.cidade}
                onChangeText={text => props.setFieldValue('cidade', text)}
            />
        </View>
        <View style={Style.dataMargin}>
            <Text style={Style.dataLabel}>
                UF:
            </Text>
            <TextInput
                style={Style.dataInput}
                value={props.value.uf}
                onChangeText={text => props.setFieldValue('uf', text)}
            />
        </View>
        <View style={Style.dataMargin}>
            <Text style={Style.dataLabel}>
                CEP:
            </Text>
            <TextInput
                style={Style.dataInput}
                value={props.value.cep}
                onChangeText={text => props.setFieldValue('cep', text)}
            />
        </View>
    </View>
);

export default withFormik({
    mapPropsToValues: () => ({
        logradouro: '',
        complemento: '',
        numero: '',
        bairro: '',
        cidade: '',
        uf: '',
        cep: '',
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
})(DadosResidenciais);