import React, { useState } from 'react';
import PasswordInputText from 'react-native-hide-show-password-input';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';



import{
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput
} from 'react-native';

import Fontisto from 'react-native-vector-icons/Fontisto';
import logo from '../../assets/logo.png';




const SignIn = () => {
    const navigation = useNavigation()
  const [password, setPassword] = useState('')

    return(
        <View style={{flex:1, backgroundColor:'white'}}>

            <View style={{flexDirection:'row',alignItems:'center', backgroundColor:'white'}}>
             <TouchableOpacity onPress ={() => navigation.navigate('Home')}>   
            <Fontisto
            name = {'arrow-left'}
            size={20}
            color={'#1e90ff'}
            style={{paddingLeft:30}}
            />
            </TouchableOpacity>
            <Image
            source={logo}
            style={{width:120, height:50, marginLeft:80}}
            />
            </View>

            <View style={{justifyContent:'center', alignItems:'center', marginTop:10}}>
                <Text style={{fontSize:24, fontWeight:'bold'}}>
                    {'Welcome Back,'}
                </Text>

                <Text style={{fontWeight:'bold', fontSize:15}}>
                    {'Sign in to continue'}
                </Text>
            </View>

            <View style={{borderBottomWidth:1, marginHorizontal:20, borderBottomColor:'#dcdcdc'}}>
                <TextInput
                
                placeholder = {'E m a i l'}
                keyboardType = {'email-address'}
                />
            </View>
                
            <View style={{flexDirection:'row', marginTop:40, alignItems:'center'}}>

                <View style={{borderBottomWidth:1.5, borderBottomColor:'#87cefa', width:150, marginHorizontal:10}}>

                </View>

                <Text style={{fontSize:18}}>
                    {'Or'}
                </Text>

                <View style={{borderBottomWidth:1.5, borderBottomColor:'#87cefa', width:150, marginHorizontal:10}}>

                </View>

            </View>

            <View style={{ marginHorizontal:20, marginTop: -15, 
                borderBottomColor: '#dcdcdc' }}>
            <PasswordInputText
              iconColor={'#1e90ff'}
              iconSize={20}
              secureTextEntry
              value={password}
              onChangeText={(value) => setPassword({ value })}

            />
          </View>

          <View style={{marginLeft:220, marginTop:20}}>
                  <Text style={{fontWeight:'bold', fontSize:15, color:'#1e90ff'}}>
                      {'Forgot Password ?'}
                  </Text>
          </View>

        <TouchableOpacity>
        <View style={{ marginHorizontal:5, borderRadius:50, marginTop:20}}>
        <LinearGradient 
        style={{justifyContent:'center', alignItems:'center', borderRadius:50, padding:15}}
            colors={['#00bfff',  '#9400d3']}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}>
            <Text style={{color:'white',  fontSize:15}}>
            {'Sign In'}
             </Text>
        </LinearGradient>
        </View>
        </TouchableOpacity>

        <View style={{flexDirection:'row', margin:20, justifyContent:'center', alignItems:'center'}}>
            <Text style={{color:'#808080', fontWeight:'bold', fontSize:16}}>
                {'New User ?'}
            </Text>
            <Text style={{color:'#1e90ff', fontWeight:'bold', marginLeft:5, fontSize:16}}>
                {'Sign Up'}
            </Text>
        </View>







        </View>
    
    




    );
}

export default SignIn
