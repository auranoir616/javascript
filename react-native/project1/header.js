import React from 'react';
import {Text} from 'react-native';
// props dalam function componen
function Header(props) {
  var name = "@project1"
  return <Text>ini adalah header external {props.person} {name}</Text>;
}

export default Header;
