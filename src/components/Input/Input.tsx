import React from 'react';
import { Dimensions, View, StyleSheet, Text, TextInput } from 'react-native';

interface InputProps {
  label: string;
  type: 'password' | 'text';
  onChangeText?: (text: string) => void;
}
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  view: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  label: {
    paddingBottom: 5,
    fontFamily: 'inter-semi-bold',
  },
  textInput: {
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
    width: width * 0.8,
    // outlineStyle: 'none',
  },
});

const Input = ({ label, type, onChangeText }: InputProps) => (
  <View style={styles.view}>
    <Text style={styles.label}>{label.toUpperCase()}</Text>
    <TextInput secureTextEntry={type === 'password'} style={styles.textInput} onChangeText={onChangeText} />
  </View>
);

export default Input;
