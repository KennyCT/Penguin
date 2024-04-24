import React, { useState} from 'react'
import { View, Animated, TouchableOpacity, Text} from 'react-native'

// want to have text boxes that float around on screen
// when user clicks a text box with a preference they
// like, the bubble pops and the attribute is given
// to the users profile

// also would like to make the app a little more 
// flashy, like the logo fading in slowly,
// sparking with glitter effect, or 
// using the spring and decey functions given
// by the expo animated library.

// additionally would like to see that when the user
// is brought to a different screen, everytime a 
// little animation is played that is more interesting
// then the swipe right effect that it has now. Maybe
// the screen floats off like an iceberg, it is sucked
// into a blackhole, decays, falls apart, etc. This
// app is in its early stages yes, but the pages I
// implemented feel clunky. I need to have the pages
// come to life.

export default function slideAcrossScreen() {

    const value = useState(new Animated.ValueXY({ x: 0, y: 0}))[0]

    function moveBall() {
        Animated.timing(value, { 
            toValue: { x: 100, y: 100},
            duration: 1000,
            useNativeDriver: false
        }).start()
    }

    return (

        <View>
            <View>
                <View
                    style={{width: 100, height: 100, borderRadius: 50, backgroundColor: 'red'}}>
                </View>
            </View>

            <TouchableOpacity onPress={moveBall}>
                <Text>Click me!</Text>
            </TouchableOpacity>
            
        </View>
    );
};
