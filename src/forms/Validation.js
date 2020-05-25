import * as Yup from 'yup';

export default Yup.object().shape({
    name: Yup.string()
        .min(4, 'Mínimo 4 caracteres'),
    email: Yup.string()
        .email('E-mail inválido')
        .required('E-mail obrigatório'),
    password: Yup.string()
        .min(4, 'Mínimo 4 caracteres')
        .required('Obrigatório'),
    passwordConfirm: Yup.string()
        .min(4, 'Mínimo 4 caracteres')
        .oneOf([Yup.ref('password'), null], 'As senhas não correspondem')
        .required('Obrigatório'),
    numeroSus: Yup.string()
        .min(15, 'Mínimo 15 caracteres')
        .max(15, 'Máximo 15 caracteres')
        .required('Obrigatório'),
    numeroCpf: Yup.string()
        .min(11, 'Mínimo 11 caracteres')
        .max(11, 'Máximo 11 caracteres')
        .required('Obrigatório'),
    numeroCpf: Yup.string()
        .min(7, 'Mínimo 7 caracteres')
        .max(7, 'Máximo 7 caracteres')
        .required('Obrigatório'), 
});