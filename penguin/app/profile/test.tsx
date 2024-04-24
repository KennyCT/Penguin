import React, {useRef, useEffect} from 'react';
import {Animated, Text, View} from 'react-native';
import type {PropsWithChildren} from 'react';
import type {ViewStyle} from 'react-native';
import exp from 'constants';
import { TouchableOpacity } from 'react-native-gesture-handler';

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

type FadeInViewProps = PropsWithChildren<{style: ViewStyle}>;

const FadeInView: React.FC<FadeInViewProps> = props => {
    
    const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

    useEffect(() => {
        Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
        }).start();
    }, [fadeAnim]);

    return (
        <Animated.View // Special animatable View
        style={{
            ...props.style,
            opacity: fadeAnim, // Bind opacity to animated value
        }}>
        {props.children}
        </Animated.View>
    );
};

// You can then use your `FadeInView` in place of a `View` in your components:
export default () => {
    return (

        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',}}>
        <FadeInView
            style={{width: 250, height: 50, backgroundColor: 'powderblue',
            }}>
            <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
        </FadeInView>
        </View>

    );
};
