import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
function Header() {
  return (
    <View style={style.header}>
      <Text style={style.font}>KALKULATOR REACT NATIVE</Text>
    </View>
  );
}

const style = StyleSheet.create({
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    backgroundColor: '#39f50f',
  },
  font:{
    fontSize:20,
    fontWeight:"900"
  }

});
export default Header;
