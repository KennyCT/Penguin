import { StyleSheet, Animated, Alert, Button, SafeAreaView, ScrollView, Image, Pressable, TextInput, ImageBackground } from 'react-native';

import { Text, View } from '@/components/Themed';
import HomeButton from '@/components/HomeButton'
import { Link, router } from 'expo-router';
import React, { useCallback, useState } from 'react'
import { TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import Apploading from 'expo-app-loading'


// TODO:
// 1. backend for AppSigninClean
// 2. RPI iceberg front/back end


export default function SigninScreen() {

    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    let [fontsLoaded] = useFonts({
        'Lobster-Regular': require('./../../assets/fonts/Lobster1.4.otf'),
        'Cool-Vetica': require('./../../assets/fonts/coolvetica_rg.otf'),
        'Nexa-Heavy': require('./../../assets/fonts/Nexa-Heavy.ttf'),
    });
    if (!fontsLoaded){
        return <Apploading/>;
    }

    return(

        <View style={{ flex: 1 }}>

            <LinearGradient
                // the only reason you only see 2 colors blend is because the box is so large that
                // it does not fit entire blend on screen
                // can also blend more than 3 colors if desired
                colors={['#004C99', 'skyblue', 'white']} 
                style={styles.entireScreen}>
            </LinearGradient>

            <View style={styles.penguinBox}>
                <Text style={styles.penguinBoxText}>Penguin</Text>
            </View>

            <View style={styles.emailBox}>
                <Text style={styles.emailBoxText}>Email</Text>
                <TextInput 
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="email-address"
                    style = {styles.emailANDpassBox}
                    placeholder="example@email.com"
                    placeholderTextColor='#6b7280'
                    value = {form.email}
                    onChangeText={email => setForm({...form, email})}>
                </TextInput>
            </View>


            <View style={styles.passwordBox}>
                <Text style={styles.passwordBoxText}>Password</Text>
                <TextInput 
                    secureTextEntry
                    style = {styles.emailANDpassBox}
                    placeholder="superhardtoguess"
                    placeholderTextColor='#6b7280'
                    value = {form.password}
                    onChangeText={password => setForm({...form, password})}>
                </TextInput>
            </View>

            <View style={styles.signInBox}>
                <TouchableOpacity onPress={() => {Alert.alert("Successful Login")}}>
                    <View style={styles.signInBoxBtn}>
                        <Text style={styles.signInBoxText}>Sign In</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.loginBox}>
                <TouchableOpacity onPress={() => {Alert.alert("Successful Sign Up") /*router.replace('/login/AppLogin')*/}}>
                    <Text style={styles.loginBoxText}>Don't have an account?</Text>
                </TouchableOpacity>
            </View>

            {/* <ImageBackground source={require('./../../assets/images/icon.png')} style={styles.icebergPic}>
                    <Text>HELLO</Text>
            </ImageBackground> */}

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
    passwordBox: {
        backgroundColor: 'transparent', 
        width: 300, 
        height: 100, 
        top: 330,
        left: 50,
        justifyContent: 'center', 
        position: 'absolute',
    },
    passwordBoxText: {
        fontSize: 34,
        fontWeight: '800',
        color: 'white',
        left: 10,
        fontFamily: 'Nexa-Heavy'
    },
    signInBox: {
        backgroundColor: 'transparent', 
        width: 300, 
        height: 100, 
        top: 430,
        left: 50,
        justifyContent: 'center', 
        alignItems: 'center', 
        position: 'absolute',
    },
    signInBoxBtn: {
        backgroundColor: '#2881D8',
        borderRadius: 30,
        //flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 7,
        paddingHorizontal: 70,
    },
    signInBoxText: {
        fontSize: 30,
        fontWeight: '800',
        color: 'white',
        //fontFamily: 'Nexa-Heavy'
    },
    loginBox: {
        backgroundColor: 'transparent', 
        width: 170, 
        height: 20, 
        top: 510,
        left: 72,
        //justifyContent: 'center', 
        alignItems: 'center', 
        position: 'absolute',
        //borderRadius: 30,
    },
    loginBoxText: {
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