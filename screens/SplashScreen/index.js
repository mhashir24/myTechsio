import React, { useEffect} from 'react';
import {
  View,
  Image
} from 'react-native';

import { useNavigation } from "@react-navigation/native";


import {
  BallIndicator
} from 'react-native-indicators';

import logo from '../../assets/logo.png';

const SplashScreen  = ({}) => {
    const navigation = useNavigation()

    useEffect(() => {
        setTimeout(() =>{
            navigation.navigate('Home')
        }, 3000);
    }, [])
  return (

    <View style={{flex:1, backgroundColor:'white'}}>

      <View style={{alignItems:'center', justifyContent:'center'}}>
        <Image
        source={logo}
        style={{width:220, height:220, marginTop: 200}}
        />
      </View>

      <View style={{marginTop:120}}>
      <BallIndicator color='#1e90ff'/>

      </View>


    </View>

  );
};



export default SplashScreen;
