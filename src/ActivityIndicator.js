import * as React from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from './styles/DefaultStyle';
class ActivityIndicatorPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator />
        <ActivityIndicator size='large' />
      </View>
    );
  }
}
export default ActivityIndicatorPage;
