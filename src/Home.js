import * as React from 'react';
import { View, Button } from 'react-native';
import styles from './styles/DefaultStyle';
class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.setMargin}>
        <View style={[styles.centerAlign,styles.bottomMargin]}>
          <Button
            title='Profile'
            onPress={() => {
              this.props.navigation.navigate('Profile');
            }}
          />
        </View>
        <View style={[styles.centerAlign,styles.bottomMargin]}>
          <Button
            title='Activity Indicator'
            onPress={() => {
              this.props.navigation.navigate('Profile');
            }}
          />
        </View>
      </View>
      // </View>
    );
  }
}
export default HomeScreen;
