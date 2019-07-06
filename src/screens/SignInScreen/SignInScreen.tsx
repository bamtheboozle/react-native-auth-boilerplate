import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, AsyncStorage } from 'react-native';
import { Ionicons as Icon } from '@expo/vector-icons';
import { NavigationScreenProps } from 'react-navigation';
import Input from '../../components/Input/Input';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'rgb(255, 241, 199)',
  },
  icon: {},
  textInputs: {},
});

class SignInScreen extends React.Component<NavigationScreenProps> {
  state = {
    username: '',
    password: '',
    loginStatus: null,
  };

  onInputChange = (inputName: string, inputValue: string) => this.setState({ [inputName]: inputValue });

  render() {
    return (
      <View style={styles.view}>
        <View style={styles.icon}>
          <Icon name="ios-analytics" size={100} color="#fb8721" />
        </View>
        <View style={styles.textInputs}>
          <Input label="Username" type="text" onChangeText={value => this.onInputChange('username', value)} />
          <Input label="Password" type="password" onChangeText={value => this.onInputChange('password', value)} />
          {this.state.loginStatus === 'failed' && <Text>Wrong username or password!</Text>}
          <Button title="Sign in!" onPress={this.signIn} />
        </View>
        <View>
          <Text>some other shit</Text>
        </View>
      </View>
    );
  }

  checkUserPassword = (user: string, password: string) => user === 'admin' && password === 'admin';

  signIn = async () => {
    const { username, password } = this.state;
    if (this.checkUserPassword(username, password)) {
      await AsyncStorage.setItem('userToken', 'abc');
      this.props.navigation.navigate('App');
    } else {
      this.setState({
        loginStatus: 'failed',
      });
    }
  };
}

export default SignInScreen;
