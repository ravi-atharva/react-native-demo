import * as React from 'react';
import { View, Text,Image } from 'react-native';
import styles from './styles/DefaultStyle';
class ProfileDetailScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let data = this.props.route.params;
    return (
      <View style={styles.setMargin}>
        <View style={[styles.centerAlign, styles.bottomMargin]}>
          { data.userDetails.fileUri  ? <Image source={{ uri: data.userDetails.fileUri }} style={styles.setImage} /> : null}
        </View>
        <Text style={styles.bottomMargin}>
          First Name: {data.userDetails.fname}
        </Text>
        <Text style={styles.bottomMargin}>
          Last Name: {data.userDetails.lname}
        </Text>
        <Text style={styles.bottomMargin}>
          Mobile Number: {data.userDetails.mno}
        </Text>
        <Text style={styles.bottomMargin}>
          Address: {data.userDetails.address}
        </Text>
      </View>
    );
  }
}
export default ProfileDetailScreen;
