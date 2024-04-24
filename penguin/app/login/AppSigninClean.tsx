import { StyleSheet, Animated, Alert, Button, SafeAreaView, ScrollView, Image, Pressable, TextInput, ImageBackground } from 'react-native';

import { Text, View } from '@/components/Themed';
import HomeButton from '@/components/HomeButton'
import { Link, router } from 'expo-router';
import React, { useCallback, useState, useEffect } from 'react'
import { TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import Apploading from 'expo-app-loading'
import { SplashScreen } from 'expo-router';


// TODO:
// 1. backend for AppSigninClean
// 2. RPI iceberg front/back end
// 3. front/back Signup
// 4. Home screen

import axios from 'axios';
import { ActivityIndicator } from 'react-native';
import { query, response } from 'express';


export default function SigninScreen() {

    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    const handleInputs = () => {
        if (form.email == '' || form.password == '') {
            Alert.alert("No inputs given");
        }
        else{
            Alert.alert("Yes inputs given");
            //handleSignin(/*form*/);
        }
        //handleSignin(/*form*/);
    }

    // const test = () => {
    //     axios.get()
    // }

    //     // const url = 'https://pma.sparkedhost.com/index.php?route=/sql&pos=0&db=s111397_penguin&table=users&server=8';
    //     // axios
    //     //     .get(url)
    //     //     .then(response => {
    //     //         Alert.alert(response.data.username.);
    //     //     }).catch(error => {
    //     //         Alert.alert(error);
    //     //     })
    // }

    // const handleSignin = ( /*credentials: {email: string; password: string;}*/ ) => {
    //     const url = 'https://pma.sparkedhost.com/index.php?route=/sql&pos=0&db=s111397_penguin&table=users&server=8';

    //     form.email = 'shoupm';
    //     form.password = 'matthew';

    //     axios
    //     //.post(url, credentials)
    //     // .then(res) => {
    //     //     const result = res.status.toString;
    //     // })
    //     // .catch(error) => {
    //     //     Alert.alert(error.JSON());
    //     // })

    //     .post(url, "SELECT * FROM `users` WHERE username = 'jackh' AND firstname = 'Henry';")
    //     .then(res => {
    //         //setForm(res.data.username)
    //         //Alert.alert(res.data.username);
    //         Alert.alert('can query');
    //         if(res.data.username == 'jackh') {
    //             Alert.alert('found user');
    //         }
    //         else{
    //             Alert.alert('didnt find user');
    //         }

    //     })
    //     .catch(err => {
    //         Alert.alert('cannot query');
    //     })

    // }

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
                <Text style={styles.penguinBoxText}>Penguin</Text>
            </View>

            <View style={styles.penguinImageBox}>
                <Image style={styles.penguinImage} 
                        source={require('./../../assets/images/pen.png')}>
                </Image>
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
                <TouchableOpacity onPress={handleInputs}>
                    <View style={styles.signInBoxBtn}>
                        <Text style={styles.signInBoxText}>Sign In</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.signUpBox}>
                {/* <TouchableOpacity onPress={() => {Alert.alert("Successful Sign Up")}}> */}
                <TouchableOpacity onPress={() => {router.replace('/login/AppSignupClean')}}>
                    <Text style={styles.signUpBoxText}>Don't have an account?</Text>
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
    penguinImageBox: {
        // backgroundColor: 'green', 
        // width: 300, 
        // height: 170, 
        // // paddingHorizontal: 100,
        // // paddingVertical: 100,
        // top: 90,
        // left: 50,
        // //right: 50,
        // justifyContent: 'center', 
        // alignItems: 'center', 
        // position: 'absolute'
    },
    penguinImage: {
        // backgroundColor: 'pink', 
        // width: 300, 
        // height: 170, 
        // // paddingHorizontal: 100,
        // // paddingVertical: 100,
        // top: 10,
        // //left: 50,
        // //right: 50,
        // justifyContent: 'center', 
        // alignItems: 'center', 
        // position: 'absolute'
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
    backEmailbox: {
        backgroundColor: 'black', 
        width: '100%', 
        height: 100, 
        top: 240,
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
    signUpBox: {
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
    signUpBoxText: {
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