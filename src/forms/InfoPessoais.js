import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Formik } from 'formik';
import TextInput from '../components/Jan/TextInput';
import styleMeusDados from '../styles/styleMeusDados';
import Validation from './Validation';
import RadioButtonRaca from '../radioButton/RadioButtonRaca';
import RadioButtonEscola from '../radioButton/RadioButtonEscola';

function InfoPessoais({onSubmit, initialValues, style}) {
    const renderInfo = ({
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
                            Informações Pessoais 1
                        </Text>
                    </View>
                    
                    <View style={{width: '100%'}}>
                        <Text style={styleMeusDados.qualInformacao}>
                            Nome:
                        </Text>
                        <TextInput
                            onChange={setFieldValue}
                            onTouch={setFieldTouched}
                            placeholder="Nome"
                            name="name"
                            value={values.name}
                            error={touched.name && errors.name}
                        />
                    </View>
                    <View style={{width: '100%'}}>
                        <Text style={styleMeusDados.qualInformacao}>
                            Nome da Mãe:
                        </Text>
                        <TextInput
                            onChange={setFieldValue}
                            onTouch={setFieldTouched}
                            placeholder="Nome da Mãe"
                            motherName="motherName"
                            value={values.motherName}
                            error={touched.name && errors.name}
                        />
                    </View>
                    <View style={styleMeusDados.diferentDirection}>
                        <View>
                            <Text style={styleMeusDados.qualInformacao}>
                                Nr. do Cartão do SUS:
                            </Text>
                            <TextInput
                                onChange={setFieldValue}
                                onTouch={setFieldTouched}
                                placeholder="Nr. do cartão do SUS"
                                sus="sus"
                                value={values.sus}
                                error={touched.numeroSus && errors.numeroSus}
                                style={styleMeusDados.input}
                            />
                        </View>
                        <View style={styleMeusDados.margemEsquerda}>    
                            <Text style={styleMeusDados.qualInformacao}>
                                CPF:
                            </Text>
                            <TextInput
                                onChange={setFieldValue}
                                onTouch={setFieldTouched}
                                placeholder="Nr. do CPF"
                                cpf="cpf"
                                value={values.cpf}
                                error={touched.numeroCpf && errors.numeroCpf}
                                style={styleMeusDados.input}
                            />
                        </View>
                        <View>    
                            <Text style={styleMeusDados.qualInformacao}>
                                RG:
                            </Text>
                            <TextInput
                                onChange={setFieldValue}
                                onTouch={setFieldTouched}
                                placeholder="Nr. do RG"
                                rg="rg"
                                value={values.rg}
                                error={touched.numeroRg && errors.numeroRg}
                                style={styleMeusDados.input}
                            />
                        </View>
                        <View style={styleMeusDados.margemEsquerda}>    
                            <Text style={styleMeusDados.qualInformacao}>
                                Dt. Emissão:
                            </Text>
                            <TextInput
                                onChange={setFieldValue}
                                onTouch={setFieldTouched}
                                placeholder="Dt. Emissão"
                                dtEmissao="dtEmissao"
                                value={values.dtEmissao}
                                error={touched.dtEmissao && errors.dtEmissao}
                            />
                        </View>
                        <View style={styleMeusDados.margemEsquerda}>    
                            <Text style={styleMeusDados.qualInformacao}>
                                Emissor:
                            </Text>
                            <TextInput
                                onChange={setFieldValue}
                                onTouch={setFieldTouched}
                                placeholder="Ex.: SSP"
                                emissor="emissor"
                                value={values.emissor}
                                error={touched.emissor && errors.emissor}
                            />
                        </View>
                        <View>
                            <Text style={styleMeusDados.qualInformacao}>
                                Dt. Nascimento:
                            </Text>
                            <TextInput
                                onChange={setFieldValue}
                                onTouch={setFieldTouched}
                                placeholder="Dt. de Nasc."
                                dtNascimento="dtNascimento"
                                value={values.dtNascimento}
                                error={touched.dtNascimento && errors.dtNascimento}
                            />
                        </View>
                        <View style={styleMeusDados.margemEsquerda}>
                            <Text style={styleMeusDados.qualInformacao}>
                                Idade:
                            </Text>
                            <TextInput
                                onChange={setFieldValue}
                                onTouch={setFieldTouched}
                                placeholder="Idade"
                                idade="idade"
                                value={values.idade}
                                error={touched.idade && errors.idade}
                            />
                        </View>
                        <View style={styleMeusDados.margemEsquerda}>
                            <Text style={styleMeusDados.qualInformacao}>
                                Genero:
                            </Text>
                            <TextInput
                                onChange={setFieldValue}
                                onTouch={setFieldTouched}
                                placeholder="Genero"
                                genero="genero"
                                value={values.genero}
                                error={touched.genero && errors.genero}
                            />
                        </View>                            
                        <View>
                            <Text style={styleMeusDados.qualInformacao}>
                                Nacionalidade:
                            </Text>
                            <TextInput
                                onChange={setFieldValue}
                                onTouch={setFieldTouched}
                                placeholder="Ex.: brasileiro"
                                nacionalidade="nacionalidade"
                                value={values.nacionalidade}
                                error={touched.nacionalidade && errors.nacionalidade}
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
                name: "Antonio Pereira de Souza",
                motherName: "Rosa Vieira de Souza",
                sus: "000 1242 8888 1023",
                cpf: "029.124.245-11",
                rg: "9283476",
                dtEmissao: "14/06/2015",
                emissor: "SSP",
                dtNascimento: "11/02/1989",
                idade: "31",
                genero: "Feminino",
                nacionalidade: "Brasileiro",
            }}
            onSubmit={onSubmit}
            render={renderInfo}
            validationSchema={Validation}
        />
    );
}
        
InfoPessoais.defaultProps = {
    initialValues: {},
    onSubmit: () => null,
};

export default InfoPessoais;