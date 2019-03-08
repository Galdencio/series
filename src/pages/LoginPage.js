import React, { Component } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

import FormRow from '../components/FormRow';

export default class LoginPage extends Component {
  render() {
    return (
      <View>
        <FormRow>
          <TextInput
            style={styles.input}
            placeholder="user@mail.com" />
        </FormRow>
        <FormRow>
          <TextInput
            secureTextEntry
            placeholder="******" />
        </FormRow>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5
  }
});