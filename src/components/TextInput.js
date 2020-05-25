import React from 'react';
import {View, Text, StyleSheet, TextInput as RNTextInput} from 'react-native';
import styleMeusDados from '../styles/styleMeusDados';

function TextInput({
  style,
  inputStyle,
  error,
  errorStyle,
  onChange,
  onTouch,
  name,
  ...attributes
}) {
    const onChangeText = text => {
        onChange(name, text);
    };
    const onBlurText = () => {
        onTouch(name);
    };

    return (
        <View>
            <View>
            <RNTextInput
                style={styleMeusDados.input}
                onChangeText={onChangeText}
                onBlur={onBlurText}
                underlineColorAndroid="transparent"
                {...attributes}
            />
            </View>
            {error ? (
            <Text style={StyleSheet.flatten([styleMeusDados.error, errorStyle])}>
                {error}
            </Text>
            ) : null}
        </View>
    );
}

export default TextInput;