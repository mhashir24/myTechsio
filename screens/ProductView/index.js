import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';



import {
    View,
    Image,
    Text,
    FlatList,
    TouchableOpacity
} from 'react-native';

import Fontisto from 'react-native-vector-icons/Fontisto';
import logo from '../../assets/logo.png';
import product1 from '../../assets/product1.png';


const productdata = [
    {
        id: '0',
        text2: '(1 Day)',
        text3: '1000 Pts',
        text4: '5$'
    },

    {
        id: '1',
        text2: '(1 Month)',
        text3: '2400 Pts',
        text4: '12$'
    },

    {
        id: '2',
        text2: '(1 Year)',
        text3: '2500 Pts',
        text4: '50$'
    },
    {
        id: '3',
        text2: '(2 Year)',
        text3: '2600 Pts',
        text4: '80$'
    }
]


const ProductView = ({ route }) => {
    const [data, setData] = useState(null)

    useEffect(() => {
        if (route && route.params){
            const { params } = route
            setData (params.data)
        }
    }, [route])

    const navigation = useNavigation()
    
    return (

        <View style={{flex:1}}>
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

            <View style={{paddingLeft:20, backgroundColor:'white'}}>
                <Text style={{fontSize:19}}>
                    {data?.text1}
                </Text>
            </View>

            <View style={{flexDirection:'row', alignItems:'center'}}>
                <Image
                source={data?.img1}
                style={{width:60, height:60, margin:20, borderRadius:30}}
                />

                <Text style={{fontSize:17, color:'#778899'}}>
                    {data?.text1}
                </Text>
            </View>

            <View style={{marginTop:-10, marginBottom:180}}>

            <FlatList

            data = {productdata}
            keyExtractor={item => item.id}
            numColumns={2}
            renderItem = {({ item }) => {
                return(
                    <View style={{marginHorizontal:15 ,justifyContent:'space-between', marginBottom:10}}>
                    <TouchableOpacity onPress = {() => navigation.navigate('Product Detail', {data: item})}>

                    <View style={{justifyContent:'center', alignItems:'center'}}>
                    <Image           
                    source={data?.img1}
                    style={{width:150, height:225, borderRadius:15}}
                    />

                    <View style={{position:'absolute', zIndex:1, top:140, alignItems:'center', opacity:0.7, borderWidth:1, backgroundColor:'black', paddingVertical:2, paddingHorizontal:20, borderRadius:5}}>

                    <Text style={{color:'white', fontSize:13, fontWeight:'bold'}}>
                    {data?.text1}
                    </Text>
                    <Text style={{color:'white', fontSize:13, fontWeight:'bold'}}>
                        {item.text2}
                    </Text>
                    
                    </View>


                    <View style={{position:'absolute', zIndex:1, top:185, opacity:0.7, backgroundColor:'black', alignItems:'center',paddingVertical:2, paddingHorizontal:10, borderRadius:5}}>

                    <Text style={{color:'#ffd700', fontSize:15, fontWeight:'bold'}}>
                        {item.text3}
                    </Text>
                    
                    </View>

                    </View>
                    <View style={{position:'absolute', zIndex:1 ,top:10,opacity:0.7, backgroundColor:'black', paddingVertical:5, paddingHorizontal:7, borderRadius:20, marginLeft:110}}>

                    <Text style={{color:'white', fontSize:12, fontWeight:'bold'}}>
                    {item.text4}
                    </Text>

                    </View>
        
        
                   </TouchableOpacity>




                    </View>
                )
            }}

/>



            



</View>



        </View>

        );
    };
    
    export default ProductView