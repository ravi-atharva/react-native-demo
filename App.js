import * as React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/Home';
import LoginScreen from './src/Login';
import ProfileDetailScreen from './src/ProfileDetails';
import Profile from './src/Profile';

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
          <Stack.Screen
            name='Profile'
            component={Profile}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default App;
