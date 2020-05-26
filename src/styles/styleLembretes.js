import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

const styleLembretes = StyleSheet.create({
    container: {
      padding: 5,
      backgroundColor: '#cfd8dc',
      borderRadius: 10,
      borderColor: '#cfd8dc',
      height: 80,
      borderBottomWidth: 1,
      shadowColor: '#000',
      shadowOpacity: 0.4,
      shadowOffset: {
        width: 4,
        height: 4,
      },
      elevation: 4,
    },
    title: {
      fontSize: 24,
    },
    date: {
      fontSize: 14,
      padding: 4,
    },
  });
  export default styleLembretes;