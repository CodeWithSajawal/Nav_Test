import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';

import Button from '../components/Button';

import Text from '@kaloraat/react-native-text'


const LoginScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  


  return (
    <View style={{ flex: 1, justifyContent: "center", margin: 20 }}>

      {/* Text Inputs  */}

      <Text large semi center >Sign In</Text>


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
      <Button name="Sign In" backgroundColor={'black'} onPress={() => navigation.navigate("Root")} />


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
export default LoginScreen;