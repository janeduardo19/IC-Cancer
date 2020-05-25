import { StyleSheet } from 'react-native';

const styleMeusDados=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00bfff',
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 24,
    },
    subTitulo: {
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 10
    },
    alignTitles: {
        alignContent: 'center',
        alignItems: 'center', 
        width: '100%',
    },
    informacoes: {
        borderWidth: 1,
        borderTopColor: '#000',
        borderBottomColor: '#000',
        width: '100%',
        padding: 10,
    },
    qualInformacao: {
        fontSize: 17,
        fontWeight: 'bold',
        marginTop: 5
    },
    input: {
        width: '100%',
        height: 30,
        borderLeftWidth: 1.5,
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        borderRadius: 3,
        padding: 3,
        fontSize: 15,
        backgroundColor: '#fff'
    },
    diferentDirection: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
    },
    margemEsquerda: {
        marginLeft: 8
    },
    borda: {
        alignContent: 'center',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 3,
        padding: 3,
        marginTop: 5,
        backgroundColor: '#fff'
    },
    error: {
        marginTop: 8,
        color: 'red',
        fontSize: 15,
    },
    submit: {
        height: 50,
        backgroundColor: '#836FFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        marginTop: 10,
        borderRadius: 3,
    },
    submitText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    submitDisabled: {
        backgroundColor: '#d1cfcf',
    },
});

export default styleMeusDados;