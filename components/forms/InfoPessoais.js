import React from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import Style from '../../constants/Styles';

const InfoPessoais = (props) => (
  <View style={Style.dataContainer}>
    <View style={Style.dataMargin}>
      <Text style={Style.dataLabel}>
        Nome:
      </Text>
      <TextInput
        style={Style.dataInput}
        value={props.values.name}
        onChangeText={text => props.setFieldValue('name', text)}
      />
    </View>
    <View style={Style.dataMargin}>
      <Text style={Style.dataLabel}>
        Nome da Mãe:
      </Text>
      <TextInput
        style={Style.dataInput}
        value={props.values.motherName}
        onChangeText={text => props.setFieldValue('motherName', text)}
      />
    </View>
    <View style={Style.dataRow}>
      <View style={Style.dataMargin}>  
        <Text style={Style.dataLabel}>
          Cartão do SUS:
        </Text>
        <TextInput
          style={[Style.dataInput, {width: 150}]}
          value={props.values.sus}
          onChangeText={text => props.setFieldValue('sus', text)}
        />
      </View>
      <View style={Style.dataMargin}>
        <Text style={Style.dataLabel}>
          CPF:
        </Text>
        <TextInput
          style={[Style.dataInput, {width: 120}]}
          value={props.values.cpf}
          onChangeText={text => props.setFieldValue('cpf', text)}
        />
      </View>
      <View style={Style.dataMargin}>
        <Text style={Style.dataLabel}>
          RG:
        </Text>
        <TextInput
          style={[Style.dataInput, {width: 100}]}
          value={props.values.rg}
          onChangeText={text => props.setFieldValue('rg', text)}
        />
      </View>
      <View style={Style.dataMargin}>
        <Text style={Style.dataLabel}>
          Dt. Emissão:
        </Text>
        <TextInput
          style={Style.dataInput}
          value={props.values.dtEmissao}
          onChangeText={text => props.setFieldValue('dtEmissao', text)}
        />
      </View>
      <View style={Style.dataMargin}>  
        <Text style={Style.dataLabel}>
          Emissor:
        </Text>
        <TextInput
          style={Style.dataInput}
          value={props.values.emissor}
          onChangeText={text => props.setFieldValue('emissor', text)}
        />
      </View>
      <View style={Style.dataMargin}>
        <Text style={Style.dataLabel}>
          Dt. Nascimento:
        </Text>
        <TextInput
          style={Style.dataInput}
          value={props.values.dtNascimento}
          onChangeText={text => props.setFieldValue('dtNascimento', text)}
        />
      </View>
      <View style={Style.dataMargin}>
        <Text style={Style.dataLabel}>
          Idade:
        </Text>
        <TextInput
          style={Style.dataInput}
          value={props.values.idade}
          onChangeText={text => props.setFieldValue('idade', text)}
        />
      </View>
      <View style={Style.dataMargin}>
        <Text style={Style.dataLabel}>
          Gênero:
        </Text>
        <TextInput
          style={[Style.dataInput, {width: 100}]}
          value={props.values.genero}
          onChangeText={text => props.setFieldValue('genero', text)}
        />
      </View>
      <View style={[Style.dataMargin, {marginBottom: 10}]}>
        <Text style={Style.dataLabel}>
          Nacionalidade:
        </Text>
        <TextInput
          style={Style.dataInput}
          value={props.values.nacionalidade}
          onChangeText={text => props.setFieldValue('nacionalidade', text)}
        />
      </View>
    </View>

    <Button
      onPress={props.handleSubmit}
      title="Atualizar"
    />
  </View>
);

export default withFormik({
  mapPropsToValues: () => ({ 
    name: '', 
    motherName: '',
    sus: '',
    cpf: '',
    rg: '',
    dtEmissao: '',
    emissor: '',
    dtNascimento: '',
    idade: '',
    genero: '',
    nacionalidade: '',
  }),

  validationSchema: Yup.object().shape({
    
  }),

  handleSubmit: (values, { setSubmitting, setErrors }) => {
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
})(InfoPessoais);