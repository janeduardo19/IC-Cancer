import React from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import Style from '../../constants/Styles';

const Contato = (props) => (
    <View style={[Style.dataContainer, Style.dataRow]}>
        <View style={Style.dataMargin}>
            <Text style={Style.dataLabel}>
                E-mail:
            </Text>
            <TextInput
                style={Style.dataInput}
                value={props.value.email}
                onChangeText={text => props.setFieldValue('email', text)}
            />
        </View>
        <View style={Style.dataMargin}>
            <Text style={Style.dataLabel}>
                DDD:
            </Text>
            <TextInput
                style={Style.dataInput}
                value={props.value.ddd}
                onChangeText={text => props.setFieldValue('ddd', text)}
            />
        </View>
        <View style={Style.dataMargin}>
            <Text style={Style.dataLabel}>
                Celular:
            </Text>
            <TextInput
                style={Style.dataInput}
                value={props.value.celular}
                onChangeText={text => props.setFieldValue('celular', text)}
            />
        </View>
        <View style={Style.dataMargin}>
            <Text style={Style.dataLabel}>
                DDD:
            </Text>
            <TextInput
                style={Style.dataInput}
                value={props.value.dddTel}
                onChangeText={text => props.setFieldValue('dddTel', text)}
            />
        </View>
        <View style={Style.dataMargin}>
            <Text style={Style.dataLabel}>
                Telefone:
            </Text>
            <TextInput
                style={Style.dataInput}
                value={props.value.telefone}
                onChangeText={text => props.setFieldValue('telefone', text)}
            />
        </View>
    </View>
);

export default withFormik({
    mapPropsToValues: () => ({
        email: '',
        ddd: '',
        celular: '',
        dddTel: '',
        telefone: '',
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
})(Contato);