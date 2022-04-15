import * as React from 'react';
import { View, TextInput,Button,Alert} from 'react-native';
import styles from './styles/DefaultStyle';
class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fname:'', lname:'', mno:'', address:'' };
  }
  buttonClick = () => {
    if(!this.state.fname.trim()){
      Alert.alert('Alert','Enter First Name');
      return;
    }
    if(!this.state.lname.trim()){
      Alert.alert('Alert','Enter Last Name');
      return;
    }
    if(!this.state.mno.trim()){
      Alert.alert('Alert','Enter Mobile Number');
      return;
    }
    if(this.state.mno.trim().length < 6){
      Alert.alert('Alert','Enter Mobile Number at least 6 digits');
      return;
    }
    if(!this.state.address.trim()){
      Alert.alert('Alert','Enter Address');
      return;
    }
  };
  render() {
    return (
      <View>
        <TextInput placeholder='First Name' style={styles.input} onChangeText={(text) => this.setState({ fname: text })}/>
        <TextInput placeholder='Last Name' style={styles.input} onChangeText={(text) => this.setState({ lname: text })}/>
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
        <View style={styles.centerAlign}>
          <Button title='Submit' onPress={() => this.buttonClick()} />
        </View>
      </View>
    );
  }
}
export default HomeScreen;
