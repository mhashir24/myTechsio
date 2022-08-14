import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

import{
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions
} from 'react-native';

const screenWidth = Dimensions.get('screen').width


import Fontisto from 'react-native-vector-icons/Fontisto';

import logo from '../../assets/logo.png';
import poster1 from '../../assets/poster1.png';
import poster2 from '../../assets/poster2.png';
import poster3 from '../../assets/poster3.png';
import product1 from '../../assets/product1.png';
import product2 from '../../assets/product2.png';
import product3 from '../../assets/product3.png';
import product4 from '../../assets/product4.png';
import product5 from '../../assets/product5.png';
import product6 from '../../assets/product6.png';
import product7 from '../../assets/product7.png';
import product8 from '../../assets/product8.png';
import search from '../../assets/search.png';

const productdata1 = [
    {
        id: '0',
        img1: product1,
        text1: 'BEIN CONNECT',
        details: {    
            id: '0',
            productimg: product1,
            text11: 'BEIN CONNECT',
            text2: '(1 Day)',
            text3: '1000 Pts',
            text4: '5$'
        }
    },

    {
        id: '1',
        img1: product2,
        text1: 'PUBG MOBILE',
        details: {    
            id: '1',
            productimg: product2,
            text11: 'PUBG MOBILE',
            text2: '(1 Day)',
            text3: '1400 Pts',
            text4: '15$'
        }
    },
    {
        id: '2',
        img1: product3,
        text1: 'FREE FIRE',
    },

    {
        id: '3',
        img1: product4,
        text1: 'PlayStation Plus'
    },

    {
        id: '4',
        img1: product5,
        text1: 'ANGHAMI',
    },

    {
        id: '5',
        img1: product6,
        text1: 'SCARDU'
    },
    {
        id: '6',
        img1: product7,
        text1: 'FORTNITE'
    },

    {
        id: '7',
        img1: product8,
        text1: 'CashU'
    }

]

const HomeScreen = () => {
    const navigation = useNavigation()

    const openMyDrawer = () => {
      navigation.openDrawer()
    }

  return (

    <View style={{flex:1, borderWidth:1}}>
        <View style={{borderBottomWidth:2, flexDirection:'row', alignItems:'center', borderBottomColor:'#dcdcdc'}}>
        <TouchableOpacity onPress = {() => openMyDrawer()}>
            <Fontisto
            name = {'nav-icon-list-a'}
            size={20}
            color={'#1e90ff'}
            style={{paddingLeft:25}}
            />
            </TouchableOpacity>
            <Image
            source={logo}
            style={{width:100, height:60, marginLeft:90}}
            
            />
        </View>

        <View style={{ marginHorizontal:5, borderRadius:50, marginTop:5}}>
            <LinearGradient 
            style={{justifyContent:'center', alignItems:'center', borderRadius:50}}
                colors={['#00bfff',  '#00fa9a']}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 1 }}>
                <Text style={{color:'white',  fontSize:17}}>
                {'Direct Top Up'}
                </Text>
            </LinearGradient>
        </View>

        <View style={{marginTop:7, paddingHorizontal:20, flexDirection:'row', justifyContent:'space-between'}}>
        <View style={{flexDirection:'column'}}>
            <Image
            source={poster1}
            style={{width:90, height:100}}
            />
            <LinearGradient 
        style={{justifyContent:'center', alignItems:'center', borderRadius:20, marginTop:-20, marginHorizontal:5}}
            colors={['#00bfff',  '#9400d3']}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}>
            <Text style={{color:'white', fontSize:10}}>
            {'Razer Gold'}
             </Text>
        </LinearGradient>
            </View>
            

            <View style={{flexDirection:'column'}}>
            <Image
            source={poster2}
            style={{width:90, height:100}}
            />
            <LinearGradient 
        style={{justifyContent:'center', alignItems:'center', borderRadius:20, marginTop:-20, marginHorizontal:5}}
            colors={['#00bfff',  '#9400d3']}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}>
            <Text style={{color:'white', fontSize:10}}>
            {'Mobile Legends'}
             </Text>
        </LinearGradient>
            </View>
            
            <View style={{flexDirection:'column'}}>
            <Image
            source={poster3}
            style={{width:90, height:100}}
            />
            <LinearGradient 
        style={{justifyContent:'center', alignItems:'center', borderRadius:20, marginTop:-20, marginHorizontal:5}}
            colors={['#00bfff',  '#9400d3']}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}>
            <Text style={{color:'white', fontSize:10}}>
            {'Free Fire'}
             </Text>
        </LinearGradient>
            </View>

        </View>

        <View style={{ paddingHorizontal: 10, position: 'relative' }}>
              <View style={{ position: 'absolute', zIndex: 1, left: 300, top: -120 }}>
                <Image style={{ width: 45, height: 45, borderRadius: 17 }}
                  source={search}
                />
              </View>
              </View>

        <View style={{ marginHorizontal:5, borderRadius:50, marginTop:15, marginBottom:5}}>
        <LinearGradient 
        style={{justifyContent:'center', alignItems:'center', borderRadius:50}}
            colors={['#00bfff',  '#9400d3']}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}>
            <Text style={{color:'white',  fontSize:17}}>
            {'Gift Cards'}
             </Text>
        </LinearGradient>
        </View>

            <View style={{justifyContent:'center', alignItems:'center', marginLeft:-20, marginBottom:240, marginRight:10}}>
            
            <FlatList
            data = {productdata1}
            keyExtractor = {(item) => item.id}
            contentContainerStyle={{ flexDirection: 'row',flexWrap: 'wrap', justifyContent: 'space-evenly' }}
            renderItem={({item}) =>{
                return (
                    <View style={{flexDirection:'row',width: screenWidth / 3 ,marginHorizontal:20, marginTop:5,marginBottom:20 ,justifyContent:'space-between'}}>
                    <TouchableOpacity onPress = {() => navigation.navigate('Product View',{data: item})}>
                    <View>
                    <Image           
                    source={item.img1}
                    style={{width:150, height:225, borderRadius:15}}
                    />
                <LinearGradient style={{justifyContent:'center', alignItems:'center', borderRadius:20, marginTop:-35, marginHorizontal:25}}
                    colors={['black',  '#b22222']}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 1 }}>
                    <Text style={{color:'white', fontSize:13, fontWeight:'bold'}}>
                    {item.text1}
                     </Text>
                </LinearGradient>

                    </View>
                    </TouchableOpacity>

 
                    </View>
                    
          )
            }}

            />

            

</View>






    </View>
    );
}

export default HomeScreen