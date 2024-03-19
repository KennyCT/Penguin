import { StyleSheet, Animated, Alert, Button, SafeAreaView, ScrollView, Image, Pressable, TextInput } from 'react-native';

import { Text, View } from '@/components/Themed';
import HomeButton from '@/components/HomeButton'
import { Link, router } from 'expo-router';
import React, { useCallback, useState } from 'react'
import { TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function SignupScreen() {

    const [form, setForm] = useState({
        email: '',
        password: '',
    })

    return(

        <View style={{ flex: 1 }}>
            <LinearGradient
                colors={['white', '#004C99', '#000']}
                style={styles.entireScreen}>
            </LinearGradient>


            <View style={styles.penguinBox}>
                <Text style={styles.penguinBoxText}>PENGUIN</Text>
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
    },
    penguinBox: {
        backgroundColor: 'white', 
        width: 300, 
        height: 70, 
        // paddingHorizontal: 100,
        // paddingVertical: 100,
        top: 100,
        left: 50,
        //right: 50,
        justifyContent: 'center', 
        alignItems: 'center', 
        position: 'absolute'
    },
    penguinBoxText: {
        fontSize: 46,
        fontWeight: '800',
        color: '#2881D8'
    },
    emailBox: {
        backgroundColor: 'white', 
        width: 300, 
        height: 120, 
        top: 190,
        left: 50,
        justifyContent: 'center', 
        position: 'absolute'
    },
    emailBoxText: {
        fontSize: 36,
        fontWeight: '800',
        color: '#2881D8'
    },
    passwordBox: {
        backgroundColor: 'white', 
        width: 300, 
        height: 100, 
        top: 310,
        left: 50,
        justifyContent: 'center', 
        position: 'absolute'
    },
    passwordBoxText: {
        fontSize: 36,
        fontWeight: '800',
        color: '#2881D8'
    },

  });