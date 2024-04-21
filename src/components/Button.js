import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'



const Button = ({name, onPress, backgroundColor}) => {
    return (
        <View style={{marginTop: 30}}>
            <TouchableOpacity  style={[styles.ButtonStyle, { backgroundColor: backgroundColor }]} onPress={onPress} >
                <Text style={styles.ButtonText}>{name}</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    ButtonStyle: {
        padding: 15,
        borderRadius: 30
      },
      ButtonText: {
        color: "white",
        textAlign: "center"
      }
});


export default Button;