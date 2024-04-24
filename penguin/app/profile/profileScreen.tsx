import { StyleSheet, Animated, Alert, Button, SafeAreaView, ScrollView, Image, Pressable, TextInput, ImageBackground } from 'react-native';

import { Text, View } from '@/components/Themed';
import HomeButton from '@/components/HomeButton'
import { Link, router } from 'expo-router';
import React, { useCallback, useState, useEffect } from 'react'
import { TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import Apploading from 'expo-app-loading'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { SplashScreen } from 'expo-router';


export default function verificationCodeScreen() {


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

            <View style={styles.entireScreen}>
                <View style={styles.leftEyeBox}></View>
                <View style={styles.rightEyeBox}></View>
            </View>
            
            <View style={styles.verifyLabelBox}>
                <Text style={styles.verifyLabelBoxText}>Create Profile</Text>
            </View>

            <View style={styles.ageBox}>
                {/* <TouchableOpacity onPress={() => router.replace('/profile/profileSetup')}></TouchableOpacity> */}
                <Text style={styles.ageBoxText}>Age</Text>
            </View>

            <View style={styles.gradeBox}>
                {/* <TouchableOpacity onPress={() => router.replace('/profile/profileSetup')}></TouchableOpacity> */}
                <Text style={styles.gradeBoxText}>Grade</Text>
            </View>

            <View style={styles.majorBox}>
                {/* <TouchableOpacity onPress={() => router.replace('/profile/profileSetup')}></TouchableOpacity> */}
                <Text style={styles.majorBoxText}>Major</Text>
            </View>

            <View style={styles.phoneBox}>
                {/* <TouchableOpacity onPress={() => router.replace('/profile/profileSetup')}></TouchableOpacity> */}
                <Text style={styles.phoneBoxText}>Phone #</Text>
            </View>

            <View style={styles.AdminBox}>
                <TouchableOpacity onPress={() => router.replace('/tabs/home')}>
                <Text style={styles.AdminBoxText}>Admin</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.signUpBox}>
                <TouchableOpacity onPress={() => {router.replace('/login/AppSignupClean')}}>
                    <Text style={styles.signUpBoxText}>Previous</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.homeBox}>
                <TouchableOpacity onPress={() => router.replace('/login/AppLogin')}>
                <Text style={styles.homeBoxText}>Homepage</Text>
                </TouchableOpacity>
            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    entireScreen: {
        paddingVertical: 500,
        paddingHorizontal: 100,
        backgroundColor: 'white',
        borderColor: 'black',
        borderRadius: 30
    },
    leftEyeBox: {
        backgroundColor: 'black', 
        width: 20,
        height: 55,
        top: 40,
        left: 75,
        justifyContent: 'center', 
        alignItems: 'center', 
        position: 'absolute'
    },
    rightEyeBox: {
        backgroundColor: 'black', 
        width: 20,
        height: 55,
        top: 40,
        right: 75,
        justifyContent: 'center', 
        alignItems: 'center', 
        position: 'absolute'
    },
    verifyDetails: {
        width: "100%"
    },
    verifyLabelBox: {
        backgroundColor: '#ebab34', 
        width: 350,
        height: 50,
        top: 140,
        left: 25,
        justifyContent: 'center', 
        alignItems: 'center', 
        position: 'absolute'
    },
    verifyLabelBoxText: {
        fontSize: 30,
        fontWeight: '100',
        color: 'black',
        fontFamily: 'Nexa-Heavy'
    },
    outerDashBox: {
        backgroundColor: 'blue', 
        width: 350,
        height: 150,
        top: 270,
        left: 25,
        justifyContent: 'center', 
        alignItems: 'center', 
        position: 'absolute'
    },
    blankUnderlineBox1: {
        color: 'black',
        width: 50,
        height: 3, 
        top: 250,
        left: 50,
        justifyContent: 'center', 
        alignItems: 'center', 
        position: 'absolute'
    },
    blankUnderlineBox2: {
        color: 'black',
        width: 50,
        height: 3, 
        top: 250,
        left: 133,
        justifyContent: 'center', 
        alignItems: 'center', 
        position: 'absolute'
    },
    blankUnderlineBox3: {
        color: 'black',
        width: 50,
        height: 3, 
        top: 250,
        left: 216,
        justifyContent: 'center', 
        alignItems: 'center', 
        position: 'absolute'
    },
    blankUnderlineBox4: {
        color: 'black',
        width: 50,
        height: 3, 
        top: 250,
        left: 300,
        justifyContent: 'center', 
        alignItems: 'center', 
        position: 'absolute'
    },
    verifyOutsideBox: {
        backgroundColor: 'white', 
        //backgroundColor: 'pink',
        // borderColor: 'black',
        // borderWidth: 5,
        width: 300,
        height: 350,
        top: 250,
        left: 50,
        justifyContent: 'center', 
        alignItems: 'center', 
        position: 'absolute'
    },
    ageBox: {
        backgroundColor: '#c2bcb0',
        width: 100,
        height: 50,
        top: 250,
        left: 25,
        justifyContent: 'center', 
        alignItems: 'center', 
        position: 'absolute'
    },
    ageBoxText: {
        fontSize: 20,
        fontWeight: '100',
        color: 'black',
        fontFamily: 'Nexa-Heavy'
    },
    gradeBox: {
        backgroundColor: '#c2bcb0',
        width: 100,
        height: 50,
        top: 325,
        left: 25,
        justifyContent: 'center', 
        alignItems: 'center', 
        position: 'absolute'
    },
    gradeBoxText: {
        fontSize: 20,
        fontWeight: '100',
        color: 'black',
        fontFamily: 'Nexa-Heavy'
    },
    majorBox: {
        backgroundColor: '#c2bcb0',
        width: 100,
        height: 50,
        top: 400,
        left: 25,
        justifyContent: 'center', 
        alignItems: 'center', 
        position: 'absolute'
    },
    majorBoxText: {
        fontSize: 20,
        fontWeight: '100',
        color: 'black',
        fontFamily: 'Nexa-Heavy'
    },
    phoneBox: {
        backgroundColor: '#c2bcb0',
        width: 100,
        height: 50,
        top: 475,
        left: 25,
        justifyContent: 'center', 
        alignItems: 'center', 
        position: 'absolute'
    },
    phoneBoxText: {
        fontSize: 20,
        fontWeight: '100',
        color: 'black',
        fontFamily: 'Nexa-Heavy'
    },
    AdminBox: {
        backgroundColor: 'transparent', 
        width: 80,
        height: 30,
        top: 625,
        left: 10,
        alignItems: 'center', 
        position: 'absolute'
    },
    AdminBoxText: {
        fontSize: 14,
        fontWeight: '300',
        color: 'black',
        fontFamily: 'Nexa-Heavy'
    },
    signUpBox: {
        backgroundColor: 'transparent', 
        width: 90, 
        height: 30, 
        top: 650,
        left: 10,
        alignItems: 'center', 
        position: 'absolute',
    },
    signUpBoxText: {
        fontSize: 13,
        fontWeight: '800',
        color: 'black',
    },
    homeBox: {
        backgroundColor: 'transparent', 
        width: 90,
        height: 30,
        top: 670,
        left: 10,
        alignItems: 'center', 
        position: 'absolute'
    },
    homeBoxText: {
        fontSize: 14,
        fontWeight: '300',
        color: 'black',
        left: 10,
        fontFamily: 'Nexa-Heavy'
    },

  });