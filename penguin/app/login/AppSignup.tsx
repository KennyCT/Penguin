import { StyleSheet, Animated, Alert, Button, SafeAreaView, ScrollView, Image, Pressable, TextInput } from 'react-native';

import { Text, View } from '@/components/Themed';
import HomeButton from '@/components/HomeButton'

import { Link, router } from 'expo-router';

import React, { useCallback, useState } from 'react'
import { TouchableOpacity } from 'react-native';
//import LinearGradient from 'react-native-linear-gradient';
import { LinearGradient } from 'expo-linear-gradient';

export default function SignupScreen() {

    const [form, setForm] = useState({
        email: '',
        password: '',
    })

    return(

        <View style={{ flex: 1 }}>
            {/* <View style={{ flex: 1, backgroundColor: '#fff' }}></View>
            <View style={{ flex: 1, backgroundColor: 'powderblue' }}></View>
            <View style={{ flex: 1, backgroundColor: 'skyblue' }}></View> */}

            <LinearGradient
                colors={['white', '#004C99', '#000']}
                style={styles.wholeThing}>
            </LinearGradient>

            <View style={{ paddingHorizontal: 32, position: "absolute", top: 310, width: "100%", backgroundColor: 'transparent'}}>
                
            </View>

            {/* <View style={{ paddingHorizontal: 32, position: "absolute", top: 150, width: "100%", backgroundColor: 'powderblue'}}></View> */}

                <View style={styles.cont}>
                
                    <Text style={{ fontSize: 46, fontWeight: 500, color: "white"}}>email</Text>
                    {/*<Link href="/tabs/iceberg" asChild><Button onPress={() => console.log("pressed")} title="Signup button2" /></Link>*/}
                    <TextInput 
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="email-address"
                        style = {styles.emailBlock}
                        placeholder="example@email.com"
                        placeholderTextColor='#6b7280'
                        value = {form.email}
                        onChangeText={email => setForm({...form, email})}
                    />
                
                </View>

            <View style={{ paddingHorizontal: 32, position: "absolute", top: 310, width: "100%", backgroundColor: 'transparent'}}>

                <Text style={{ fontSize: 46, fontWeight: 500, color: "white"}}>password</Text>
                {/*<Link href="/tabs/iceberg" asChild><Button onPress={() => console.log("pressed")} title="Signup button2" /></Link>*/}
                <TextInput 
                    secureTextEntry
                    style = {styles.emailBlock}
                    placeholder="superhardtoguess"
                    placeholderTextColor='#6b7280'
                    value = {form.password}
                    onChangeText={password => setForm({...form, password})}
                />

                <View style={styles.formAction}>
                    <TouchableOpacity 
                        onPress={() => {
                            Alert.alert("Successfull Sign Up")
                    }}>
                        <View style={styles.btn}>
                            <Text style={styles.btnText}>Sign Up</Text>
                        </View>
                    </TouchableOpacity>
                
                </View>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100%',
    },
    cont : {
        paddingHorizontal: 32, 
        position: "absolute", 
        top: 200, 
        width: "100%", 
        backgroundColor: 'transparent',
        //opacity: .1,
    },
    scrollcontainer: {
      flex: 1
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    text: {
      fontSize: 42,
    },
    emailBlock: {
        backgroundColor: '#fff',
        borderRadius: 12,
        paddingVertical: 8,
        paddingHorizontal: 10,
        marginBottom: 30,
    },
    formAction: {
        marginVertical: 24,
        backgroundColor: 'transparent',
    },
    wholeThing: {
        //backgroundColor: 'skyblue',
        paddingVertical: 600,
        paddingHorizontal: 100,
        //top: 100,
        //marginBottom: 60,
    },
    btn: {
        top: 100,
        backgroundColor: '#fff',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    btnText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#2881D8'
    },
  });