import * as React from 'react';
import { View, Button, TextInput, Alert } from 'react-native';
import styles from './styles/DefaultStyle';
class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
  }

  validateEmail = (email) => {
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  buttonClick = () => {
    if (!this.state.email.trim()) {
      Alert.alert('Alert', 'Enter Email Address');
      return;
    }

    if (!this.validateEmail(this.state.email)) {
      Alert.alert('Alert', 'Enter Valid Email');
      return;
    }

    if (!this.state.password.trim()) {
      Alert.alert('Alert', 'Enter Password');
      return;
    }
    if (this.state.password.trim().length < 6) {
      Alert.alert('Alert', 'Enter Password at least 6 Character Long');
      return;
    }
    this.props.navigation.navigate('Home', {
      userDetails: {
        email: this.state.email
      }
    });
  };

  render() {
    return (
      <View>
        <TextInput
          placeholder='Enter Email'
          style={styles.input}
          keyboardType='email-address'
          onChangeText={(text) => this.setState({ email: text })}
        />
        <TextInput
          placeholder='Enter Password'
          style={styles.input}
          secureTextEntry={true}
          onChangeText={(text) => {
            this.setState({ password: text });
          }}
        />
        <View style={{ alignItems: 'center' }}>
          <Button title='Login' onPress={() => this.buttonClick()} />
        </View>
      </View>
    );
  }
}
export default LoginScreen;
