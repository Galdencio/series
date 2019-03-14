import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, Button, ActivityIndicator, Alert } from 'react-native';

import firebase from 'firebase';

import { tryLogin } from '../store/actions';

import FormRow from '../components/FormRow';

import { connect } from 'react-redux';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: '',
      pass: '',
      isLoading: false,
      message: ''
    }
  }

  componentDidMount() {
    const config = {
      apiKey: "AIzaSyCtwI22NnlgnMoRS0S0H83nC7mgnnGUUPc",
      authDomain: "series-b6dd4.firebaseapp.com",
      databaseURL: "https://series-b6dd4.firebaseio.com",
      projectId: "series-b6dd4",
      storageBucket: "series-b6dd4.appspot.com",
      messagingSenderId: "596069366267"
    };
    firebase.initializeApp(config);
  }

  onChangeHandler(field, value) {
    this.setState({ [field]: value });
  }

  tryLogin() {
    this.setState({ isLoading: true, message: '' });
    const { mail: email, pass: password } = this.state;

    this.props.tryLogin({ email, password })
      .then(user => {
        if (user)
          return this.props.navigation.replace('Main');

        this.setState({ isLoading: false, message: '' });
      }).catch(error => {
        this.setState({ isLoading: false, message: this.getMessageByErrorCode(error.code) });
      });
  }

  getMessageByErrorCode(errorCode) {
    switch (errorCode) {
      case 'auth/wrong-password':
        return 'Senha incorreta!';
      case 'auth/user-not-found':
        return 'Usuário não encontrado!';
      default:
        return 'Erro desconhecido!';
    }
  }

  renderMessage() {
    const { message } = this.state;
    if (!message)
      return null;

    return (
      <View>
        <Text>{message}</Text>
      </View>
    )

  }

  renderButton() {
    if (this.state.isLoading)
      return <ActivityIndicator />

    return (<Button style={styles.button} onPress={() => this.tryLogin()} title="Entrar" />);
  }

  render() {
    return (
      <View style={styles.container}>
        <FormRow first>
          <TextInput
            style={styles.input}
            placeholder="user@mail.com"
            value={this.state.mail}
            onChangeText={value => this.onChangeHandler('mail', value)}
            keyboardType="email-address"
            autoCapitalize="none" />
        </FormRow>
        <FormRow last>
          <TextInput
            secureTextEntry
            placeholder="******"
            value={this.state.pass}
            onChangeText={value => this.onChangeHandler('pass', value)} />
        </FormRow>
        {this.renderButton()}
        {this.renderMessage()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10
  },
  input: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5
  }
});

export default connect(null, { tryLogin })(LoginPage);