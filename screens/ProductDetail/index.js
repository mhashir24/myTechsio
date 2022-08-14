import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';



import{
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

import product1 from '../../assets/product1.png';
import Fontisto from 'react-native-vector-icons/Fontisto';
import logo from '../../assets/logo.png';

const ProductDetail = ( {route} ) => {
    const navigation = useNavigation()

    const [data, setData] = useState(null)

    useEffect(() => {
        if (route && route.params){
            const { params } = route
            setData (params.data)
        }
    }, [route])

    return(
        <View style={{flex:1, backgroundColor:'white' }}>
             <View style={{flexDirection:'row',alignItems:'center', backgroundColor:'white'}}>
             <TouchableOpacity onPress ={() => navigation.navigate('Product View')}>   
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

            <View style={{paddingLeft:20, backgroundColor:'white', paddingBottom:10, borderBottomWidth:1, borderBottomColor:'#dcdcdc'}}>
                <Text style={{fontSize:19}}>
                    {'Product Details'}
                </Text>
            </View>

            <View style={{justifyContent:'center', alignItems:'center', marginTop:10}}>
                    <Image           
                    source={product1}
                    style={{width:150, height:225, borderRadius:15}}
                    />
            </View>

            <View style={{flexDirection:'row', paddingLeft:20, paddingTop:15}}>
                <Text style={{fontSize:16}}>
                    {data?.text11}
                </Text>
                <Text style={{fontSize:16, marginLeft:10}}>
                    {data?.text2}
                </Text>
            </View>

            <View style={{ marginRight:240, marginTop:5 , justifyContent:'center', alignItems:'center'}}>
        <LinearGradient 
        style={{ borderRadius:50, padding:5, paddingHorizontal:10}}
            colors={['#00bfff',  '#9400d3']}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}>
            <Text style={{color:'white',  fontSize:15}}>
            {data?.text3}
             </Text>
        </LinearGradient>
        </View>

        <View style={{paddingLeft:35, paddingTop:10}}>
            <Text>
                {'How to subscribe'}
            </Text>

            <Text>
                {'1. Enter the code'}
            </Text>

            <View style={{flexDirection:'row'}}>
            <Text>
                {'Visit the'}
            </Text>

            <Text style={{marginHorizontal:5}}>
                {'BEIN CONNECT'}
            </Text>

            <Text>
                {'website and click'}
            </Text>
            </View>

            <Text>
                {'"Subscibe" or enter the following link'}
            </Text>

            <View style={{flexDirection:'row'}}>
            <Text>
                {'https://'}
            </Text>

            <Text>
                {'BEIN CONNECT'}
            </Text>

            <Text>
                {'.com/subscribe'}
            </Text>
            </View>

            <Text>
                {'2. Create an account'}
            </Text>

            <Text>
                {'3. Confirm the account'}
            </Text>

            <Text>
                {'Congratulations'}
            </Text>
        </View>





        </View>
    
    




    );
}

export default ProductDetail
