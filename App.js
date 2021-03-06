import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/home';
import Profile from './components/profile';
import About from './components/about';


const Stack = createNativeStackNavigator();
const screens = [
    {
        name: 'Home',
        component: Home,
        key: 1,
    },
    {
        name: 'Profile',
        component: Profile,
        key: 2,
    },
    {
        name: 'About',
        component: About,
        key: 3,
    }
]

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {screens.map(screen => (
          <Stack.Screen
            name={screen.name}
            component={screen.component}
          /> 
        ))}       
      </Stack.Navigator>
    </NavigationContainer>
  );
}