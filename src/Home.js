import * as React from 'react';
import { View, TextInput, Button, Alert, Image } from 'react-native';
import styles from './styles/DefaultStyle';
import { launchImageLibrary } from 'react-native-image-picker';
class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      mno: '',
      address: '',
      fileUri: ''
    };
  }

  chooseImage = async () => {
    let options = {
      mediaType: 'photo',
      quality: 1
    };

    const result = await launchImageLibrary(options);
    this.setState({
      fileUri: result.assets[0].uri
    });
  };

  buttonClick = () => {
    if (!this.state.fname.trim()) {
      Alert.alert('Alert', 'Enter First Name');
      return;
    }
    if (!this.state.lname.trim()) {
      Alert.alert('Alert', 'Enter Last Name');
      return;
    }
    if (!this.state.mno.trim()) {
      Alert.alert('Alert', 'Enter Mobile Number');
      return;
    }
    if (this.state.mno.trim().length < 6) {
      Alert.alert('Alert', 'Enter Mobile Number at least 6 digits');
      return;
    }
    if (!this.state.address.trim()) {
      Alert.alert('Alert', 'Enter Address');
      return;
    }
    this.props.navigation.navigate('Profile Details', {
      userDetails: this.state
    });
  };

  render() {
    return (
      <View>
        {this.state.fileUri ? (
          <View style={styles.centerAlign}>
            <Image
              source={{ uri: this.state.fileUri }}
              style={styles.setImage}
            />
          </View>
        ) : null}
        <TextInput
          placeholder='First Name'
          style={styles.input}
          onChangeText={(text) => this.setState({ fname: text })}
        />
        <TextInput
          placeholder='Last Name'
          style={styles.input}
          onChangeText={(text) => this.setState({ lname: text })}
        />
        <TextInput
          placeholder='Mobile Number'
          style={styles.input}
          keyboardType='phone-pad'
          onChangeText={(text) => this.setState({ mno: text })}
        />
        <TextInput
          placeholder='Address'
          style={styles.textarea}
          multiline={true}
          onChangeText={(text) => this.setState({ address: text })}
        />
        <View style={[styles.centerAlign, styles.bottomMargin]}>
          <Button title='Choose Image' onPress={this.chooseImage} />
        </View>
        <View style={styles.centerAlign}>
          <Button title='Submit' onPress={this.buttonClick} />
        </View>
      </View>
    );
  }
}
export default HomeScreen;
