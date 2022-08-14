import * as React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    Image
}
    from "react-native";

import { useNavigation } from "@react-navigation/native";
import numnum from '../assets/numnum.png';
import logo from '../assets/logo.png';
import careem from '../assets/careem.png';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const DrawerComponent = ({ }) => {
    const navigation = useNavigation()

    return (

        <View style={{ flex: 1 }}>
            <View style={{ borderBottomWidth: 0.7, borderBottomEndRadius: 20, borderBottomStartRadius: 20, flexDirection: 'row', borderBottomColor: '#c0c0c0' }}>
                <TouchableOpacity>
                    <Octicons
                        name={'bell'}
                        size={25}
                        color={'#1e90ff'}
                        style={{ marginLeft: 240, marginTop: 10, marginBottom: 30 }}
                    />
                </TouchableOpacity>
                <Image
                    source={numnum}
                    style={{ width: 10, height: 13, borderRadius: 10, marginTop: 10, marginLeft: -4 }}

                />
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('Sign In')}>
                <View style={{ flexDirection: 'row', paddingTop: 30, paddingLeft: 40, alignItems: 'center' }}>
                    <Octicons
                        name={'sign-in'}
                        size={25}
                        color={'#1e90ff'}
                    />

                    <Text style={{ paddingLeft: 43, fontSize: 16 }}>
                        {'Sign In'}
                    </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Sign In')}>
                <View style={{ flexDirection: 'row', paddingTop: 30, paddingLeft: 40, alignItems: 'center' }}>
                    <FontAwesome5
                        name={'wallet'}
                        size={25}
                        color={'#1e90ff'}
                    />

                    <Text style={{ paddingLeft: 40, fontSize: 16 }}>
                        {'Wallet'}
                    </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={{ flexDirection: 'row', paddingTop: 30, paddingLeft: 40, alignItems: 'center' }}>
                    <FontAwesome
                        name={'cc-visa'}
                        size={25}
                        color={'#1e90ff'}
                    />

                    <Text style={{ paddingLeft: 35, fontSize: 16 }}>
                        {'Master Cards'}
                    </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={{ flexDirection: 'row', paddingTop: 30, paddingLeft: 40, alignItems: 'center' }}>
                    <Entypo
                        name={'location'}
                        size={25}
                        color={'#1e90ff'}
                    />

                    <Text style={{ paddingLeft: 40, fontSize: 16 }}>
                        {'Vendor location'}
                    </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={{ flexDirection: 'row', paddingTop: 30, paddingLeft: 40, alignItems: 'center' }}>
                    <MaterialCommunityIcons
                        name={'help-circle'}
                        size={25}
                        color={'#1e90ff'}
                    />

                    <Text style={{ paddingLeft: 40, fontSize: 16 }}>
                        {'Help'}
                    </Text>
                </View>
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 170, marginBottom: 5 }}>
                <Image
                    source={logo}
                    style={{ width: 100, height: 50 }}
                />

                <Image
                    source={careem}
                    style={{ width: 100, height: 50, marginLeft: 20 }}
                />
            </View>

            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop:-5 }}>
                <Text style={{ color: '#778899', fontWeight:'bold' }}>
                    {'contact@techsiocc.com'}
                </Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginTop:2 }}>
                <Text style={{ color: '#778899', fontWeight:'bold' }}>
                    {'Terms & Conditions'}
                </Text>

                <Text style={{ color: '#778899', fontWeight:'bold'  }}>
                    {'1.3.4'}
                </Text>
            </View>





        </View>


    );
};

export default DrawerComponent