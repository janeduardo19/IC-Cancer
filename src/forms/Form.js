import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Formik } from 'formik';
import TextInput from '../components/TextInput';
import styleMeusDados from '../styles/styleMeusDados';
import Validation from './Validation';
import RadioButtonRaca from '../radioButton/RadioButtonRaca';
import RadioButtonEscola from '../radioButton/RadioButtonEscola';
import RadioButtonSimNao from '../radioButton/RadioButtonSimNao';

function Form({onSubmit, initialValues, style}) {
    const renderForm = ({
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
                            Informações Pessoais
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
                        <View style={styleMeusDados.margemEsquerda}>
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
                        <View>
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
                        <View>
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
                        <View style={styleMeusDados.margemEsquerda}>
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
                        <View>
                            <Text style={styleMeusDados.qualInformacao}>
                                Raça/Cor:
                            </Text>
                            <RadioButtonRaca />
                        </View>
                        <View>
                            <Text style={styleMeusDados.qualInformacao}>
                                Escolaridade:
                            </Text>
                            <RadioButtonEscola />
                        </View>             
                    </View>
                    <View style={[styleMeusDados.alignTitles, {marginTop: 4}]}>
                        <Text style={styleMeusDados.subTitulo}>
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
                    <View style={styleMeusDados.alignTitles}>
                        <Text style={styleMeusDados.subTitulo}>
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
                <View style={styleMeusDados.informacoes}>
                    <View style={styleMeusDados.alignTitles}>
                        <Text style={styleMeusDados.titulo}>
                            Dados de Anamnese/Cancêr de Colo do Útero
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
            logradouro: "Av. Morumbi, Qd. 15",
            numero: "21",
            complemento: "Proximo a loja do seu zé",
            bairro:"Jaiara",
            cidade:"Anápolis",
            uf: "GO",
            cep: "75191-525",
            email: "fadaraivosa@gmail.com",
            ddd: "62",
            celular: "99112-1234",
            dddTel: "61",
            telefone: "3303-6970",
            dtMestruacao: "23/04/2020",
            nomeLaboratorio: "Fleury",
            enderecoLaboratorio: "Rua Vera Cruz, Qd.40",
            bairroLaboratorio: "Itatiai",
            numeoroLaboratorio: "142",
            cidadeLaboratorio: "Goiânia",
            ufLaboratorio: "GO",
            compLaboratorio: "Ao lado do Ciquinhos",
        }}
            onSubmit={onSubmit}
            render={renderForm}
            validationSchema={Validation}
        />
    );
}
        
Form.defaultProps = {
    initialValues: {},
    onSubmit: () => null,
};

export default Form;