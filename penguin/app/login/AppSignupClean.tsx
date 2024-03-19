import { StyleSheet, Animated, Alert, Button, SafeAreaView, ScrollView, Image, Pressable, TextInput } from 'react-native';

import { Text, View } from '@/components/Themed';
import HomeButton from '@/components/HomeButton'
import { Link, router } from 'expo-router';
import React, { useCallback, useState } from 'react'
import { TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import Apploading from 'expo-app-loading'


export default function SignupScreen() {

    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    let [fontsLoaded] = useFonts({
        'Lobster-Regular': require('./../../assets/fonts/Lobster1.4.otf')
    });
    if (!fontsLoaded){
        return <Apploading/>;
    }

    return(

        <View style={{ flex: 1 }}>

            <LinearGradient
                // the only reason you only see 2 colors blend is because the box is so large that
                // it does not fit entire blend on screen
                colors={['#004C99', 'skyblue', 'white']} 
                style={styles.entireScreen}>
            </LinearGradient>

            <View style={styles.penguinBox}>
                <Text style={styles.penguinBoxText}>Penguin</Text>
            </View>

            <View style={styles.emailBox}>
                <Text style={styles.emailBoxText}>email</Text>
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
                <Text style={styles.passwordBoxText}>password</Text>
                <TextInput 
                    secureTextEntry
                    style = {styles.emailANDpassBox}
                    placeholder="superhardtoguess"
                    placeholderTextColor='#6b7280'
                    value = {form.password}
                    onChangeText={password => setForm({...form, password})}>
                </TextInput>
            </View>

            <View style={styles.signUpBox}>
                <TouchableOpacity onPress={() => {Alert.alert("Successful Sign Up")}}>
                    <View style={styles.signUpBoxBtn}>
                        <Text style={styles.signUpBoxText}>Sign Up</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.loginBox}>
                <TouchableOpacity onPress={() => {Alert.alert("Successful Login")}}>
                    <Text style={styles.loginBoxText}>Have an account? Click here to Login</Text>
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
        borderColor: 'lightblue',
        borderWidth: 1,
        borderRadius: 12,
        paddingVertical: 8,
        paddingHorizontal: 10,
        //marginBottom: 30,
        width: 275,
        height: 30,
        left: 10
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
        fontSize: 36,
        fontWeight: '800',
        color: 'white',
        left: 10
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
        fontSize: 36,
        fontWeight: '800',
        color: 'white',
        left: 10
    },
    signUpBox: {
        backgroundColor: 'transparent', 
        width: 300, 
        height: 100, 
        top: 430,
        left: 50,
        justifyContent: 'center', 
        alignItems: 'center', 
        position: 'absolute',
    },
    signUpBoxBtn: {
        backgroundColor: '#2881D8',
        borderColor: '#2881D8',
        borderRadius: 30,
        //flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 7,
        paddingHorizontal: 70,
    },
    signUpBoxText: {
        fontSize: 30,
        fontWeight: '800',
        color: 'white'
    },
    loginBox: {
        backgroundColor: 'white', 
        width: 250, 
        height: 30, 
        top: 620,
        left: 75,
        justifyContent: 'center', 
        alignItems: 'center', 
        position: 'absolute',
        borderRadius: 30
    },
    loginBoxText: {
        fontSize: 10,
        fontWeight: '800',
        color: '#2881D8'
    }

  });