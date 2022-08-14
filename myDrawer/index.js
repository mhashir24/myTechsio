import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import DrawerComponent from '../DrawerComponent';


const Drawer = createDrawerNavigator();

const myDrawer = () => {
  return (
    <Drawer.Navigator
    drawerContent = {props => <DrawerComponent {...props}/>}
    initialRouteName="Splash Screen">
        <Drawer.Screen name="Home Screen" component={HomeScreen} />
      </Drawer.Navigator>
  );
}

export default myDrawer