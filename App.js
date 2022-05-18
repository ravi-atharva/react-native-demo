import * as React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/Home';
import LoginScreen from './src/Login';
import Profile from './src/Profile';
import ProfileDetailScreen from './src/ProfileDetails';
import ActivityIndicatorPage from './src/ActivityIndicator';
import ButtonPage from './src/Button';
import FlatListPage from './src/FlatList';
import KeyboardAvoidingViewPage from './src/KeyboardAvoidingView';
import ModalScreen from './src/Modal';

const Stack = createNativeStackNavigator();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Login' component={LoginScreen} />
          <Stack.Screen
            name='Home'
            component={HomeScreen}
            options={{
              headerLeft: () => {
                return <View></View>;
              }
            }}
          />
          <Stack.Screen
            name='Profile Details'
            component={ProfileDetailScreen}
          />
          <Stack.Screen name='Profile' component={Profile} />
          <Stack.Screen
            name='Activity Indicator'
            component={ActivityIndicatorPage}
          />
          <Stack.Screen name='Button' component={ButtonPage} />
          <Stack.Screen name='Flat List' component={FlatListPage} />
          <Stack.Screen
            name='Keyboard Avoiding'
            component={KeyboardAvoidingViewPage}
          />
          <Stack.Screen
            name='Modal Open'
            component={ModalScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default App;
