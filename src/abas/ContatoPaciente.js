import React, {useCallback, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, ScrollView} from 'react-native';

import Contato from '../forms/Contato';

const ContatoPaciente = () =>{
    const [formData, setFormData] = useState(JSON.stringify('{}'));

    const onSubmit = useCallback(async (values, bag) => {
        try {
        setFormData(JSON.stringify(values, null, 2));
        } catch (e) {
        bag.setErrors(e);
        } finally {
        bag.setSubmitting(false);
        }
    }, []);

    return (
        <ScrollView>
            <SafeAreaView style={styles.safeArea}>
                <Contato onSubmit={onSubmit} />
                <Text style={styles.values}>{formData}</Text>
            </SafeAreaView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
    },
    values: {
      fontSize: 16,
      marginHorizontal: 6,
      marginTop: 15,
      marginBottom: 40,
    },
});

export default ContatoPaciente;