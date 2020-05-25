import { StyleSheet } from 'react-native';

const stylesRadioButton=StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    image: {
        height: 20,
        width: 20,
        marginRight: 3,
        backgroundColor: '#fff'
    },
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 7,
    },
    txt: {
        fontSize: 16,
    }
});

export default stylesRadioButton;