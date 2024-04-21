import React, { useState } from 'react'
import { Alert, StyleSheet, TextInput, TouchableOpacity, View, } from 'react-native'
import Text from '@kaloraat/react-native-text'


import Button from '../components/Button'
import axios from 'axios'


const SignUpScreen = ({ navigation }) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 

  return (
    <View style={{ flex: 1, justifyContent: "center", margin: 20 }}>

      {/* Text Inputs  */}

      <Text large semi center >Sign Up</Text>


      <View>

        <Text style={styles.textinputheading}>Name</Text>
        <TextInput
          style={styles.textinput}
          // placeholder=''
          value={name}
          onChangeText={(text) => setName(text)}
          autoCapitalize="words"
        />


        <Text style={styles.textinputheading}>Email</Text>
        <TextInput
          style={styles.textinput}
          // placeholder=''
          value={email}
          onChangeText={(text) => setEmail(text)}
        />


        <Text style={styles.textinputheading}>Password</Text>
        <TextInput
          style={styles.textinput}
          // placeholder=''
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
      </View>



      {/* Sign Up Button */}
      <Button name="Sign Up" backgroundColor="black" />

      <TouchableOpacity style={{marginTop: 10}} onPress={()=> navigation.navigate('Login')} >
        <Text small center>Already Joined ?<Text style={{ color: "red" }}> Sign In</Text></Text>
      </TouchableOpacity>


    </View>
  )
};

const styles = StyleSheet.create({
  textinput: {
    borderBottomWidth: 0.8,
    height: 40,
    borderBottomColor: "black"
  },
  textinputheading: {
    marginTop: 10
  }
});

export default SignUpScreen;

