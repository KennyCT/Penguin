import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

export default function HomeButton(
  props: Omit<React.ComponentProps<typeof Link>, 'href'> & { href: string }
) {
    const filledBgColor = props.color || "#007260";
    const outlinedColor = "white";
    const bgColor = props.filled ? filledBgColor : outlinedColor;
    const textColor = props.filled ? "white" : "#007260";

    return (
        <TouchableOpacity
            style={{
                ...styles.button,
                ...{ backgroundColor: bgColor },
                ...props.style
            }}
            onPress={props.onPress}
        >
            <Text style={{ fontSize: 18, ... { color: textColor } }}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingBottom: 16,
        paddingVertical: 10,
        borderColor: "#007260",
        borderWidth: 2,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center'
    }
})