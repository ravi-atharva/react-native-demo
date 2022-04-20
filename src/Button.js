import * as React from 'react';
import { View, Button, Alert } from 'react-native';
class ButtonPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Button title='Click' />
        <Button
          title='Click'
          color='#DEDEDE'
          onPress={() => {
            Alert.alert('Button', 'Click');
          }}
        />
      </View>
    );
  }
}
export default ButtonPage;
