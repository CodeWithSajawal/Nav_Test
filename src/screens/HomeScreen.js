import React from 'react';
import {  StyleSheet, Text, View } from 'react-native'
import Button from '../components/Button';
import Icon from 'react-native-easy-icon';
import { SearchIcon } from '../components/icons';




const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button name='Go To Login' backgroundColor={"black"} onPress={()=> navigation.navigate('SignUp')}/>
      <Icon  type="feather" name="award" color="coral" size={21}/>
      <SearchIcon/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})