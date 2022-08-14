import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/SplashScreen';
import myDrawer from './myDrawer';
import ProductView from './screens/ProductView';
import SignIn from './screens/SignIn';
import ProductDetail from './screens/ProductDetail';


const Stack = createStackNavigator();


const App = () => {
  return (
    <NavigationContainer> 

      <Stack.Navigator headerMode={'none'} initialRouteName="Splash Screen">
    <Stack.Screen name="Splash Screen" component={SplashScreen} />
    <Stack.Screen name="Home" component={myDrawer} />
    <Stack.Screen name="Product View" component={ProductView} />
    <Stack.Screen name="Sign In" component={SignIn} />
    <Stack.Screen name="Product Detail" component={ProductDetail} />

  </Stack.Navigator>
      
    </NavigationContainer>
  );
}

export default App