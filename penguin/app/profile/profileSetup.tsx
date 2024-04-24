import { StyleSheet, Animated, Alert, Button, SafeAreaView, ScrollView, Image, Pressable, TextInput, ImageBackground, Linking } from 'react-native';

import { Text, View } from '@/components/Themed';
import HomeButton from '@/components/HomeButton'
import { Link, router } from 'expo-router';
import React, { useCallback, useState, useEffect } from 'react'
import { TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import Apploading from 'expo-app-loading'
import { SplashScreen } from 'expo-router';


export default function profuleScreen() {

    let [fontsLoaded] = useFonts({
        'Lobster-Regular': require('./../../assets/fonts/Lobster1.4.otf'),
        'Cool-Vetica': require('./../../assets/fonts/coolvetica_rg.otf'),
        'Nexa-Heavy': require('./../../assets/fonts/Nexa-Heavy.ttf'),
    });

    const [appIsReady, setAppIsReady] = useState(false);
    useEffect(() => {
        async function prepare(){
            try {
                fontsLoaded
            } catch (e){
                console.warn(e);
            } finally{
                setAppIsReady(true);
            }
        }
  
        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if(appIsReady){
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);
  
    if(!appIsReady){
        return null;
    }

    // let [fontsLoaded] = useFonts({
    //     'Lobster-Regular': require('./../../assets/fonts/Lobster1.4.otf'),
    //     'Cool-Vetica': require('./../../assets/fonts/coolvetica_rg.otf'),
    //     'Nexa-Heavy': require('./../../assets/fonts/Nexa-Heavy.ttf'),
    // });
    // if (!fontsLoaded){
    //     return <Apploading/>;
    // }

    return(

        <View style={{ flex: 1 }}>

            <LinearGradient
                // the only reason you only see 2 colors blend is because the box is so large that
                // it does not fit entire blend on screen
                // can also blend more than 3 colors if desired
                colors={['#004C99', 'skyblue', 'white']} 
                style={styles.entireScreen}>
            </LinearGradient>

            <View style={styles.homeBox}>
                <TouchableOpacity onPress={() => router.replace('/login/AppLogin')}>
                <Text style={styles.homeBoxText}>Homepage</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.AdminBox}>
                <TouchableOpacity onPress={() => router.replace('/tabs/home')}>
                <Text style={styles.AdminBoxText}>Admin</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.penguinBox}>
                <TouchableOpacity onPress={() => router.replace('/profile/profileScreen')}>
                    <Text style={styles.penguinBoxText}>Penguin</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.contBox}>
                <TouchableOpacity onPress={() => router.replace('/profile/profileScreen')}>
                    <Text style={styles.contBoxText}>Continue!</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.interest1Box}>
                <TouchableOpacity onPress={() => Alert.alert("Interest 1 Pressed")}>
                    <Text style={styles.interest1BoxText}>Skiing</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.interest2Box}>
                <TouchableOpacity onPress={() => Alert.alert("Interest 2 Pressed")}>
                    <Text style={styles.interest2BoxText}>Beaching</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.interest3Box}>
                <TouchableOpacity onPress={() => Alert.alert("Interest 3 Pressed")}>
                    <Text style={styles.interest3BoxText}>Painting</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.interest4Box}>
                <TouchableOpacity onPress={() => Alert.alert("Interest 4 Pressed")}>
                    <Text style={styles.interest4BoxText}>Basketball</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.interest5Box}>
                <TouchableOpacity onPress={() => Alert.alert("Interest 5 pressed")}>
                    <Text style={styles.interest5BoxText}>Travel</Text>
                </TouchableOpacity>
            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    entireScreen: {
        paddingVertical: 600,
        paddingHorizontal: 100,
        // width: 6000,
        // height: 1000,
    },
    emailANDpassBox: {
        backgroundColor: '#E7EEF5',
        borderRadius: 12,
        paddingVertical: 8,
        paddingHorizontal: 10,
        //marginBottom: 30,
        width: 275,
        height: 32,
        left: 10,
        fontSize: 12
    },
    homeBox: {
        backgroundColor: 'transparent', 
        width: 90,
        height: 30,
        top: 10,
        left: 10,
        justifyContent: 'center', 
        alignItems: 'center', 
        position: 'absolute'
    },
    homeBoxText: {
        fontSize: 14,
        fontWeight: '300',
        color: 'white',
        left: 10,
        fontFamily: 'Nexa-Heavy'
    },
    AdminBox: {
        backgroundColor: 'transparent', 
        width: 90,
        height: 30,
        top: 10,
        right: 10,
        justifyContent: 'center', 
        alignItems: 'center', 
        position: 'absolute'
    },
    AdminBoxText: {
        fontSize: 14,
        fontWeight: '300',
        color: 'white',
        left: 10,
        fontFamily: 'Nexa-Heavy'
    },
    penguinBox: {
        backgroundColor: 'transparent', 
        width: 300, 
        height: 70, 
        // paddingHorizontal: 100,
        // paddingVertical: 100,
        top: 110,
        left: 50,
        //right: 50,
        justifyContent: 'center', 
        alignItems: 'center', 
        position: 'absolute'
    },
    penguinBoxText: {
        fontSize: 46,
        fontWeight: '800',
        color: 'white',
        fontFamily: 'Lobster-Regular'
    },
    contBox: {
        backgroundColor: 'transparent', 
        width: 300, 
        height: 70, 
        // paddingHorizontal: 100,
        // paddingVertical: 100,
        top: 200,
        left: 50,
        //right: 50,
        justifyContent: 'center', 
        alignItems: 'center', 
        position: 'absolute'
    },
    contBoxText: {
        fontSize: 46,
        fontWeight: '800',
        color: 'white',
        fontFamily: 'Lobster-Regular'
    },
    interest1Box: {
        backgroundColor: 'white', 
        borderRadius: 50,
        width: 65, 
        height: 65, 
        // paddingHorizontal: 100,
        // paddingVertical: 100,
        top: 322,
        left: 56,
        //right: 50,
        justifyContent: 'center', 
        alignItems: 'center', 
        position: 'absolute'
    },
    interest1BoxText: {
        fontSize: 13,
        fontWeight: 'normal',
        color: '#2893d1',
        fontFamily: 'Lobster-Regular'
    },
    interest2Box: {
        backgroundColor: 'white', 
        borderRadius: 50,
        width: 65, 
        height: 65, 
        // paddingHorizontal: 100,
        // paddingVertical: 100,
        top:295,
        left: 208,
        //right: 50,
        justifyContent: 'center', 
        alignItems: 'center', 
        position: 'absolute'
    },
    interest2BoxText: {
        fontSize: 13,
        fontWeight: 'normal',
        color: '#94d3f7',
        fontFamily: 'Lobster-Regular'
    },
    interest3Box: {
        backgroundColor: 'white', 
        borderRadius: 50,
        width: 75, 
        height: 75, 
        // paddingHorizontal: 100,
        // paddingVertical: 100,
        top: 531,
        left: 127,
        //right: 50,
        justifyContent: 'center', 
        alignItems: 'center', 
        position: 'absolute'
    },
    interest3BoxText: {
        fontSize: 17,
        fontWeight: 'normal',
        color: '#6085e6',
        fontFamily: 'Lobster-Regular'
    },
    interest4Box: {
        backgroundColor: 'white', 
        borderRadius: 50,
        width: 86, 
        height: 86, 
        // paddingHorizontal: 100,
        // paddingVertical: 100,
        top:367,
        left: 269,
        //right: 50,
        justifyContent: 'center', 
        alignItems: 'center', 
        position: 'absolute'
    },
    interest4BoxText: {
        fontSize: 15,
        fontWeight: 'normal',
        color: '#81b7d6',
        fontFamily: 'Lobster-Regular'
    },
    interest5Box: {
        backgroundColor: 'white', 
        borderRadius: 50,
        width: 50, 
        height: 50, 
        // paddingHorizontal: 100,
        // paddingVertical: 100,
        top: 451,
        left: 51,
        //right: 50,
        justifyContent: 'center', 
        alignItems: 'center', 
        position: 'absolute'
    },
    interest5BoxText: {
        fontSize: 13,
        fontWeight: 'normal',
        color: '#4793bf',
        fontFamily: 'Lobster-Regular'
    },
    emailBox: {
        backgroundColor: 'transparent', 
        width: 300, 
        height: 100, 
        top: 240,
        left: 50,
        justifyContent: 'center', 
        position: 'absolute',
        //opacity: .5
        // borderTopColor: '#2881D8',
        // borderLeftColor: '#2881D8',
        // borderRightColor: '#2881D8',
        // borderBottomColor: 'white',
        // borderWidth: 5
    },
    emailBoxText: {
        fontSize: 34,
        fontWeight: '800',
        color: 'white',
        left: 10,
        fontFamily: 'Nexa-Heavy'
    },
    signUpBox: {
        backgroundColor: 'transparent', 
        width: 300, 
        height: 100, 
        top: 430,
        left: 40,
        justifyContent: 'center', 
        alignItems: 'center', 
        position: 'absolute',
    },
    signUpBoxBtn: {
        backgroundColor: '#2881D8',
        borderRadius: 30,
        //flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 40,
    },
    signUpBoxText: {
        fontSize: 14,
        fontWeight: '800',
        color: 'white',
        //fontFamily: 'Nexa-Heavy'
    },
    signInBox: {
        backgroundColor: 'transparent', 
        width: 170, 
        height: 20, 
        top: 510,
        left: 42,
        //justifyContent: 'center', 
        alignItems: 'center', 
        position: 'absolute',
        //borderRadius: 30,
    },
    signInBoxText: {
        fontSize: 13,
        fontWeight: '800',
        color: 'white',
        //fontFamily: 'Nexa-Heavy'
    },
    icebergPic: {
        top: 220,
        height: 550,
        width: 300,
    }

  });