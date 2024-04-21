import React from 'react';
import { ImageStyle, TextProps } from 'react-native';

import Icon from 'react-native-easy-icon';


const IconStyle = {
  padding: 0,
  margin: 0,
};

const MaskIconStyle = {
  padding: 0,
  margin: 0,
};



export const SearchIcon = () => (
  <Icon
    style={MaskIconStyle}
    type="material-community"
    name={'phone'}
    size={20}
    color={"white"}
    
  />
);

